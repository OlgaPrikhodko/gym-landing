import { motion } from "framer-motion";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import HText from "@/shared/HText";
import ActionButton from "@/shared/ActionButton";

const BenefitsDescription = () => {
  return (
    <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
      <img
        className="mx-auto"
        alt="benefits-page-graphic"
        src={BenefitsPageGraphic}
      />

      <div>
        <div className="relative">
          <div className="before:absolute before:-left-20 before:-top-20 before:z-[1] before:content-abstractwaves">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>
                Millions of happy members getting{" "}
                <span className="text-primary-500">fit</span>.
              </HText>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor
            distinctio impedit voluptatibus dolores aliquid similique odit
            veniam ipsam nisi praesentium. Illum earum nisi alias quisquam,
            impedit officiis praesentium repellendus dolore.
          </p>
          <p className="mb-5">
            Sit amet consectetur adipisicing elit. Vel est laborum unde amet
            veniam cumque? Nihil sit sed ipsa rem. Illum earum nisi alias
            quisquam, impedit officiis praesentium repellendus dolore.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
            <ActionButton>Join Now</ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsDescription;
