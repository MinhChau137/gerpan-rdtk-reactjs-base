import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import 'src/assets/styles/Home/HomePage.css'
import Banner from 'src/components/Banner/Banner';
import ProductsSlider from 'src/components/ProductsSlider/ProductsSlider';
import Header from 'src/components/Header/Header';
import Footer from 'src/components/Footer/Footer';
import SubBannerHeader from 'src/components/Home/SubBannerHeader/SubBannerHeader';
import SubBannerFooter from 'src/components/Home/SubBannerFooter/SubBannerFooter';
import Blog from 'src/components/Home/Blog/Blog';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchGetAllProducts,
  fetchGetHotProducts,
  fetchGetDefaultProducts,
  selectProducts,
  selectProductsCount,
  selecHotProducts
} from 'src/features/Product/productSlice';
import HotProductsSlider from 'src/components/HotProductsSlider/HotProductsSlider';

import { TYPE_PRODUCT } from 'src/configs/constants'

const Home = () => {
  const dispatch = useDispatch();

  // local state
  const [filter, setFilter] = useState({
    name: '',
    code: '',
    order: '',
    type: '',
    money: '',
    tag: '',
    page: 0,
    pageSize: 12
  });

  // global state
  const productsCount = useSelector(selectProductsCount);
  const products = useSelector(selectProducts);
  const hotProducts = useSelector(selecHotProducts);

  useEffect(() => {
    dispatch(fetchGetHotProducts());
  }, [dispatch]);

  useEffect((filter) => {
    dispatch(fetchGetAllProducts({ filter }));
  }, [dispatch, filter]);


  return (
    <>
      <Helmet>
        <title>Home | Gerpan</title>
      </Helmet>
      <div className="main routes">
        <Header />
        <Banner />
        <SubBannerHeader />
        <HotProductsSlider
          hotProducts={hotProducts}
        />
        <ProductsSlider
          products={products}
        />
        <SubBannerFooter />
        <Blog products={products} />
        <Footer />
      </div>
    </>
  );
};

export default Home;
