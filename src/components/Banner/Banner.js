// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import './Banner.css';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import banner_1 from 'src/assets/images/banner_3.png'
import banner_2 from 'src/assets/images/banner_2.jpg'

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const Banner = () => {
  const bannerList =[
    {
      src: banner_1,
    },
    {
      src: banner_2,
    }
  ]

  return (
    <div className = "banner">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination
        loop={false}
      >
        {bannerList.length > 0 && bannerList.map(element => (
          <SwiperSlide>
            <img src={element.src} alt='banner' />
          </SwiperSlide>
          ) )}
      </Swiper>
    </div>
  );
};
export default Banner