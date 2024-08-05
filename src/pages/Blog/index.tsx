import React, { useEffect, useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { BlogItem } from "../../components/blogItem";
import { blogService } from "joegreen-service-library";

import "./style.css";
import tipDots from "../../assets/tipDots.png";
import { BlogType } from "joegreen-service-library/dist/services/blogService";
export default function Blog(): React.JSX.Element {
  let [blogs, setBlogs] = useState<BlogType[]>([]);
  let [error, setError] = useState(false);

  function getBlogs() {
    setError(false);
    blogService
      .getAllBlogPosts()
      .then((res) => {
        setBlogs(res);
      })
      .catch((err) => {
        console.error(err);
        setError(true);
      });
  }
  useEffect(() => {
    getBlogs();
  }, []);
  useEffect(() => {
    // Scroll to top when the component mounts
    scroll.scrollToTop({
      duration: 1000, // duration of the scrolling animation in milliseconds
      smooth: "easeInOutQuart", // the type of easing
    });
  }, []);
  return (
    <main id="blog">
      <div className="mainSpacing">
        <div className="py-4" />
        <div className="tipContent row no-space align-items-center">
          <div className="w-max-content no-space">
            <p className="font-p font-family-bruno delicious tipTitle">
              STAY UPDATED
            </p>
          </div>
          <div className="w-max-content no-space">
            <img className="tipDots" src={tipDots} />
          </div>
        </div>
        <div className="sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium">
          TRENDING UPDATES ON{" "}
          <span className="delicious">JOEGREENCAFE BLOG</span>
        </div>
        <div className="sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium">
          TRENDING UPDATES ON{" "}
          <span className="delicious">JOEGREENCAFE BLOG</span>
        </div>
        <div className="sectionAfterTextContainer features">
          <p className="font-p text-main">
            Stay informed with the freshest news, exciting events, and culinary
            insights from JoeGreen. Discover delicious recipes, expert tips, and
            the latest trends in the food world. Join us on our journey of
            Cullinary delights and innovation!
          </p>
        </div>
        {error ? (
          <div>
            <div className="py-4"></div>
            <p className="font-p font-regular text-center">
              An error occured while retrieving the blog contents
            </p>
            <div className="py-2"></div>
            <div className="col-12 col-sm-6 center">
              <button className="headlinebutton font-p" onClick={getBlogs}>
                Retry
              </button>
            </div>
            <div className="py-4"></div>
            <div className="py-4"></div>
          </div>
        ) : null}
        {blogs.length == 0 && !error ? (
          <div>
            <p className="font-p font-regular">
              No Blog Post Present At the moment.
            </p>
          </div>
        ) : (
          <div className="row no-space">
            {blogs.map((x, index) => {
              return (
                <div className="no-space col-12 col-md-6 col-lg-4" key={index}>
                  <BlogItem
                    link={x.link}
                    image={x.image}
                    description={x.highlightParagraph}
                    created={x.created}
                    title={x.title}
                  />
                </div>
              );
            })}
          </div>
        )}

        <div className="py-4" />
      </div>
    </main>
  );
}
