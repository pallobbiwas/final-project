import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContuctUs from './ContuctUs';
import Info from './Info';
import MakeAppoinment from './MakeAppoinment';
import Services from './Services';
import TestyMonial from './TestyMonial';

const Home = () => {
    return (
        <div className='my-20'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppoinment></MakeAppoinment>
            <TestyMonial></TestyMonial>
            <ContuctUs></ContuctUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;