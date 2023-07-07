import { SelectedPage } from "@/shared/types";

import HeroTextBlock from "./HeroTextBlock";
import HeroSponsors from "./HeroSponsors";
import HeroActions from "./HeroActions";
import HeroImage from "./HeroImage";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Hero: React.FC<Props> = ({ setSelectedPage }) => {
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <div className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6">
        <div className="z-10 mt-32 md:basis-3/5">
          <HeroTextBlock />

          <HeroActions setSelectedPage={setSelectedPage} />
        </div>

        <HeroImage />
      </div>

      <HeroSponsors />
    </section>
  );
};

export default Hero;
