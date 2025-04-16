import React from "react";
import {
  FAQ,
  Header,
  Landing,
  Profiles,
  SwitchTheme,
  WhatWeOffer,
} from "./Pages";
import ContactUs from "./Pages/ContactUs";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="py-4 px-4">
      <Header />
      <Landing />
      <WhatWeOffer />
      <FAQ />
      <Profiles />
      <ContactUs />
      <SwitchTheme />
    </div>
  );
};
export default App;
