import React,{useState} from "react";
import { OrderCheckOutItem } from "../../components/orderItem";
import './style.css'

export default function CheckOut (): React.JSX.Element {
    return (
        <div>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="container-fluid no-space">
                    <div className="row no-space">
                        <div className="col-12 col-md-6 col-xl-9 no-space">
                            <div>
                                <p className="font-heading-6 green-color-main font-medium">PROCEED TO CHECKOUT</p>
                                <p className="font-p col-12 col-md-9">Check out your cart items. You can edit your meals with our addons. Just click the edit button.</p>
                            </div>
                            <div className="row no-space">
                                <div className="w-max-content no-space p10">
                                    <OrderCheckOutItem />
                                </div>
                                <div className="w-max-content no-space p10">
                                    <OrderCheckOutItem />
                                </div>
                                <div className="w-max-content no-space p10">
                                    <OrderCheckOutItem />
                                </div>
                                <div className="w-max-content no-space p10">
                                    <OrderCheckOutItem />
                                </div>
                                <div className="w-max-content no-space p10">
                                    <OrderCheckOutItem />
                                </div>
                                <div className="w-max-content no-space p10">
                                    <OrderCheckOutItem />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-3 no-space">
                            <div className="orderContainer">
                                <div>
                                    <p className="font-subtitle">Order Summary</p>
                                </div>
                                <div className="summaryItem">
                                    <div className="container-fluid no-space">
                                        <div className="row no-space">
                                            <div className="col no-space">
                                                <div>
                                                    <div>
                                                        <p className="font-p font-medium no-space">White Rice and Stew</p>
                                                    </div>
                                                    <div>
                                                        <p className="font-p font-medium no-space">12 Plates</p>
                                                    </div>
                                                    <div>
                                                        <p className="font-p font-regular no-space">Addons Included: Plantain, Coleslaw, Moi Moi, Gizzard</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-max-content">
                                                <div>
                                                    <p className="font-subtitle">N 3500</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-2" />
                                    <div className="order-summary-divider" />
                                    <div className="py-2" />
                                    <div className="container-fluid no-space">
                                        <div className="row no-space">
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
                                        <div className="row no-space">
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
                                    <div className="deliveryInformation">
                                        <div className="">
                                            <p>Delivery Information</p>
                                        </div>
                                        <div className="">
                                            <input type="text" />
                                        </div>
                                        <div className="">
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>              
                        </div>
                    </div>
                </div>
                <div className="py-3" />
            </div>
        </div>
    )
}


