import { motion } from "framer-motion";
import Benefit from "./Benefit";
import { BenefitType, SelectedPage } from "@/shared/types";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  benefits: BenefitType[];
  setSelectedPage: (value: SelectedPage) => void;
};

const BenefitList = ({ benefits, setSelectedPage }: Props) => {
  return (
    <motion.div
      className="mt-5 items-center justify-between gap-8 md:flex"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={container}
    >
      {benefits.map((benefit: BenefitType) => (
        <Benefit
          key={benefit.title}
          benefit={benefit}
          setSelectedPage={setSelectedPage}
        />
      ))}
    </motion.div>
  );
};

export default BenefitList;
