import React from 'react'
import { useEffect } from "react";

import AOS from "aos"
import Hero from './Hero';
import IconsSlider from './IconsSlider';
import SellToShoppers from './SellToShoppers';
import TeamsAtService from './TeamsAtService';
import HowAllSomeWorks from './HowAllSomeWorks';
import DrivesOperations from './DrivesOperations';
import FulfilledMillions from './FulfilledMillions';
import SuccessFulfillments from './SuccessFulfillments';
import DoMoreBest from './DoMoreBest';
import ApiIntegrations from './ApiIntegrations';
import RevenueChannel from './RevenueChannel';
import Faqs from './Faqs';
import Shoppers from './Shoppers';
import PricingAndPlans from './PricingAndPlans';
import ContactUs from './ContactUs';

const NoSSRComponent = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
        });
    }, []);
    return (
        <>
            <Hero />
            <IconsSlider />
            <SellToShoppers />
            <TeamsAtService />
            <HowAllSomeWorks />
            <DrivesOperations />
            <FulfilledMillions/>
            <SuccessFulfillments/>
            <DoMoreBest/>
            <ApiIntegrations/>
            <RevenueChannel/>
            <Faqs/>
            <Shoppers/>
            <PricingAndPlans/>
            <ContactUs/>
        </>
    );
}

export default NoSSRComponent