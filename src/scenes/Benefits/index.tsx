import { SelectedPage, BenefitType } from "@/shared/types";

import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";

import { motion } from "framer-motion";

import BenefitList from "./BenefitList";
import BenefitsDescription from "./BenefitsDescription";
import HeaderAndText from "@/shared/HeaderAndText";
import { useSelectedPage } from "@/contexts/SelectedPageContext";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

const Benefits: React.FC = () => {
  const { setSelectedPage } = useSelectedPage();

  const header = "More than just a gym.";
  const text = `We provide world class fitness equipment, trainers and classes to get
  you to your ultimate fitness goals with ease. We provide true care into
  each and every member.`;

  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        <HeaderAndText header={header} text={text} />

        <BenefitList benefits={benefits} setSelectedPage={setSelectedPage} />

        <BenefitsDescription />
      </motion.div>
    </section>
  );
};

export default Benefits;
