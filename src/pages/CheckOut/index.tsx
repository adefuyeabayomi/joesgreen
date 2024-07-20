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
                        <div className="col-12 no-space">
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
                        <div className="col-12 no-space">
                            <p>Order Summary</p>
                        </div>
                    </div>
                </div>
                <div className="py-3" />
            </div>
        </div>
    )
}


