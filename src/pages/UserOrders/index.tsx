import React, { useEffect, useState } from "react";

import { animateScroll as scroll } from "react-scroll";
import { orderService } from "joegreen-service-library";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNotificationTrigger } from "../../components/utils/notificationTrigger";
import { useLoading } from "../../components/utils/loadingContext";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { UserOrderItem } from "../../components/orderItem";
import { useNavigate } from "react-router-dom";
import { Order } from "joegreen-service-library/dist/services/orderService";
import { useAuth } from "../../navigation/AuthContext";
import { calculateGrandTotal } from "../../functions/utils";
import CustomDialog from "../../components/customDialog";
import moment from "moment";
import filterIcon from "../../assets/filter-icon.png";

import "./style.css";

export default function UserOrders(): React.JSX.Element {
  let token = window.localStorage.getItem("accessToken");
  let [orders, setOrders] = useState<Order[]>([]);
  let [reviewVisible,setReviewVisible] = useState(false)
  let auth = useAuth();
  const { setLoading, setLoadingText } = useLoading();
  const { triggerError, triggerSuccess } = useNotificationTrigger();
  const navigate = useNavigate();
  let [currentId, setCurrentId] = useState("");
  let [error, setError] = useState(false);
  function toggleReview(){
    setReviewVisible(!reviewVisible)
  }
  function getOrders() {
    setError(false);
    orderService
      .fetchOrders(token)
      .then((x) => {
        setOrders(x.reverse());
        triggerSuccess({ title: "fetched orders", message: "" });
        console.log({ x });
      })
      .catch((error) => {
        triggerError({ title: "Error Fetching order", message: "" });
        setError(true);
        throw error;
      });
  }
  useEffect(() => {
    getOrders();
  }, []);

  function toggleCurrent(id) {
    id == currentId ? setCurrentId("") : setCurrentId(id);
  }
  
  useEffect(() => {
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);
  useEffect(()=>{
    setTimeout(()=>{    
        setReviewVisible(true)
    },2000)
  },[])

  const payWithMonnify = async (
    grandTotal,
    phoneNumber,
    email,
    narration,
    orderId,
  ) => {
    let monnify = window.MonnifySDK;
    monnify.initialize({
      amount: 100,
      currency: "NGN",
      reference: orderId,
      customerFullName: phoneNumber.toString(),
      customerEmail: email,
      apiKey: "MK_TEST_QA372KPS4C",
      contractCode: "5878350992",
      paymentDescription: `Payment for ${narration}`,
      onLoadStart: () => {
        console.log("loading has started");
      },
      onLoadComplete: () => {
        console.log("SDK is UP");
      },
      onComplete: function (response) {
        //Implement what happens when the transaction is completed.
        console.log({ response });
        let data = response;
        if (data.status == "SUCCESS") {
          setLoading(true);
          setLoadingText("Saving Payment Status");
          let updateData = {
            paymentStatus: "Completed",
            transactionRef: data.transactionReference,
            paymentRef: data.paymentReference,
          };
          orderService
            .updateOrder(orderId, updateData, token)
            .then((res) => {
              let newOrders = [...orders];
              newOrders.map((x) => {
                if (x._id == res.order._id) {
                  return res.order;
                } else {
                  return x;
                }
              });
              console.log(res);
              setOrders(newOrders);
              //navigate('/user/orders')
            })
            .catch((error) => {
              console.error(error);
            });
        } else {
          console.log("Payment Was Unsuccessful");
        }
      },
      onClose: function (data) {
        //Implement what should happen when the modal is closed here
        console.log("do nothing", data);
      },
    });
  };
  if (error) {
    return (
      <div>
        <div className="py-4"></div>
        <p className="font-p font-regular text-center">
          An error occured while retrieving your orders.
        </p>
        <div className="py-2"></div>
        <div className="col-12 col-sm-6 center">
          <button className="headlinebutton font-p" onClick={getOrders}>
            Retry
          </button>
        </div>
        <div className="py-4"></div>
        <div className="py-4"></div>
      </div>
    );
  }
  if(!error && orders.length == 0){
    return (
        <div>
            <div className="py-2" />
            <p className="text-center font-p font-regular">Loading...</p>
            <div className="py-2" />
        </div>
    )
  }
  return (
    <div>
      <div className="mainSpacing">
        <CustomDialog isOpen={reviewVisible} onClose={toggleReview} >
            <div>
                <h3 className="font-subtitle green-color-main text-center">How would you rate our service?</h3>
                <div>
                    <div className="py-2" />
                    <button className="headlinebutton font-p">Add A Review</button>
                </div>
            </div>
        </CustomDialog>
        <div className="py-3" />
        <div className="userOrdersPageContainer">
          <div className="util-header">
            <div className="container-fluid no-space">
              <div className="row no-space align-items-center">
                <div className="col no-space">
                  <div>
                    <p className="font-heading-6 font-medium green-color-main">
                      MY ORDERS
                    </p>
                  </div>
                </div>
                <div className="w-max-content no-space">
                  <div className="sortContainer container-fluid">
                    <div className="row no-space align-items-center">
                      <div className="w-max-content no-space">
                        <img className="filter-icon" src={filterIcon} />
                      </div>
                      <div className="w-max-content no-space">
                        <p className="font-small font-regular no-space">
                          All Orders
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-1" />
            <div className="util-divider" />
          </div>
          <div className="py-3" />
        </div>
        <div className="userOrdersContents">
          <div className="container-fluid no-space">
            <div className="row no-space">
              {orders.map((x, index) => {
                return (
                  <div className="col-12 col-lg-6" key={index}>
                    <div
                      className="UserOrderItemContainer"
                      style={{ position: "relative" }}
                    >
                      <div>
                        <div className="orderName">
                          <div></div>
                          <div className="row">
                            <div className="col">
                              <p className="font-subtitle font-medium">
                                {" "}
                                {x.narration}{" "}
                              </p>
                            </div>
                            <div className="py-1" />
                            <div>
                              <p className="no-space font-p font-regular">
                                Order Placed:{" "}
                                {moment(x.createdAt).startOf("hour").fromNow()}{" "}
                                ({moment(new Date(x.createdAt)).format("LL")})
                              </p>
                            </div>
                            <div className="py-1" />
                            <div>
                              <p className="no-space font-p font-regular">
                                Payment Status: {x.paymentStatus}
                              </p>
                            </div>
                            <div className="py-1" />
                            <div>
                              <p className="no-space font-p font-regular">
                                Order Status:{" "}
                                {x.fulfilled
                                  ? "Fulfilled"
                                  : "Your Order is Still being Processed."}
                              </p>
                            </div>
                            <div className="py-1" />
                            <div className="container-fluid">
                              <div className="row no-space">
                                {x.paymentStatus == "Pending" ? (
                                  <div className="col-xs-12 col-sm no-space">
                                    <div className=" no-space">
                                      <button
                                        onClick={() => {
                                          payWithMonnify(
                                            calculateGrandTotal(x.cartItems),
                                            x.phoneNumber,
                                            auth.email,
                                            x.narration,
                                            x._id,
                                          );
                                        }}
                                        className="font-p text-center addonOpButton"
                                        style={{
                                          backgroundColor: "#00a826",
                                          width: "100%",
                                          height: "35px",
                                        }}
                                      >
                                        Make Payment
                                      </button>
                                    </div>
                                  </div>
                                ) : null}

                                <div className="col-xs-12 col-sm no-space">
                                  <div className=" mx-xs-0 mx-sm-1 my-2 my-sm-0">
                                    <p className=" no-space">
                                      {" "}
                                      <button
                                        style={{
                                          width: "100%",
                                          height: "35px",
                                        }}
                                        className="font-p text-center addonOpButton no-space px-4"
                                        onClick={() => {
                                          toggleCurrent(x._id);
                                        }}
                                      >
                                        View Details{" "}
                                        <FontAwesomeIcon icon={faAngleDown} />
                                      </button>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="py-1" />
                          </div>
                        </div>
                      </div>
                      {currentId == x._id ? (
                        <div className="userOrderDetailsContainer">
                          <div className="py-2" />
                          <div className="font-subtitle font-bold text-center">
                            Order Transaction Details
                          </div>
                          <div className="py-2" />
                          <div>
                            <p className="no-space font-p font-regular">
                              Order Placed:{" "}
                              {moment(x.createdAt).startOf("hour").fromNow()} (
                              {moment(new Date(x.createdAt)).format("LL")})
                            </p>
                            <div className="py-1" />
                          </div>
                          <div>
                            <p className="no-space font-p font-regular">
                              Payment Status: {x.paymentStatus}
                            </p>
                            <div className="py-1" />
                          </div>
                          <div>
                            <p className="no-space font-p font-regular">
                              Payment Reference: {x.paymentRef}
                            </p>
                            <div className="py-1" />
                          </div>
                          <div>
                            <p className="no-space font-p font-regular">
                              Grand Total: {calculateGrandTotal(x.cartItems)}
                            </p>
                            <div className="py-1" />
                          </div>
                          <div>
                            <p className="no-space font-p font-regular">
                              Delivery Fee: N {1000}
                            </p>
                            <div className="py-1" />
                          </div>
                          <div>
                            <p className="no-space font-p font-regular">
                              Order Id: {x._id}
                            </p>
                            <div className="py-1" />
                          </div>
                          <div>
                            <p className="no-space font-p font-regular">
                              Phone Number: {x.phoneNumber}
                            </p>
                            <div className="py-1" />
                          </div>
                          <div>
                            <p className="no-space font-p font-regular">
                              Delivery Address: {x.deliveryInfo}
                            </p>
                            <div className="py-1" />
                          </div>
                          <div>
                            <p className="no-space font-p font-regular">
                              Transaction Reference: {x.transactionRef}
                            </p>
                            <div className="py-1" />
                          </div>
                          <div className="py-2" />
                          <div className="font-subtitle font-bold text-center">
                            Order Details
                          </div>
                          <div className="py-2" />
                          {x.cartItems.map((dish, index) => {
                            return (
                              <div key={index} style={{ marginBottom: "20px" }}>
                                <UserOrderItem dish={dish} />
                              </div>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="py-3" />
      </div>
    </div>
  );
}
