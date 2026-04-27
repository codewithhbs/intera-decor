import React from "react";

export default function Marquee() {
  return (
    <div>
      <div className="top-navbar w-full overflow-hidden bg-[#81190B]">
        <article className="main-container__marquee h-20 flex items-center justify-center">
          <div className="main-container__marquee-track flex items-center justify-center h-full">
            <div className="main-container__marquee-items flex space-x-8 items-center">
              <span className="main-container__marquee-item text-2xl text-white">
                {/* Get flat 22% off */}
                {/* added new offer  */}
              </span>
              <span className="main-container__marquee-item text-2xl text-white">
              Free delivery on orders above ₹299{" "}
              </span>
              <span className="main-container__marquee-item text-2xl text-white">
                {/* Use Code : Firstgrandmasala01 */}
              </span>
            </div>
            {/* Duplicate for infinite loop effect */}
            <div
              aria-hidden="true"
              className="main-container__marquee-items flex space-x-8 items-center"
            >
              <span className="main-container__marquee-item text-2xl text-white">
                {/* Get flat 24% off */}
              </span>
              <span className="main-container__marquee-item text-2xl text-white">
              Free delivery on orders above ₹299{" "}
              </span>
              <span className="main-container__marquee-item text-2xl text-white">
                {/* Use Code : Firstgrandmasala01 */}
              </span>
            </div>
            {/* Duplicate for infinite loop effect */}
            <div
              aria-hidden="true"
              div
              className="main-container__marquee-items flex space-x-8 items-center"
            >
              <span className="main-container__marquee-item text-2xl text-white">
                {/* Get flat 24% off */}
              </span>
              <span className="main-container__marquee-item text-2xl text-white">
              Free delivery on orders above ₹299{" "}
              </span>
              <span className="main-container__marquee-item text-2xl text-white">
                {/* Use Code : Firstgrandmasala01 */}
              </span>
            </div>
            {/* Duplicate for infinite loop effect */}
            <div
              aria-hidden="true"
              div
              className="main-container__marquee-items flex space-x-8 items-center"
            >
              <span className="main-container__marquee-item text-2xl text-white">
                {/* Get flat 24% off */}
              </span>
              <span className="main-container__marquee-item text-2xl text-white">
              Free delivery on orders above ₹299{" "}
              </span>
              <span className="main-container__marquee-item text-2xl text-white">
                {/* Use Code : Firstgrandmasala01 */}
              </span>
            </div>
            {/* Duplicate for infinite loop effect */}
            <div
              aria-hidden="true"
              div
              className="main-container__marquee-items flex space-x-8 items-center"
            >
              <span className="main-container__marquee-item text-2xl text-white">
                {/* Get flat 24% off */}
              </span>
              <span className="main-container__marquee-item text-2xl text-white">
              Free delivery on orders above ₹299{" "}
              </span>
              <span className="main-container__marquee-item text-2xl text-white">
                {/* Use Code : Firstgrandmasala01 */}
              </span>
            </div>
            {/* Duplicate for infinite loop effect */}
            <div
              aria-hidden="true"
              div
              className="main-container__marquee-items flex space-x-8 items-center"
            >
              <span className="main-container__marquee-item text-2xl text-white">
                {/* Get flat 24% off */}
              </span>
              <span className="main-container__marquee-item text-2xl text-white">
              Free delivery on orders above ₹299{" "}
              </span>
              <span className="main-container__marquee-item text-2xl text-white">
                {/* Use Code : Firstgrandmasala01 */}
              </span>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
