// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import Card from 'src/components/Card/Card';
import './Blog.css';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import imgBlog from "src/assets/images/imgBlog.jpg"

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const Blog = ({ products }) => {

  return (
    <div className = "productsSlider">
      <h1>Blog's Nem</h1>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        navigation
        loop={true}
        breakpoints={{
          // when window width is >= 640px
          480: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          // when window width is >= 768px
          640: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          1080: {
            slidesPerView: 3,
            spaceBetween: 10
          },
        }}
      >
        {products.length > 0 && products.map(product => (
          <SwiperSlide>
            <Card product = {product}/>
          </SwiperSlide>
          ) )}
      </Swiper>
    </div>
  );
};
export default Blog