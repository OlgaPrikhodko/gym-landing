import Navbar from "@/scenes/navbar";
import { useEffect, useState } from "react";
import { SelectedPage } from "@/shared/types";
import Hero from "./scenes/Hero";
import Benefits from "./scenes/Benefits";
import OurClasses from "./scenes/OurClasses";
import ContactUs from "./scenes/ContactUs";

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
    <>
      <div className="app bg-gray-20">
        <Navbar
          isTopOfPage={isTopOfPage}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
        <main>
          <Hero setSelectedPage={setSelectedPage} />

          <Benefits setSelectedPage={setSelectedPage} />

          <OurClasses setSelectedPage={setSelectedPage} />

          <ContactUs setSelectedPage={setSelectedPage} />
        </main>
      </div>
    </>
  );
}

export default App;
