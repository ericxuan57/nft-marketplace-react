import React from 'react';

import Create from '../components/layouts/home-6/Create';
import Footer from '../components/footer/Footer';
import HeaderStyle2 from '../components/header/HeaderStyle2';
import LiveAuction from '../components/layouts/home-6/LiveAuction';
import PopularCollection from '../components/layouts/home-6/PopularCollection';
import SliderStyle3 from '../components/slider/SliderStyle3';
import TodayPicks from '../components/layouts/home-6/TodayPicks';
import TopSeller from '../components/layouts/home-6/TopSeller';
import heroSliderData from '../assets/fake-data/data-slider';
import todayPickData from '../assets/fake-data/data-today-pick';

const Home06 = () => {
    return (
        <div className='home-6'>
            <HeaderStyle2 />
            <SliderStyle3 data={heroSliderData} />
            <LiveAuction />
            <TopSeller />
            <TodayPicks data={todayPickData} />
            <PopularCollection />
            <Create />
            <Footer />
        </div>
    );
}

export default Home06;
