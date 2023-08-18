import React  from 'react';

import Category from '../components/layouts/home-7/Category';
import Create from '../components/layouts/home-7/Create';
import Footer from '../components/footer/Footer';
import HeaderStyle2 from '../components/header/HeaderStyle2';
import LiveAuction from '../components/layouts/home-7/LiveAuction';
import PopularCollection from '../components/layouts/home-7/PopularCollection';
import SliderStyle4 from '../components/slider/SliderStyle4';
import TodayPicks from '../components/layouts/home-7/TodayPicks';
import TopSeller from '../components/layouts/home-7/TopSeller';

const Home07 = () => {
    return (
        <div className='home-7'>
            <HeaderStyle2 />
            <SliderStyle4 />
            <LiveAuction />
            <Category />
            <TopSeller />
            <TodayPicks />
            <Create />
            <PopularCollection />
            <Footer />
        </div>
    );
}

export default Home07;
