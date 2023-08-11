import LearnMoreLink from "@/shared/LearnMoreLink";
import { BenefitType } from "@/shared/types";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  benefit: BenefitType;
};

const Benefit: React.FC<Props> = ({ benefit }) => {
  const { icon, title, description } = benefit;

  return (
    <motion.div
      className="mt-5 rounded-md border-[1px] border-gray-100 px-5 py-16 text-center drop-shadow"
      variants={childVariant}
    >
      <div className="mb-4 flex justify-center">
        <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
          {icon}
        </div>
      </div>

      <h4 className="font-bold">{title}</h4>
      <p className="m-3">{description}</p>
      <LearnMoreLink />
    </motion.div>
  );
};

export default Benefit;
