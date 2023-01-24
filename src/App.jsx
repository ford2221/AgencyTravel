import React from 'react';
import { Navbar, Hero, Footer, Memory, Explore, Advertise, Pricings, Banner, Newslatter } from './components';
import { hero, navlinks, memories, placesAPI, brands, pricingapi, bannerAPI, footerAPI } from './data/database';

const App = () => {
  return (
   <>
      <Navbar navlinks={navlinks} />
        <Hero hero={hero} />
        <Memory memories={memories} />
        <Explore title="Explore The Beauty of World" placesAPI={placesAPI} />
        <Advertise brands={brands} />
        <Pricings pricingapi={pricingapi} />
        <Banner bannerAPI={bannerAPI} />
        <Newslatter />
      <Footer footerAPI={footerAPI} />
   </>
  );
};

export default App;
