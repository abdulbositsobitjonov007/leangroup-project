


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                loop={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                speed={3000}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><img className='hover:scale-[1.1] duration-300' src="/images/image 7.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='hover:scale-[1.1] duration-300' src="/images/image 8.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='hover:scale-[1.1] duration-300' src="/images/image 9.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='hover:scale-[1.1] duration-300' src="/images/image 10.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='hover:scale-[1.1] duration-300' src="/images/image 11.png" alt="" /></SwiperSlide>
                <SwiperSlide><img className='hover:scale-[1.1] duration-300' src="/images/image 9.png" alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
}
