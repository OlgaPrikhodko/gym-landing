import { motion } from "framer-motion";

import { SelectedPage } from "@/shared/types";
import { useSelectedPage } from "@/contexts/SelectedPageContext";
import HText from "@/shared/HText";
import ContactForm from "./ContactForm";
import ContactPageImage from "./ContactPageImage";

const ContactUs: React.FC = () => {
  const { setSelectedPage } = useSelectedPage();

  return (
    <section id="contactus" className="mx-auto w-5/6 pb-32 pt-24">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className=""
      >
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
          <HText>
            <span className="text-primary-500">JOIN NOW</span> To get in shape
          </HText>

          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            eos a iste iure corrupti porro!
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}

        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ContactForm />
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <ContactPageImage />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
