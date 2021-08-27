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
              <h4>Lorem Ipsum</h4>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
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
              <h4>Lorem Ipsum</h4>
              <h3>Lorem ipsum dolor sit amet.</h3>
              <p class="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <p class="button">view post</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
