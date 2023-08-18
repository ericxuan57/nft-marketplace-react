import React from 'react';

import Create from '../components/layouts/home-2/Create';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import LiveAuction from '../components/layouts/home-2/LiveAuction';
import PopularCollection from '../components/layouts/home-2/PopularCollection';
import SliderStyle1 from '../components/slider/SliderStyle1';
import TodayPicks from '../components/layouts/home-2/TodayPicks';
import TopSeller from '../components/layouts/home-2/TopSeller';
import heroSliderData from '../assets/fake-data/data-slider-2';
import liveAuctionData from '../assets/fake-data/data-live-auction';
import popularCollectionData from '../assets/fake-data/data-popular-collection';
import todayPickData from '../assets/fake-data/data-today-pick';
import topSellerData from '../assets/fake-data/data-top-seller';


const Home02 = () => {
    return (
        <div className='home-2'>
            <Header />
            <SliderStyle1 data={heroSliderData} />
            <Create />
            <LiveAuction data={liveAuctionData} />
            <PopularCollection data={popularCollectionData} />
            <TopSeller data={topSellerData} />
            <TodayPicks data={todayPickData} />
            <Footer />
        </div>
    );
}

export default Home02;
