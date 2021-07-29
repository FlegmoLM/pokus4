import React from 'react';
import Header from './header';
import MainContent from './maincontent';
import Footer from './footer';
import Menu from './menu';

function Home(){
    return(
        <div>
            <Header />
            <Menu />
            <MainContent />
            <Footer />
        </div>
    )
}
export default Home;