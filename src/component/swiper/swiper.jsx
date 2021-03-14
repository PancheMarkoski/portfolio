import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, A11y } from 'swiper';

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
        <SwiperSlide><Card title="title" icon={FaReact} btn="btnnn"/></SwiperSlide>
        <SwiperSlide><Card title="title" icon={FaWordpress} btn="btnnn"/></SwiperSlide>
      </Swiper>
    )
}

export default swiper
