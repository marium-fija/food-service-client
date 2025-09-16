import React from 'react';
import Banner from './Banner';
import FeaturedServices from './FeaturedServices';
import MeetPartners from './MeetPartners';

const Home = () => {
    return (
        <div className='pb-10'>
            <Banner></Banner>
            <FeaturedServices></FeaturedServices>
            <MeetPartners></MeetPartners>
        </div>
    );
};

export default Home;