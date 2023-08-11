import { motion } from "framer-motion";
import { OurClassType, SelectedPage } from "@/shared/types";

import HText from "@/shared/HText";
import OurClass from "./OurClass";
import { useSelectedPage } from "@/contexts/SelectedPageContext";

import ourClasses from "./ourClassData";

function OurClasses() {
  const { setSelectedPage } = useSelectedPage();
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <HText>Our Classes</HText>
            <p className="py-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem ipsam possimus commodi, voluptates repudiandae
              dolorum molestiae saepe dignissimos porro neque facilis optio hic
              aliquid beatae.
            </p>
          </div>
        </motion.div>

        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {ourClasses.map((item: OurClassType, index: number) => (
              <OurClass
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default OurClasses;
