import React from 'react';

import BrowCategory from '../components/layouts/home-5/BrowCategory';
import Create from '../components/layouts/home-2/Create';
import Footer from '../components/footer/Footer';
import HeaderStyle2 from '../components/header/HeaderStyle2';
import LiveAuction from '../components/layouts/home-5/LiveAuction';
import PopularCollection from '../components/layouts/home-5/PopularCollection';
import SliderStyle2 from '../components/slider/SliderStyle2';
import TodayPicks from '../components/layouts/home-5/TodayPicks';
import TopSeller from '../components/layouts/home-5/TopSeller';
import heroSliderData from '../assets/fake-data/data-slider';
import todayPickData from '../assets/fake-data/data-today-pick';

const Home05 = () => {
    return (
        <div className='home-5'>
            <HeaderStyle2 />
            <SliderStyle2 data={heroSliderData} />
            <BrowCategory />
            <LiveAuction />
            <TopSeller />
            <TodayPicks data={todayPickData} />
            <PopularCollection />
            <Create />
            <Footer />
        </div>
    );
}

export default Home05;
