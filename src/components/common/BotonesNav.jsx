import React from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const BotonesNav = ({
  bgColor,
  bgColorHover,
  bgColorActive,
  bgColorDisabled,
  textColor,
  textColorHover,
  textColorActive,
  textColorDisabled,
  borderColor,
  classBtnSwiper,
}) => {
  return (
    <div className="justify-center items-center flex py-2">
      <div
        className={`${bgColor} rounded-full shadow-md border-2 border-${borderColor} flex`}
      >
        <button
          className={`${classBtnSwiper}-prev ${textColor} hover:${bgColorHover} hover:${textColorHover} active:${bgColorActive} active:${textColorActive} disabled:${textColorDisabled} disabled:${bgColorDisabled} w-12 h-12 p-2 rounded-full m-1 `}
          type="button"
        >
          <ChevronLeftIcon />
        </button>
        <button
          className={`${classBtnSwiper}-next ${textColor} hover:${bgColorHover} hover:${textColorHover} active:${textColorActive} active:${bgColorActive} disabled:${textColorDisabled} disabled:${bgColorDisabled} w-12 h-12 p-2 rounded-full m-1`}
          type="button"
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
};

export default BotonesNav;
