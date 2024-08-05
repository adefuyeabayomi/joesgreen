import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CustomDialog from "../../components/customDialog";
import "./style.css";
import image from "../../assets/image25.png";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useLoading } from "../../components/utils/loadingContext";
import { useNotificationTrigger } from "../../components/utils/notificationTrigger";
import { dishService } from "joegreen-service-library";
import { Dish } from "joegreen-service-library/dist/services/dishService";
import { addToCart, removeFromCart } from "../../store/userSlice";
import { formatNumberWithCommas } from "../../functions/utils";
import { InputMain } from "../../components/input";
import { animateScroll as scroll } from "react-scroll";

export default function AddToCart(): React.JSX.Element {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [dish, setDish] = useState<Dish>(); // Replace 'any' with appropriate type
  const [quantity, setQuantity] = useState<number>(1);
  const [showMoreInput, setShowMoreInput] = useState<boolean>(false);
  const dispatch = useDispatch();
  const { setLoading, setLoadingText } = useLoading();
  const { triggerError, triggerSuccess } = useNotificationTrigger();
  function goToCheckout() {
    navigate("/checkout");
  }
  function goToOrders() {
    navigate("/order");
  }

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const dishId = searchParams.get("dishId");

  useEffect(() => {
    const fetchDish = async () => {
      if (dishId) {
        try {
          setLoading(true);
          setLoadingText("Fetching dish details...");
          const data = await dishService.getDishById(dishId);
          setDish(data);
          console.log({ dish: data });
        } catch (error) {
          triggerError({
            title: "Error",
            message: "Failed to fetch dish details",
          });
          console.error(error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchDish();
  }, [dishId]);
  useEffect(() => {
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);
  const handleAddToCart = () => {
    if (dish) {
      let addons = dish.addons.map((x) => {
        return { ...x, quantity: 0 };
      });
      const cartItem = {
        ...dish,
        addons,
        id: dish._id,
        name: dish.name,
        price: dish.price,
        quantity,
      };

      dispatch(addToCart(cartItem));
      triggerSuccess({
        title: "Success",
        message: "Dish added to cart successfully",
      });
    }
  };
  return (
    <div>
      <CustomDialog isOpen={isDialogOpen} onClose={closeDialog}>
        <div className="py-1" />
        <p className="font-subtitle font-bold">Order Added Successfully</p>
        <p className="font-p font-regular">
          Your order has been added to your cart. You can proceed to add more
          items or checkout your order now.
        </p>
        <div className="container-fluid no-space">
          <div className="row no-space">
            <div className="col-12 col-md-6 no-space">
              <button
                className="ATCMButton Continue font-small font-regular pointer"
                onClick={() => {
                  handleAddToCart();
                  goToOrders();
                }}
              >
                Continue Shopping
              </button>
            </div>
            <div className="col-12 col-md-6 no-space px-1">
              <button
                className="ATCMButton PTC font-small font-regular pointer"
                onClick={() => {
                  handleAddToCart();
                  goToCheckout();
                }}
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
        <div className="py-2" />
      </CustomDialog>
      <div className="mainSpacing">
        <div className="py-3" />
        <div className="">
          <div>
            <p className="text-center font-heading-6 font-medium green-color-main">
              ADD TO CART
            </p>
          </div>
          <div className="py-2" />
          <div className="container-fluid no-space">
            <div className="row no-space align-items-center">
              <div className="col-12 col-md-6">
                <div className="ATCImageItemContainer">
                  <img src={image} />
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="ATCContentsContainer font-p">
                  <div>
                    <p className="font-subtitle font-medium no-space">
                      {dish?.name || ""}
                    </p>
                  </div>
                  <div>
                    <p className="font-medium">Meal Description:</p>
                  </div>
                  <div>
                    <p>{dish?.description || ""}</p>
                  </div>
                  <div>
                    <p className="font-subtitle">
                      ₦ {formatNumberWithCommas(dish?.price || 0)} Per Plate
                    </p>
                  </div>
                  <div>
                    <p className="font-regular">
                      How many plate would you like to order?
                      <button className="ATCButton pointer active px-3 mx-2">
                        {quantity} Plate{Number(quantity) > 1 ? "s" : ""}
                      </button>
                    </p>
                  </div>
                  <div className="py-1" />
                  <div>
                    <InputMain
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Number(e))}
                    />
                  </div>
                  <div className="py-1" />
                  <div className="order-button-container">
                    <button
                      className="pointer"
                      onClick={() => {
                        openDialog();
                      }}
                    >
                      Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div className="py-3" />
      </div>
    </div>
  );
}
