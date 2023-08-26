import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../css/sliderProyectos/sliderProyectos.css";
import CardProyecto from "./CardProyecto";
import BotonesNav from "./BotonesNav";

const SliderProyectos = ({ proyectos }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={16}
      navigation={{
        nextEl: ".sliderProyectos-btn-next",
        prevEl: ".sliderProyectos-btn-prev",
      }}
      pagination={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 32,
        },
      }}
      modules={[Navigation, Pagination]}
      className="sliderProyectos"
    >
      <div slot="container-start">
        <BotonesNav
          bgColor={"bg-primary-400"}
          bgColorHover={"bg-primary-500"}
          bgColorActive={"bg-primary-600"}
          bgColorDisabled={"bg-primary-300"}
          textColor={"text-dark"}
          textColorHover={"text-dark"}
          textColorActive={"text-light"}
          textColorDisabled={"text-primary-200"}
          borderColor={"dark"}
          classBtnSwiper={"sliderProyectos-btn"}
        />
      </div>
      {proyectos.map((proyecto, index) => (
        <SwiperSlide key={index} className="my-auto py-6">
          <CardProyecto proyecto={proyecto} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderProyectos;
