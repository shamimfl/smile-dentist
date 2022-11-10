import React, { useEffect } from 'react';
import Banner from '../Banner/Banner';
import Care from '../Care/Care';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Info from '../Info/Info';
import OurServices from '../OurServices/OurServices';


const Home = () => {
    useEffect(() => {
        document.title = `Home-Dentist`
      }, [])
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <OurServices></OurServices>
            <Care></Care>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;