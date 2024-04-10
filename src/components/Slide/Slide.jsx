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
    <div className='p-2'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
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
          <div className="hero">
            <img 
            className='w-full md:w-2/3 h-[300px] md:h-[400px] lg:h-[500px] mx-auto rounded-xl' 
            src={slide1} 
            />
            <p className="hero-content max-w-md text-center font-bold text-xl text-blue-500 bg-base-200 rounded-xl">
              Discover endless possibilities with our diverse range of industrial properties, tailored to meet your business needs and fuel your growth.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero">
            <img 
            className='w-full md:w-2/3 h-[300px] md:h-[400px] lg:h-[500px] mx-auto rounded-xl' 
            src={slide2} 
            />
            <p className="hero-content max-w-md text-center font-bold text-xl text-blue-500 bg-base-200 rounded-xl">
              Unlock the potential of your business with state-of-the-art facilities and prime locations, designed to optimize efficiency and productivity.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero">
            <img 
            className='w-full md:w-2/3 h-[300px] md:h-[400px] lg:h-[500px] mx-auto rounded-xl' 
            src={slide3} 
            />
            <p className="hero-content max-w-md text-center font-bold text-xl text-blue-500 bg-base-200 rounded-xl">
            Experience seamless transactions and personalized service as our team guides you through every step of your industrial real estate journey.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero">
            <img 
            className='w-full md:w-2/3 h-[300px] md:h-[400px] lg:h-[500px] mx-auto rounded-xl' 
            src={slide4} 
            />
            <p className="hero-content max-w-md text-center font-bold text-xl text-blue-500 bg-base-200 rounded-xl">
            From warehouses to production plants, find the perfect space to elevate your operations and achieve your business goals with ease.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero">
            <img 
            className='w-full md:w-2/3 h-[300px] md:h-[400px] lg:h-[500px] mx-auto rounded-xl' 
            src={slide5} 
            />
            <p className="hero-content max-w-md text-center font-bold text-xl text-blue-500 bg-base-200 rounded-xl">
            Join a community of thriving businesses and benefit from amenities such as loading docks, security systems, and convenient transportation access.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero">
            <img 
            className='w-full md:w-2/3 h-[300px] md:h-[400px] lg:h-[500px] mx-auto rounded-xl' 
            src={slide6} 
            />
            <p className="hero-content max-w-md text-center font-bold text-xl text-blue-500 bg-base-200 rounded-xl">
            Trust in our expertise and commitment to excellence as we help you navigate the complexities of industrial real estate with confidence and clarity.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero">
            <img 
            className='w-full md:w-2/3 h-[300px] md:h-[400px] lg:h-[500px] mx-auto rounded-xl' 
            src={slide7} 
            />
            <p className="hero-content max-w-md text-center font-bold text-xl text-blue-500 bg-base-200 rounded-xl">
            Start your journey towards success today by exploring our portfolio of industrial properties and discovering the perfect space to realize your vision.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slide;