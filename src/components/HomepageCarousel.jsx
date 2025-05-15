import { useState } from "react";
import Navbar from "./Navbar";

const carouselData = [
  {
    desktop: "/desktop-image-hero-1.jpg",
    mobile: "/mobile-image-hero-1.jpg",
    title: "Discover innovative ways to decorate",
    description:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    desktop: "/desktop-image-hero-2.jpg",
    mobile: "/mobile-image-hero-2.jpg",
    title: "We are available all across the globe",
    description:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    desktop: "/desktop-image-hero-3.jpg",
    mobile: "/mobile-image-hero-3.jpg",
    title: "Manufactured with the best materials",
    description:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  },
];

export default function HomepageCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const current = carouselData[index];

  return (
    <div className="flex flex-col lg:flex-row relative">
      {/* Image section */}

      <div className="w-full lg:w-1/2 h-[300px] lg:h-full">
        <Navbar />
        <picture>
          <source media="(min-width: 1024px)" srcSet={current.desktop} />
          <img
            src={current.mobile}
            alt={current.title}
            className="w-full h-full object-cover"
          />
        </picture>
      </div>

      {/* Text content section */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-6 md:px-16 py-10">
        <h1 className="text-3xl/7 lg:text-4xl/9 font-700 mb-6 tracking-tight">
          {current.title}
        </h1>
        <p className="text-custom-grey-500 mb-8 leading-relaxed text-sm">
          {current.description}
        </p>
        <a
          href="#"
          className="uppercase text-sm/6 tracking-[12px] inline-flex items-center gap-3 hover:text-custom-grey-500"
        >
          Shop now{" "}
          <img src="/icon-arrow.svg" alt="" className="hover:opacity-20" />
          {/* shop now <FaArrowRightLong className="h-4" size={48}/> */}
        </a>
        {/* Navigation Arrows */}
        <div className="mt-10 flex absolute lg:bottom-0 top-[211px] right-0 lg:top-[313.9px] lg:left-2/4">
          <button
            onClick={() =>
              setIndex((prev) =>
                prev === 0 ? carouselData.length - 1 : prev - 1
              )
            }
            className="bg-black text-white w-12 lg:w-[105.8px] flex items-center justify-center hover:bg-black/20 cursor-pointer"
          >
            <img src="/icon-angle-left.svg" alt="" />
          </button>
          <button
            onClick={() =>
              setIndex((prev) =>
                prev === carouselData.length - 1 ? 0 : prev + 1
              )
            }
            className="bg-black text-white w-12 lg:w-[105.8px] flex items-center justify-center hover:bg-black/20 cursor-pointer"
          >
            <img src="/icon-angle-right.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}
