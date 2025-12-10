"use client";

import React from "react";
import config from "../../next.config";
import Button from "./component/Button";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";



const assetPrefix = config.assetPrefix || config.basePath || "";

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <img
          src={`${assetPrefix}/images/hero-bg-1.avif`}
          alt="hero-bg"
          className="img-cover"
        />
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-content">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-heart-handshake"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                <path d="M12 6l-3.293 3.293a1 1 0 0 0 0 1.414l.543 .543c.69 .69 1.81 .69 2.5 0l1 -1a3.182 3.182 0 0 1 4.5 0l2.25 2.25" />
                <path d="M12.5 15.5l2 2" />
              </svg>
              <h1 className="hero-title">Webflow Template</h1>
            </div>
            <h2 className="hero-main-title">
              Elevate your website with <span> Archscale </span>
            </h2>
            <div className="hero-btn-content">
              <Button/>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="slider-section">
        <div className="container">
           <Splide 
          options={{
            type: 'loop',
            perPage: 7,
            gap: '20px',
            autoplay: true,
            interval: 3000,
            arrows: false,
            pagination: false,
            speed: 600,
            breakpoints: {
              1200: { perPage: 5, gap: '15px' },
              768: { perPage: 3, gap: '10px' },
              480: { perPage: 2, gap: '5px' },
              320: { perPage: 1.5, gap: '5px' },
            },
          }}
          aria-label="Beautiful Images"
        >
          <SplideSlide>
            <img src="https://ik.imagekit.io/fa1ylzjml/logoipsum-369%20(1).svg?updatedAt=1759905082403" alt="Slide 1" className="slider-img" />
          </SplideSlide>

          <SplideSlide>
            <img src="https://ik.imagekit.io/fa1ylzjml/logoipsum-385%20(1).svg?updatedAt=1759905081430" alt="Slide 2" className="slider-img"/>
          </SplideSlide>

          <SplideSlide>
            <img src="https://ik.imagekit.io/fa1ylzjml/logoipsum-393%20(1).svg?updatedAt=1759905081370" alt="Slide 3" className="slider-img"/>
          </SplideSlide>

          <SplideSlide>
            <img src="https://ik.imagekit.io/fa1ylzjml/logoipsum-372%20(1).svg?updatedAt=1759905081278" alt="Slide 4" className="slider-img"/>
          </SplideSlide>

          <SplideSlide>
            <img src="https://ik.imagekit.io/fa1ylzjml/logoipsum-391%20(1).svg?updatedAt=1759905081234" alt="Slide 5" className="slider-img"/>
          </SplideSlide>

          <SplideSlide>
            <img src="https://ik.imagekit.io/fa1ylzjml/logoipsum-395%20(1).svg?updatedAt=1759905081174" alt="Slide 6" className="slider-img"/>
          </SplideSlide>

          <SplideSlide>
            <img src="https://ik.imagekit.io/fa1ylzjml/logoipsum-373%20(1).svg?updatedAt=1759905080890" alt="Slide 7" className="slider-img"/>
          </SplideSlide>

          <SplideSlide>
            <img src="https://ik.imagekit.io/fa1ylzjml/logoipsum-369%20(1).svg?updatedAt=1759905082403" alt="Slide 1" className="slider-img" />
          </SplideSlide>
        </Splide> 
        </div>
      </section> */}
    </>
  );
}
