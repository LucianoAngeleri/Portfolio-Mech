import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


const Slider = ({ tecnologias }) => {
    return (
        <Swiper
            slidesPerView={2}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
            modules={[Autoplay]}
            className="sliderTech"
            >
            {tecnologias.map((tecnologia, index) => (
                <SwiperSlide key={index}>
                    <img src={tecnologia.src} alt={tecnologia.nombre} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;