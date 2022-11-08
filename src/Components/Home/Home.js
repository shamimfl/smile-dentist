import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import OurServices from '../OurServices/OurServices';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <OurServices></OurServices>
            <Footer></Footer>
        </div>
    );
};

export default Home;