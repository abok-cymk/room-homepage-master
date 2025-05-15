import React, { forwardRef } from "react";

const MobileNavigation = forwardRef(({ onClose }, ref) => {
  return (
    <div
      ref={ref}
      className="bg-white absolute w-[338px] px-5 py-6 flex items-center justify-center gap-10 shrink"
    >
      <img
        src="/icon-close.svg"
        alt="Close menu"
        onClick={onClose}
        className="cursor-pointer"
      />
      <ul className="flex items-center gap-6 text-custom-black font-600">
        <li>
          <a href="#">home</a>
        </li>
        <li>
          <a href="#">shop</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
        <li>
          <a href="#">contact</a>
        </li>
      </ul>
    </div>
  );
});

export default MobileNavigation;
