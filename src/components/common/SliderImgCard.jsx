import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import BotonesNav from "./BotonesNav";

const SliderImgCard = ({ proyecto }) => {
  return (
    <Swiper
      slidesPerView={1}
      navigation={{
        nextEl: ".sliderCardImg-btn-next",
        prevEl: ".sliderCardImg-btn-prev",
      }}
      modules={[Navigation]}
      className="sliderImgCard"
    >
      <div slot="container-end">
        <BotonesNav
            bgColor={"bg-light"}
            bgColorHover={"bg-primary-200"}
            bgColorActive={"bg-primary-400"}
            bgColorDisabled={"bg-primary-100"}
            textColor={"text-primary-400"}
            textColorHover={"text-dark"}
            textColorActive={"text-light"}
            textColorDisabled={"text-primary-300"}
            borderColor={"primary-400"}
          classBtnSwiper="sliderCardImg-btn"
        />
      </div>
      {proyecto.imagenes.map((img, index) => (
        <SwiperSlide key={index}>
          <img
            src={img}
            alt={`Imágen de Proyecto - ${index + 1}`}
            className="w-60 mx-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderImgCard;
