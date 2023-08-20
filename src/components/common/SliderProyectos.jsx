import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CardProyecto from './CardProyecto';


const SliderProyectos = ({ proyectos }) => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={32}
            centeredSlides={true}
            navigation={true}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    spaceBetween: 32,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 32,
                },
                1024: {
                    slidesPerView: 6,
                    spaceBetween: 32,
                },
            }}
            modules={[Navigation]}
            className="sliderProyectos"
        >
            {proyectos.map((proyecto, index) => (
                <SwiperSlide key={index} className='my-auto py-6'>
                    <CardProyecto proyecto={proyecto} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderProyectos;