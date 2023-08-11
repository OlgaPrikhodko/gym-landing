import ActionButton from "@/shared/ActionButton";

import { motion } from "framer-motion";
import LearnMoreLink from "@/shared/LearnMoreLink";

const HeroActions: React.FC = () => {
  return (
    <>
      <motion.div
        className="mt-8 flex items-center gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <ActionButton>Join Now</ActionButton>

        <LearnMoreLink />
      </motion.div>
    </>
  );
};

export default HeroActions;
