import React from 'react';
import Banner from './Banner';
import FeaturedServices from './FeaturedServices';
import MeetPartners from './MeetPartners';
import AskQus from './AskQus';
import CountUp from './CountUp';

const Home = () => {
    return (
        <div className='pb-10'>
            <Banner></Banner>
            <FeaturedServices></FeaturedServices>
            <MeetPartners></MeetPartners>
            <CountUp></CountUp>
            <AskQus></AskQus>
        </div>
    );
};

export default Home;