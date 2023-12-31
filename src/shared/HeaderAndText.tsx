import { motion } from "framer-motion";
import HText from "./HText";

type Props = {
  header: string;
  text: string;
};

const HeaderAndText = ({ header, text }: Props) => {
  return (
    <motion.div
      className="md:w-3/5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <HText>{header}</HText>

      <p className="mt-5">{text}</p>
    </motion.div>
  );
};

export default HeaderAndText;
