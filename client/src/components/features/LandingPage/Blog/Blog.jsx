import React from "react";
import "../../../../App.css";
import "../LandingPage.css";

const Blog = () => {
  return (
    <section id="blog">
      <div class="container">
        <div class="blog-header">
          <h2>latest from our customers</h2>
          <p>
            Check out our reviews and ratings about the shopping experience!
          </p>
        </div>
        <div class="blog-content">
          <div class="blog-1">
            <div class="blog-1-image-holder">
              {" "}
              <img
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="image"
              />{" "}
            </div>
            <div class="blog-1-content">
              <h4>Josh Mathews</h4>
              <h3>VP Of Tech-Buyers Israel Inc.</h3>
              <p class="description">
                Iv'e Enjoyed the service that the company provided me , alot of
                experience and good communication. great partnership!
              </p>
              <div>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <p class="button">view post</p>
            </div>
          </div>
          <div class="blog-2">
            <div class="blog-2-image-holder">
              {" "}
              <img
                src="https://images.pexels.com/photos/3460134/pexels-photo-3460134.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="image"
              />{" "}
            </div>
            <div class="blog-2-content">
              <h4>Kevin Sam</h4>
              <h3>FullStack Team Leader at Apple</h3>
              <p class="description">
                Yoni is a great partner, always listens to our problems and is
                very motivated to succeed. I Love the service and the methods
                that the website provides. helps my team alot and i can sell my
                products with no problem!
              </p>
              <div>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half"></i>
              </div>
              <p class="button">view post</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
