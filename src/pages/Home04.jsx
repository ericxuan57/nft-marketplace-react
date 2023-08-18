import React from 'react';

import CardItem from '../components/layouts/home-4/CardItem';
import Create from '../components/layouts/Create';
import Footer from '../components/footer/Footer';
import HeaderStyle2 from '../components/header/HeaderStyle2';
import LiveAuction from '../components/layouts/home-4/LiveAuction';
import PopularCollection from '../components/layouts/PopularCollection';
import TodayPicks from '../components/layouts/home-4/TodayPicks';
import TopSeller from '../components/layouts/home-2/TopSeller';
import liveAuctionData from '../assets/fake-data/data-live-auction';
import popularCollectionData from '../assets/fake-data/data-popular-collection';
import todayPickData from '../assets/fake-data/data-today-pick';
import topSellerData from '../assets/fake-data/data-top-seller';

const Home04 = () => {
    return (
        <div className='home-4'>
            <HeaderStyle2 />
            <CardItem />
            <LiveAuction data={liveAuctionData} />
            <TopSeller data={topSellerData} />
            <TodayPicks data={todayPickData} />
            <PopularCollection data={popularCollectionData} />
            <Create />
            <Footer />
        </div>
    );
}

export default Home04;
