import React,{useState} from "react";
import { OrderCheckOutItem } from "../../components/orderItem";
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { InputMain } from "../../components/input";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLoading } from "../../components/utils/loadingContext";
import { useNotificationTrigger } from "../../components/utils/notificationTrigger";
import { removeFromCart,addToCart } from "../../store/userSlice";
import CustomDialog from "../../components/customDialog";
import { Dish } from "joegreen-service-library/dist/services/dishService";
import { orderService } from "joegreen-service-library";
import { CartItem, Order } from "joegreen-service-library/dist/services/orderService";
import { useAuth } from "../../navigation/AuthContext";

export default function CheckOut (): React.JSX.Element {
    let token = window.localStorage.getItem('accessToken')
    let auth = useAuth()
    let cartItems = useSelector((state:{user:{userCart}}) => state.user.userCart);
    const dispatch = useDispatch();
    const { setLoading, setLoadingText } = useLoading();
    const { triggerError, triggerSuccess } = useNotificationTrigger();
    const [currentDish,setCurrentDish] = useState<Dish>()
    const [showEdit,setShowEdit] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState<number>(0);
    const [deliveryInfo, setDeliveryInfo] = useState("");
    const [inputError, setInputError] = useState<{ phoneNumber?: boolean; deliveryInfo?: boolean }>({});
    const navigate = useNavigate()
    const deliveryFee = 1000

    const validateInputs = () => {
        const errors: { phoneNumber?: boolean; deliveryInfo?: boolean } = {};
        if (String(phoneNumber).length<10) {
            errors.phoneNumber = true;
        }
        if (deliveryInfo.length<20) {
            errors.deliveryInfo = true;
        }
        setInputError(errors);
        let inValid = errors.deliveryInfo || errors.phoneNumber;
        return !inValid
    };

    const resetInputError = (field?: 'phoneNumber' | 'deliveryInfo') => {
        if (field) {
            setInputError(prevErrors => ({
                ...prevErrors,
                [field]: false
            }));
        } else {
            setInputError({});
        }
    };

    const payWithMonnify = async (grandTotal:number,phoneNumber,email,narration,orderId) => {
        let monnify = window.MonnifySDK
        monnify.initialize({
            amount: grandTotal,
            currency: "NGN",
            reference: new String((new Date()).getTime()),
            customerFullName: phoneNumber.toString(),
            customerEmail: email,
            apiKey: "MK_TEST_QA372KPS4C",
            contractCode: "5878350992",
            paymentDescription: `Payment for ${narration}`,
            onLoadStart: () => {
                console.log("loading has started");
            },
            onLoadComplete:() => {
                console.log("SDK is UP");
            },
            onComplete: function(response) {
                //Implement what happens when the transaction is completed.
                console.log({response})
                let data = response
                    if(data.status == 'SUCCESS'){
                    setLoading(true)
                    setLoadingText('Saving Payment Status')
                    let updateData = {
                        paymentStatus: 'Completed',
                        transactionRef: data.transactionReference,
                        paymentRef: data.paymentReference
                    }
                    orderService.updateOrder(orderId,updateData,token).then(res=>{
                        console.log({res})
                        setLoading(false)
                        navigate('/user/orders')
                    }).catch(error=>{                        
                        console.error(error)
                        setLoading(false)
                    })

                    }
                    else {
                        console.log('Payment Was Unsuccessful')
                    }
            },
            onClose: function(data) {
                //Implement what should happen when the modal is closed here
                console.log('do nothing', data);
            }
        });
    }

    const handleCheckout = async () => {
        // Create the order object with cart items and narration
        let valid = validateInputs()
        console.log({valid})

        if(!valid){
            return;
        }
        const order = {
            cartItems: cartItems,
            narration: cartItems
                .map(item => `${item.quantity} plate${item.quantity > 1 ? 's' : ''} of ${item.name}`)
                .join(', '),
            phoneNumber: phoneNumber.toString(),
            deliveryInfo: deliveryInfo
        };
        
        // Calculate the grand total cost
        const grandTotal = calculateGrandTotal(cartItems);
        setLoading(true)
        try {
            let orderRes = await orderService.createOrder(order,token)
            setLoading(false)
            payWithMonnify(grandTotal,phoneNumber,auth.email,order.narration,orderRes.order._id)
        }
        catch(error){
            console.error(error)
        }
        finally {
            setLoading(false)
        }
        // Log the order object and grand total to the console
        //console.log('Order: Created', orderRes);
        //console.log({paid})
        //let cancelled = await cancelOrder("66a81ad0e01566e71e3c7e92", token)
        //console.log({cancelled})
        //navigate('/user/orders')
    };
    
    function toggleEdit () {
        setShowEdit(!showEdit)
    }

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
        triggerSuccess({ title: 'Success', message: 'Dish Removed From Cart successfully' })
    }

    const handleEdit = (id) => {
        let dishIndex = cartItems.findIndex(item => item.id === id)
        let dish = cartItems[dishIndex]
        setCurrentDish(dish)
        toggleEdit()
    }

    const decreaseAddonQuantity = (id) => {
        setCurrentDish(prevDish => {
            // Create a new array of addons with updated quantity
            const updatedAddons = prevDish.addons.map(addon => {
                if (addon._id === id) {
                    return {
                        ...addon,
                        quantity: Math.max((addon.quantity || 0) - 1, 0)
                    };
                }
                return addon;
            });
    
            // Return a new dish object with the updated addons
            return {
                ...prevDish,
                addons: updatedAddons
            };
        });
    };
    
    const increaseAddonQuantity = (id) => {
        setCurrentDish(prevDish => {
            // Create a new array of addons with updated quantity
            const updatedAddons = prevDish.addons.map(addon => {
                if (addon._id === id) {
                    return {
                        ...addon,
                        quantity: (addon.quantity || 0) + 1
                    };
                }
                return addon;
            });
    
            // Return a new dish object with the updated addons
            return {
                ...prevDish,
                addons: updatedAddons
            };
        });
    };

    const handleAddToCart = () => {    
          dispatch(addToCart(currentDish));
          triggerSuccess({ title: 'Updated addons', message: '' })
          toggleEdit()
        }

        const calculateGrandTotal = (cartItems: CartItem[]) => {
            return cartItems.reduce((grandTotal, item) => {
                // Calculate the total addons price for the current item
                const addonsTotalPrice = item.addons.reduce((total, addon) => {
                    return total + (addon.price * addon.quantity);
                }, 0);
        
                // Calculate the total cost per plate for the current item
                const totalCostPerPlate = item.price + addonsTotalPrice;
        
                // Calculate the total cost for the current item based on its quantity
                const itemTotalCost = totalCostPerPlate * item.quantity;
        
                // Add the current item's total cost to the grand total
                return grandTotal + itemTotalCost;
            }, 0);
        };
        
    return (
        <div>
            <div className="mainSpacing">
            <CustomDialog isOpen={showEdit} onClose={toggleEdit}>
                <div>
                    <p className="font-subtitle font-medium"> Include Addons to Plate</p>
                    <div>
                        {
                            currentDish ? currentDish.addons.map(x=>{
                                return (
                                    <div key={x._id} className="row">
                                        <div className="col"><p><span> {`${x.name}: (N ${x.price}/unit), `} </span></p></div>
                                        <div className="w-max-content"><p> <button className="font-p font-medium text-center addonOpButton" onClick={()=> increaseAddonQuantity(x._id)}>+</button>  {x.quantity} <button className="font-p font-medium text-center addonOpButton" onClick={()=> decreaseAddonQuantity(x._id)}>-</button></p></div>
                                    </div>
                                )
                            }) : null
                        }
                    </div>
                    <div className="py-1" />
                    <div>
                        <button className="UpdateAddonButton" onClick={handleAddToCart}>Update</button>
                    </div>
                </div>
            </CustomDialog>
                <div className="py-3" />
                <div className="container-fluid no-space">
                    <div className="row no-space">
                        <div className="col-12 no-space">
                            <div>
                                <p className="font-heading-6 green-color-main font-medium">PROCEED TO CHECKOUT</p>
                                <p className="font-p col-12 col-md-9">Check out your cart items. You can edit your meals with our addons. Just click the edit button.</p>
                            </div>
                            <div className="row no-space">
                                
                                    {cartItems.length > 0 ? (
                                        cartItems.map((item, index) => {
                                            return (
                                                <div className={`no-space col-12 col-md-6 ${index % 2 !== 0 ? 'checkout-margin-left': null}`}>
                                                    <div className="py-2" />
                                                    <OrderCheckOutItem
                                                        key={item._id}
                                                        dish={item}
                                                        onEdit={() => {handleEdit(item._id)}}
                                                        onRemove={handleRemoveFromCart}
                                                    />
                                                </div>
                                        )})
                                    ) : (
                                        <p><i>No items in the cart!</i></p>
                                    )}
                            </div>
                        </div>
                        <div className="col-12 no-space">
                            {cartItems.length > 0 ? (
                                <div className="orderContainer">
                                    <div>
                                        <p className="font-heading-6 font-regular">Order Summary</p>
                                    </div>
                                    <div className="summaryItem">
                                        <div className="order-summary-divider" />
                                        <div className="py-2" />
                                        <div className="container-fluid no-space">
                                            <div className="row no-space font-p font-medium">
                                                <div className="col no-space">
                                                    <div>
                                                        <p>Grand Total</p>
                                                    </div>
                                                </div>
                                                <div className="w-max-content">
                                                    <div>
                                                        <p>N {calculateGrandTotal(cartItems)}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row no-space font-p font-medium">
                                                <div className="col no-space">
                                                    <div>
                                                        <p>Delivery Fees</p>
                                                    </div>
                                                </div>
                                                <div className="w-max-content">
                                                    <div>
                                                        <p>N {deliveryFee}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="py-2" />
                                        <div className="deliveryInformation">
                                            <div className="">
                                                <p className="font-subtitle font-medium">Delivery Information</p>
                                            </div>
                                            <div className="py-1" />
                                            <div className="">
                                                <InputMain onFocus={()=>{resetInputError('phoneNumber')}} showError={inputError.phoneNumber} errorMessage="Phone Number is required" type="number" value={phoneNumber} onChange={(e)=>setPhoneNumber(Number(e))} placeholder="Phone Number" icon={<FontAwesomeIcon color="#737373" icon={faPhone} />} />
                                            </div>
                                            <div className="py-1" />
                                            <div className="">
                                                <InputMain onFocus={()=>{resetInputError('deliveryInfo')}} showError={inputError.deliveryInfo} value={deliveryInfo} errorMessage="Delivery Address Is Required" onChange={setDeliveryInfo} placeholder="Delivery Information" icon={<FontAwesomeIcon color="#737373" icon={faMapLocation} />} />
                                            </div>
                                            <div className="py-2" />
                                            <div>
                                                <button className="checkout-btn" onClick={handleCheckout}>Proceed To Checkout</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>      
                                    ) : (
                                       null
                                    )}
                        </div>
                    </div>
                </div>
                <div className="py-3" />
            </div>
        </div>
    )
}


