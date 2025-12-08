
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';



export default function HeroCarousel() {
    return (
        <>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <div className='relative w-full h-[527px]'>
                        <img className='bg-center bg-no-repeat bg-cover w-full' src="src/assets/bg1 1.jpg" alt="" />
                        <div className='container mx-auto'>
                            <span className=' absolute top-[100px] flex flex-col gap-[17px] items-start'>
                                <p className='text-[13px] '>LEANGROUP - тубы и этикетки</p>
                                <h2 className='text-[32px] font-[600]'>Ламинатные тубы</h2>
                                <p className='text-[15px] max-w-[530px] leading-[20px] text-left'>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
                                <div>
                                    <button className='py-[10px] px-[20px] text-[white] text-[15px] cursor-pointer rounded-[5px] bg-[#EF7C00]'>Каталог</button>
                                </div>
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-[527px]'>
                        <img className='bg-center bg-no-repeat bg-cover w-full' src="src/assets/bg1 1.jpg" alt="" />
                        <div className='container mx-auto '>
                            <span className=' absolute top-[100px] flex flex-col gap-[17px] items-start'>
                                <p className='text-[13px] '>LEANGROUP - тубы и этикетки</p>
                                <h2 className='text-[32px] font-[600]'>Ламинатные тубы</h2>
                                <p className='text-[15px] max-w-[530px] leading-[20px] text-left'>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
                                <div>
                                    <button className='py-[10px] px-[20px] text-[white] text-[15px] cursor-pointer rounded-[5px] bg-[#EF7C00]'>Каталог</button>
                                </div>
                            </span>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative w-full h-[527px]'>
                        <img className='bg-center bg-no-repeat bg-cover w-full' src="src/assets/bg1 1.jpg" alt="" />
                        <div className='container mx-auto '>
                            <span className=' absolute top-[100px] flex flex-col gap-[17px] items-start'>
                                <p className='text-[13px] '>LEANGROUP - тубы и этикетки</p>
                                <h2 className='text-[32px] font-[600]'>Ламинатные тубы</h2>
                                <p className='text-[15px] max-w-[530px] leading-[20px] text-left'>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p>
                                <div>
                                    <button className='py-[10px] px-[20px] text-[white] text-[15px] cursor-pointer rounded-[5px] bg-[#EF7C00]'>Каталог</button>
                                </div>
                            </span>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
