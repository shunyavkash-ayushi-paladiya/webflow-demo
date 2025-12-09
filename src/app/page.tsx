import React from "react";
import config from "../../next.config";

const assetPrefix = config.assetPrefix || config.basePath || "";

export default function Home() {
  return (
    <>
      {/* hero section  */}

      <section className="hero-section">
        <img
          src={`${assetPrefix}/images/hero-bg.png`}
          alt="hero-bg"
          className="hero-bg-img"
        />
        <div className="container">
          <div className="hero-content">
            <text className="hero-title">New Arrival</text>
            <h1 className="hero-main-title">Discover Our New Collection</h1>
            <p className="hero-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <a href="#" className="hero-btn">
              Buy Now
            </a>
          </div>
        </div>
      </section>

      {/* about section */}

      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2 className="about-title">Browse The Range</h2>
            <p className="about-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="about-wrapper">
            <div className="about-content-card">
              <img src={`${assetPrefix}/images/about-img-2.png`} alt="about-img-1" className="about-img"/>
              <h3 className="about-card-title">
                Dining
              </h3>
            </div>
            <div className="about-content-card">
              <img src={`${assetPrefix}/images/about-img-3.png`} alt="about-img-1" className="about-img"/>
              <h3 className="about-card-title">
                Living
              </h3>
            </div>
            <div className="about-content-card">
              <img src={`${assetPrefix}/images/about-img-1.png`} alt="about-img-1" className="about-img"/>
              <h3 className="about-card-title">
                Bedroom
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Product section  */}

      <section className="product-section">
        <div className="container">
           <h2 className="product-title">
             Our Product
           </h2>
           <div className="product-wrapper">
              <div className="product-card">
                 
              </div>
           </div>
        </div>
      </section>
    </>
  );
}
