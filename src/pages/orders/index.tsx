import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";

import { Dish } from "joegreen-service-library/dist/services/dishService";
import { useNotificationTrigger } from "../../components/utils/notificationTrigger";
import { dishService } from "joegreen-service-library";
import { useLoading } from "../../components/utils/loadingContext";
import { OrderCategory } from "../../components/orderCategory/OrderCategory";
import "./style.css";
function Order(): React.JSX.Element {
  let { triggerError, triggerSuccess } = useNotificationTrigger();
  let { setLoading, setLoadingText } = useLoading();
  let [categories, setCategories] = useState<Dish[]>([]);
  let [error, setError] = useState(false);

  const getCategories = async () => {
    setError(false);
    try {
      setLoading(true);
      setLoadingText("Fetching Categories...");
      // Fetch categories
      const categories = await dishService.getAllCategory();
      setCategories(categories);
      triggerSuccess({
        title: "Success",
        message: "Categories and dishes fetched successfully",
      });
    } catch (error) {
      triggerError({ title: "Error", message: "Failed to retrieve dishes" });
      setError(true);
      console.error("Error fetching categories:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);

  return (
    <main id="orders-page" className="mainSpacing">
      <div className="mainVerticalSpace">
        <div className="ordersBannerContainer">
          <div
            className="ctaBannerContents py-5 px-2"
            style={{ lineHeight: 1.5 }}
          >
            <p className="font-subtitle-big d-md-none font-bold text-center">
              Browse through the menu, place your order!
            </p>
            <p className="font-heading-6 d-none d-md-block font-bold text-center">
              Browse through the menu, place your order!
            </p>
          </div>
        </div>
        <div className="py-2"></div>
        <div className="py-1" />

        {error ? (
          <div>
            <div className="py-4"></div>
            <p className="font-p font-regular text-center">
              An error occured while retrieving the menu.
            </p>
            <div className="py-2"></div>
            <div className="col-12 col-sm-6 center">
              <button className="headlinebutton font-p" onClick={getCategories}>
                Retry
              </button>
            </div>
            <div className="py-4"></div>
            <div className="py-4"></div>
          </div>
        ) : (
          categories.map((category) => (
            <OrderCategory
              key={category._id}
              category={{
                name: category.name,
                _id: category._id,
                description: category.description,
              }}
            />
          ))
        )}
      </div>
    </main>
  );
}

export default Order;
