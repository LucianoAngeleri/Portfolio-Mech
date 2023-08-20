import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const SliderImgCard = ({ proyecto }) => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={32}
            centeredSlides={true}
            navigation={true}
            modules={[Navigation]}
            className="sliderImgCard"
        >
            {
                proyecto.imagenes.map((img, index) => {
                    <SwiperSlide key={index}>
                        <img src={img} alt={`Imágen de Proyecto - ${index + 1}`} />
                    </SwiperSlide>
                })
            }

        </Swiper>
    );
};

export default SliderImgCard;