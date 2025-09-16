import React from 'react';
import Banner from './Banner';
import FeaturedServices from './FeaturedServices';
import MeetPartners from './MeetPartners';
import AskQus from './AskQus';
import Counter from './Counter';

const Home = () => {
    return (
        <div className='pb-10'>
            <Banner></Banner>
            <FeaturedServices></FeaturedServices>
            <MeetPartners></MeetPartners>
            <Counter></Counter>
            <AskQus></AskQus>
        </div>
    );
};

export default Home;