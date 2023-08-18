import React from 'react';

import Create from '../components/layouts/Create';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import LiveAuction from '../components/layouts/LiveAuction';
import PopularCollection from '../components/layouts/PopularCollection';
import Slider from '../components/slider/Slider';
import TodayPicks from '../components/layouts/TodayPicks';
import TopSeller from '../components/layouts/TopSeller';
import heroSliderData from '../assets/fake-data/data-slider';
import liveAuctionData from '../assets/fake-data/data-live-auction';
import popularCollectionData from '../assets/fake-data/data-popular-collection';
import todayPickData from '../assets/fake-data/data-today-pick';
import topSellerData from '../assets/fake-data/data-top-seller'

const Home01 = () => {
    return (
        <div className='home-1'>
            <Header />
            <Slider data={heroSliderData} />
            <LiveAuction data={liveAuctionData} />
            <TopSeller data={topSellerData} />
            <TodayPicks data={todayPickData} />
            <PopularCollection data={popularCollectionData} />
            <Create />
            <Footer />
        </div>
    );
}

export default Home01;
