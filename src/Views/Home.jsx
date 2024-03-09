import React from "react";
import Header from "../components/sections/Header";
import SupportCustomers from "../components/sections/SupportCustomers";
import KeyFeatures from "../components/sections/KeyFeatures";
import HowWeHelpBussinessGrow from "../components/sections/HowWeHelpBussinessGrow";
import GetImpactfulConversation from "../components/sections/GetImpactfulConversation";
import Footer from "../components/connected/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <SupportCustomers />
      <KeyFeatures />
      <HowWeHelpBussinessGrow />
      <GetImpactfulConversation />
      <Footer />
    </div>
  );
};

export default Home;
