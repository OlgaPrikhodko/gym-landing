import { motion } from "framer-motion";
import { BenefitType } from "@/shared/types";
import Benefit from "./Benefit";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  benefits: BenefitType[];
};

const BenefitList = ({ benefits }: Props) => {
  return (
    <motion.div
      className="mt-5 items-center justify-between gap-8 md:flex"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={container}
    >
      {benefits.map((benefit: BenefitType) => (
        <Benefit key={benefit.title} benefit={benefit} />
      ))}
    </motion.div>
  );
};

export default BenefitList;
