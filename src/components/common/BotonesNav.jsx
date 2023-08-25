import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

const BotonesNav = ({bgColor,textColor,borderColor, classBtnSwiper}) => {
    return (
        <div className="justify-center items-center flex">
            <div className={`p-2 bg-${bgColor} rounded-3xl shadow-lg border-2 border-${borderColor} gap-12 flex text-${textColor}`}>
            <button className={`${classBtnSwiper}-prev w-8 h-8`} type="button">
                <ChevronLeftIcon />
            </button>
            <button className={`${classBtnSwiper}-next w-8 h-8`} type="button">
                <ChevronRightIcon />
            </button>
            </div>
        </div>
    );
};

export default BotonesNav;