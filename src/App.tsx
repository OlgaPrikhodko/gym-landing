import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";

import SelectedPageProvider from "./contexts/SelectedPageContext";

import Benefits from "@/scenes/Benefits";
import ContactUs from "@/scenes/ContactUs";
import Footer from "@/scenes/Footer";
import Hero from "@/scenes/Hero";
import Navbar from "@/scenes/navbar";
import OurClasses from "@/scenes/OurClasses";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <SelectedPageProvider>
      <div className="app bg-gray-20">
        <Navbar isTopOfPage={isTopOfPage} />
        <main>
          <Hero />

          <Benefits />

          <OurClasses />

          <ContactUs />

          <Footer />
        </main>
      </div>
    </SelectedPageProvider>
  );
}

export default App;
