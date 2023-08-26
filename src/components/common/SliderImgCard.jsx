import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import BotonesNav from './BotonesNav';

const SliderImgCard = ({ proyecto }) => {
    return (
        <Swiper
            slidesPerView={1}
            navigation={{
                nextEl: '.sliderCardImg-btn-next',
                prevEl: '.sliderCardImg-btn-prev',
            }}
            modules={[Navigation]}
            className="sliderImgCard"
        >
            <div  slot="container-end" className='pb-4'>
             <BotonesNav bgColor="light" textColor="primary" borderColor="primary" classBtnSwiper="sliderCardImg-btn"/>
            </div>
            {
            proyecto.imagenes.map((img, index) => (
                <SwiperSlide key={index}>
                    <img src={img} alt={`Imágen de Proyecto - ${index + 1}`} className='w-60 mx-auto'/>
                </SwiperSlide>
            ))
            }
        </Swiper>
    );
};

export default SliderImgCard;