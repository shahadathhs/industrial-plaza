// Import images
import slide1 from '../../assets/SlideImg/slide1.png'
import slide2 from '../../assets/SlideImg/slide2.png'
import slide3 from '../../assets/SlideImg/slide3.png'
import slide4 from '../../assets/SlideImg/slide4.jpeg'
import slide5 from '../../assets/SlideImg/slide5.jpeg'
import slide6 from '../../assets/SlideImg/slide6.jpeg'
import slide7 from '../../assets/SlideImg/slide7.jpeg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slide = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true} 
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
      >
        <SwiperSlide>
          <img className='w-2/3 h-[300px] md:h-[400px] lg:h-[500px] mx-auto rounded-xl' 
          src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-2/3 h-[300px] md:h-[400px] lg:h-[500px] mx-auto rounded-xl' 
          src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className='w-2/3 h-[300px] md:h-[400px] lg:h-[500px] mx-auto rounded-xl' 
          src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-2/3 h-[300px] md:h-[400px] lg:h-[500px] mx-auto rounded-xl' 
          src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-2/3 h-[300px] md:h-[400px] lg:h-[500px] mx-auto rounded-xl' 
          src={slide5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-2/3 h-[300px] md:h-[400px] lg:h-[500px] mx-auto rounded-xl' 
          src={slide6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-2/3 h-[300px] md:h-[400px] lg:h-[500px] mx-auto rounded-xl' 
          src={slide7} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;