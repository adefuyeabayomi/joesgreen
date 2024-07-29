import React,{useState} from "react";
import { OrderCheckOutItem } from "../../components/orderItem";
import './style.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { InputMain } from "../../components/input";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLoading } from "../../components/utils/loadingContext";
import { useNotificationTrigger } from "../../components/utils/notificationTrigger";
import { removeFromCart,addToCart } from "../../store/userSlice";
import CustomDialog from "../../components/customDialog";
import { Dish } from "joegreen-service-library/dist/services/dishService";


export default function CheckOut (): React.JSX.Element {
    let cartItems = useSelector((state:{user:{userCart}}) => state.user.userCart);
    const dispatch = useDispatch();
    const { setLoading, setLoadingText } = useLoading();
    const { triggerError, triggerSuccess } = useNotificationTrigger();
    const [currentDish,setCurrentDish] = useState<Dish>()
    const [showEdit,setShowEdit] = useState(false)
    function toggleEdit () {
        setShowEdit(!showEdit)
    }
    console.log({cartItems})

    const navigate = useNavigate()
    
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
                                        cartItems.map(item => {
                                            return (
                                                <div className="no-space col-12 col-md-6">
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
                                                        <p>N 35,500</p>
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
                                                        <p>N 5,500</p>
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
                                                <InputMain value="" onChange={(e)=>{}} placeholder="Phone Number" icon={<FontAwesomeIcon icon={faEnvelope} />} />
                                            </div>
                                            <div className="py-1" />
                                            <div className="">
                                            <InputMain value="" onChange={(e)=>{}} placeholder="Delivery Information" icon={<FontAwesomeIcon icon={faEnvelope} />} />
                                            </div>
                                            <div className="py-2" />
                                            <div>
                                                <button className="checkout-btn">Proceed To Checkout</button>
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


