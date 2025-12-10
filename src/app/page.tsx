"use client";

import React from "react";
import config from "../../next.config";
import Button from "./component/Button";
import { useEffect } from "react";
import { initSliders } from "./Script";
import "@splidejs/splide/css";
// page.tsx
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";

const assetPrefix = config.assetPrefix || config.basePath || "";

export default function Home() {
  useEffect(() => {
    initSliders();
  }, []);
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
              <Button />
            </div>
          </div>
        </div>
      </section>

      <section className="slider-section">
        <div className="container">
          <Splide
            options={{
              type: "loop",
              perPage: 7,
              gap: "20px",
              autoplay: true,
              interval: 1000,
              arrows: false,
              pagination: false,
              speed: 600,
              breakpoints: {
                1200: { perPage: 5, gap: "15px" },
                768: { perPage: 3, gap: "10px" },
                480: { perPage: 2, gap: "5px" },
                320: { perPage: 1.5, gap: "5px" },
              },
            }}
            aria-label="My Favorite Images"
            className="slider-splide splide"
          >
            <SplideSlide className="slider-slide">
              <img
                src={`${assetPrefix}/images/slider-img-1.svg`}
                alt="slider-img"
              />
            </SplideSlide>
            <SplideSlide className="slider-slide">
              <img
                src={`${assetPrefix}/images/slider-img-2.svg`}
                alt="slider-img"
              />
            </SplideSlide>
            <SplideSlide className="slider-slide">
              <img
                src={`${assetPrefix}/images/slider-img-3.svg`}
                alt="slider-img"
              />
            </SplideSlide>
            <SplideSlide className="slider-slide">
              <img
                src={`${assetPrefix}/images/slider-img-1.svg`}
                alt="slider-img"
              />
            </SplideSlide>
            <SplideSlide className="slider-slide">
              <img
                src={`${assetPrefix}/images/slider-img-2.svg`}
                alt="slider-img"
              />
            </SplideSlide>
            <SplideSlide className="slider-slide">
              <img
                src={`${assetPrefix}/images/slider-img-3.svg`}
                alt="slider-img"
              />
            </SplideSlide>
          </Splide>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="about-wrapper">
            <div className="about-item"></div>
            <div className="about-item"></div>
            <div className="about-item"></div>
            <div className="about-item"></div>
            <div className="about-item"></div>
            <div className="about-item"></div>
            <div className="about-content">
              <div className="hero-content about-content-2">
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-home"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                </svg>
                <h1 className="hero-title">From The Author</h1>
              </div>
              <h2 className="about-title">
                First impressions matter — especially in creative industries
                where your portfolio often speaks before you do. Archscale is
                built to help you make that impression count. With a minimal
                layout, seamless CMS integration, and responsive design.
              </h2>
              <div className="about-btn">
                <Button />
              </div>
            </div>
          </div>
          <div className="about-content-wrapper">
            <div className="about-card">
              <h3 className="about-head">50+</h3>
              <p className="about-description">Project Completed</p>
            </div>
            <div className="about-card">
              <h3 className="about-head">100+</h3>
              <p className="about-description">Expert Teams</p>
            </div>
            <div className="about-card">
              <h3 className="about-head">$3.5M</h3>
              <p className="about-description">Average Value</p>
            </div>
            <div className="about-card">
              <h3 className="about-head">$49.9M</h3>
              <p className="about-description">Highest Value</p>
            </div>
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="container">
          <div className="service-wrapper">
            <div className="service-content">
              <div className="hero-content service-content-2">
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
                  className="icon icon-tabler icons-tabler-outline icon-tabler-ruler-2-off"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12.03 7.97l4.97 -4.97l4 4l-5 5m-2 2l-7 7l-4 -4l7 -7" />
                  <path d="M16 7l-1.5 -1.5" />
                  <path d="M10 13l-1.5 -1.5" />
                  <path d="M7 16l-1.5 -1.5" />
                  <path d="M3 3l18 18" />
                </svg>
                <h1 className="hero-title">Services Overview</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
