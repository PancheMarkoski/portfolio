import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, A11y } from 'swiper';

import img2 from '../../assets/images/png-transparent-web-development-web-design-web-banner-web-application-web-design-search-engine-optimization-web-design-mobile-app-development.png'
import ProjectImg from '../../assets/images/projecImg.jpg'
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
          <Card title="title" icon={FaReact} btn="btnnn" projectImg={ProjectImg}/>
        </SwiperSlide>
        <SwiperSlide><Card title="title" icon={FaWordpress} btn="btnnn" projectImg={img2} /></SwiperSlide>
        <SwiperSlide><Card title="title" icon={FaReact} btn="btnnn"/></SwiperSlide>
        <SwiperSlide><Card title="title" icon={FaWordpress} btn="btnnn"/></SwiperSlide>
      </Swiper>
    )
}

export default swiper
