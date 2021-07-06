// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import Card from '../Card/Card';
import './SliderCard.css';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const SliderCard = ({ products }) => {
  const productList =[
    {
      src: 'https://product.hstatic.net/200000182297/product/7_1313ac82f5304293bf80fa4a47b39ad2_master.jpg',
      name: 'DDaamf',
      cost: 999,
    },
    {
      src: 'https://product.hstatic.net/200000182297/product/7_1313ac82f5304293bf80fa4a47b39ad2_master.jpg',
      name: 'Vays',
      cost: 1000,
    }
  ]

  return (
    <>
      <h1>Products</h1>
      <Swiper
        spaceBetween={5}
        slidesPerView={4}
        navigation
        loop={true}
        breakpoints={{
          // when window width is >= 640px
          480: {
            width: 480,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          640: {
            width: 640,
            slidesPerView: 2,
          },
          1080: {
            width: 1080,
            slidesPerView: 4,
          },
        }}
      >
        {productList.length > 0 && productList.map(element => (
          <SwiperSlide>
            <Card src={element.src} name={element.name} cost={element.cost} />
          </SwiperSlide>
          ) )}
      </Swiper>
    </>
  );
};
export default SliderCard