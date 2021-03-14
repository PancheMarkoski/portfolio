import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, A11y } from 'swiper';

import KissMenadaImg from '../../assets/images/kissMenada.png'
import EcommerceAppImg from '../.././assets/images/EcommerceApp.png'
import RecipeAppImg from '../.././assets/images/RecipeApp.png'
import GimexWebSite from '../../assets/images/GimexWebSite.png'
import { FaReact, FaWordpress } from 'react-icons/fa'
import Card from '../../component/card/card'
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, A11y]);

 

const swiper = () => {
    return (
        <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Card url='https://eager-goldberg-8e665c.netlify.app/' title="Recipe App" icon={FaReact} btn="View" projectImg={RecipeAppImg}/>
        </SwiperSlide>
        <SwiperSlide><Card url="https://gimex.mk/" title="Gimex" icon={FaWordpress} btn="View" projectImg={GimexWebSite} /></SwiperSlide>
        <SwiperSlide><Card url="https://nostalgic-blackwell-e92429.netlify.app/" title="E-commerce app" icon={FaReact} btn="view" projectImg={EcommerceAppImg}/></SwiperSlide>
        <SwiperSlide><Card url="https://kiss-menada.mk/" title="kiss-menada.mk" icon={FaWordpress} btn="view" projectImg={KissMenadaImg}/></SwiperSlide>
      </Swiper>
    )
}

export default swiper
