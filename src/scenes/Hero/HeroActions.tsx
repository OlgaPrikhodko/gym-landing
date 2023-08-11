import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import LearnMoreLink from "@/shared/LearnMoreLink";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const HeroActions: React.FC<Props> = ({ setSelectedPage }) => {
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

        <LearnMoreLink setSelectedPage={setSelectedPage} />
      </motion.div>
    </>
  );
};

export default HeroActions;
