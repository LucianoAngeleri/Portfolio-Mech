import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';


const Slider = ({ tecnologias }) => {
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={32}
            loop={true}
            centeredSlides={true}
            
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
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
            modules={[Autoplay]}
            className="sliderTech"
        >
            {tecnologias.map((tecnologia, index) => (
                <SwiperSlide key={index} className='my-auto py-6'>
                    <img src={tecnologia.src} alt={tecnologia.nombre} className='w-full drop-shadow-lg'/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;