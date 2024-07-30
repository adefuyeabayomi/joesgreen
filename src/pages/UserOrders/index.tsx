import React,{useEffect, useState} from "react";

import filterIcon from '../../assets/filter-icon.png'

import './style.css'
import { orderService } from "joegreen-service-library";
import { Order } from "joegreen-service-library/dist/services/orderService";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { UserOrderItem } from "../../components/orderItem";
export default function UserOrders (): React.JSX.Element {
    let token = window.localStorage.getItem('accessToken')
    let [orders,setOrders] = useState<Order[]>([])
    let [currentId,setCurrentId] = useState('')

    useEffect(()=>{
        orderService.fetchOrders(token).then(x=>{
            setOrders(x)
            console.log({x})
        }).catch(error=>{
            throw error
        })
    },[])

    function toggleCurrent (id) {
        id == currentId ? setCurrentId(''): setCurrentId(id)
    }
    
    return (
        <div>
            <div className="mainSpacing">
                <div className="py-3" />
                <div className="userOrdersPageContainer">
                <div className="util-header">
                    <div className="container-fluid no-space">
                        <div className="row no-space align-items-center">
                            <div className="col no-space">
                                <div>
                                    <p className="font-heading-6 font-medium green-color-main">MY ORDERS</p>
                                </div>
                            </div>                         
                            <div className="w-max-content no-space">
                                <div className="sortContainer container-fluid">
                                    <div className="row no-space align-items-center">
                                    <div className="w-max-content no-space">
                                        <img className="filter-icon" src={filterIcon} />
                                    </div>
                                    <div className="w-max-content no-space">
                                        <p className="font-small font-regular no-space">Pending</p>
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
                            {
                                orders.map((x,index)=>{
                                    return (
                                        <div className="col-12 col-lg-6" key={index}>
                                            <div className="UserOrderItemContainer" style={{position: 'relative'}}>
                                                <div>
                                                    <div className="orderName">
                                                        <div></div>
                                                        <div className="row">
                                                            <div className="col"><p className="font-subtitle font-medium"> {x.narration} </p></div>
                                                            
                                                            <div>
                                                                <p className="no-space font-p font-regular">Payment Status: {x.paymentStatus}</p>
                                                            </div>
                                                            <div>
                                                                <p className="no-space font-p font-regular">Order Status: {x.fufilled?'Fulfilled' :"Your Order is Still being Processed."}</p>
                                                            </div>
                                                            <div className="py-1" />
                                                            <div className="container-fluid">
                                                                <div className="row no-space">
                                                                    {x.paymentStatus == 'Pending'? (
                                                                        <div className="col no-space">
                                                                            <div className=" no-space">
                                                                                <button className="font-p text-center addonOpButton" style={{backgroundColor: '#00a826', width: '100%', height: '35px'}}>Make Payment</button>
                                                                            </div>
                                                                        </div>
                                                                    ):null}
                                                                    
                                                                    <div className="col no-space mx-1">
                                                                    <div className="no-space"><p className=" no-space"> <button style={{width: '100%', height: '35px'}} className="font-p text-center addonOpButton no-space px-4" onClick={()=>{toggleCurrent(x._id)}}>View Details <FontAwesomeIcon icon={faAngleDown} /></button></p></div>
                                                                    </div>
                                                                </div>
                                                               
                                                            </div>
                                                            
                                                        </div>
                                                    </div>                        
                                                </div>
                                                {currentId == x._id ? (
                                                <div className="userOrderDetailsContainer">
                                                <div>
                                                    <p className="no-space font-p font-regular">Payment Status: {x.paymentStatus}</p>
                                                </div>
                                                
                                                <div>
                                                    <p className="no-space font-p font-regular">Phone Number: {x.phoneNumber}</p>
                                                </div>
                                                <div>
                                                    <p className="no-space font-p font-regular">Delivery Address: {x.deliveryInfo}</p>
                                                </div>
                                                <div>
                                                    <p className="no-space font-p font-regular">Transaction Reference: {x.transactionRef}</p>
                                                </div> 
                                                    <div className="py-2" />
                                                    {x.cartItems.map(dish=>{
                                                        return (
                                                            <div style={{marginBottom: '20px'}}>
                                                        <UserOrderItem dish={dish} />

                                                            </div>
                                                    )
                                                    })}
                                                </div>

                                                ): null}
                                                
                                         
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
                <div className="py-3" />
            </div>
        </div>
    )
}


