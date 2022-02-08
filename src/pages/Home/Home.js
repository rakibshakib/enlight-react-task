import React from 'react';
import Banner from '../../components/Banner/Banner';
import DisplayProduct from '../../components/DisplayProduct/DisplayProduct';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <DisplayProduct />
        </div>
    );
};

export default Home;
