import React, { useState, useEffect, useRef } from "react";
import {
  FAQ,
  Footer,
  Header,
  Landing,
  Profiles,
  SwitchTheme,
  WhatWeOffer,
} from "./Pages";
import ContactUs from "./Pages/ContactUs";
import "./App.css";

const App: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const sectionRefs = {
    landing: useRef<HTMLDivElement | null>(null),
    about: useRef<HTMLDivElement | null>(null),
    contactUs: useRef<HTMLDivElement | null>(null),
  };

  useEffect(() => {
    const ref = sectionRefs[selectedOption as keyof typeof sectionRefs];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
    // eslint-disable-next-line
  }, [selectedOption]);

  const SectionWrapper: React.FC<{
    id: keyof typeof sectionRefs;
    children: React.ReactNode;
  }> = ({ id, children }) => (
    <div ref={sectionRefs[id]} tabIndex={-1}>
      {children}
    </div>
  );

  return (
    <div className="py-4 px-4">
      <Header onSelectMenuOption={setSelectedOption} />
      <SectionWrapper id="landing">
        <Landing />
      </SectionWrapper>
      <WhatWeOffer />
      <FAQ />
      <SectionWrapper id="about">
        <Profiles />
      </SectionWrapper>
      <SectionWrapper id="contactUs">
        <ContactUs />
      </SectionWrapper>
      <Footer />
      <SwitchTheme />
    </div>
  );
};

export default App;
