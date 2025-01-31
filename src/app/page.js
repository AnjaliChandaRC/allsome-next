"use client"
import { useEffect } from "react";
import ApiIntegrations from "./components/ApiIntegrations";
import ContactUs from "./components/ContactUs";
import DoMoreBest from "./components/DoMoreBest";
import DrivesOperations from "./components/DrivesOperations";
import Faqs from "./components/Faqs";
import FulfilledMillions from "./components/FulfilledMillions";
import Hero from "./components/Hero";
import HowAllSomeWorks from "./components/HowAllSomeWorks";
import IconsSlider from "./components/IconsSlider";
import PricingAndPlans from "./components/PricingAndPlans";
import RevenueChannel from "./components/RevenueChannel";
import SellToShoppers from "./components/SellToShoppers";
import Shoppers from "./components/Shoppers";
<<<<<<< HEAD
import TeamsAtService from "./components/TeamsAtService";
import SuccessFulfillments from './components/SuccessFulfillments'
import CustomBrandsLayout from "./components/common/CustomBrandsLayout";
import { CUSTOM_LAYOUT_DATA } from "./utils/helper"
=======
import SuccessFulfillments from "./components/SuccessFulfillments";
>>>>>>> 302d4081b6b9bd17179c5655d3b26d394ad9acc8
import AOS from "aos"
import TeamsServices from "./components/TeamServices";

export default function Home() {
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
      <TeamsServices/>
      <HowAllSomeWorks />
      <DrivesOperations />
      <FulfilledMillions />
      <SuccessFulfillments/>
      {CUSTOM_LAYOUT_DATA.map((obj) => (
        <CustomBrandsLayout key = {obj.key} obj = {obj}/>
      ))}
      <DoMoreBest />
      <ApiIntegrations />
      <RevenueChannel />
      <Faqs />
      <Shoppers />
      <PricingAndPlans />
      <ContactUs />
    </>
  );
}
