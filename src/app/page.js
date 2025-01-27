import ApiIntegrations from "./components/ApiIntegrations";
import AutomateYourOperations from "./components/AutomateYourOperations";
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
import SalesOpportunity from "./components/SalesOpportunity";
import SellToShoppers from "./components/SellToShoppers";
import Shoppers from "./components/Shoppers";
import SuccessFulfillments from "./components/SuccessFulfillments";
import TeamsAtService from "./components/TeamsAtService";

export default function Home() {
  return (
    <>
      <Hero />
      <IconsSlider />
      <SellToShoppers />
      <TeamsAtService />
      <HowAllSomeWorks />
      <DrivesOperations />
      <FulfilledMillions />
      <SuccessFulfillments />
      <AutomateYourOperations />
      <SalesOpportunity />
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
