// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import Card from 'src/components/Card/Card';
import './ProductsSlider.css';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

const ProductsSlider = ({ products}) => {

  return (
    <div className="productsSlider">
      <h1>New Product</h1>
      <div className="container-fluid">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          navigation
          loop={true}
          breakpoints={{
            480: {
              spaceBetween: 0,
              slidesPerView: 1,
            },
            680: {
              slidesPerView: 2,
              spaceBetween: 5
            },
            1080: {
              slidesPerView: 4,
              spaceBetween: 5
            },
          }}
        >
          {!!products && products.map(product => (
            <SwiperSlide>
              <Card product = {product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default ProductsSlider