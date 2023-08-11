import { SelectedPage } from "@/shared/types";

import HeroTextBlock from "./HeroTextBlock";
import HeroSponsors from "./HeroSponsors";
import HeroActions from "./HeroActions";
import HeroImage from "./HeroImage";
import { motion } from "framer-motion";
import { useSelectedPage } from "@/contexts/SelectedPageContext";

const Hero: React.FC = () => {
  const { setSelectedPage } = useSelectedPage();

  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <HeroTextBlock />

          <HeroActions />
        </div>

        <HeroImage />
      </motion.div>

      <HeroSponsors />
    </section>
  );
};

export default Hero;
