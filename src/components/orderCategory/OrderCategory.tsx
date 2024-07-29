import React, { useState, useEffect } from "react";
import tipDots from '../../assets/tipDots.png';
import './style.css';
import { Dish } from "joegreen-service-library/dist/services/dishService";
import {dishService }from "joegreen-service-library";
import OrderItem from "../orderItem";
import { useNavigate } from "react-router-dom";
import { truncateStringByCharCount } from "../../functions/utils";

interface OrderCategoryProps {
    category: { _id: string; name: string, description: string }; // Update this to reflect your category type
}

export function OrderCategory({ category }: OrderCategoryProps): React.JSX.Element {
    const [dishes, setDishes] = useState<Dish[]>([]);
    const navigate = useNavigate()
    function goToAddToCart(id:string){
        navigate('/add-to-cart?dishId='+id)
      }
    useEffect(() => {
        // Fetch dishes when component mounts or category changes
        const fetchDishes = async () => {
            try {
                const dishes = await dishService.getDishes({ category: category._id });
                setDishes(dishes);
                console.log({dishes})
            } catch (error) {
                console.error('Error fetching dishes:', error);
            }
        };
        fetchDishes();
    }, [category]);

    return (
        <div>
            <div className="py-2" />
            <div id='section1'>
                <div className='section-heading-contents'>
                    <div className='tipContent row no-space align-items-center'>
                        <div className='w-max-content no-space'>
                            <p className='font-p font-family-bruno delicious tipTitle'>{truncateStringByCharCount(category.description, 40)}</p>
                        </div>
                        <div className='w-max-content no-space'>
                            <img className='tipDots' src={tipDots} alt="Tip Dots" />
                        </div>
                    </div>
                    <div className='sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium'>
                        <span className='delicious'>{category.name.toUpperCase()}</span>
                    </div>
                    <div className='sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium'>
                        <span className='delicious'>{category.name.toUpperCase()}</span>
                    </div>    
                </div>
                <div className='section-items-contents'>
                    <div className='row no-space gx-2'>
                            {dishes.length > 0 ? (
                                dishes.map((dish) => (
                                <div className="category-dishes no-space col-12 col-md-6 col-lg-4 col-xl-3-">
                                        <div className='OIContainer px-1 px-md-2'>
                                            <div className='py-3'></div>
                                        <OrderItem 
                                            key={dish._id} 
                                            image={dish.image}
                                            title={dish.name} 
                                            actionFn={() => {goToAddToCart(dish._id)}} 
                                            description={dish.description} 
                                            price={String(dish.price)} 
                                        />
                                        </div>  
                                </div>
                                ))
                            ) : (
                                <p>No dishes available</p>
                            )}
                    </div>
                </div>                    
            </div>
            <div className="py-1" />
        </div>
    );
}
