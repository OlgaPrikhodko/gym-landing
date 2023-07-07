import ActionButton from "@/shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const HeroActions: React.FC<Props> = ({ setSelectedPage }) => {
  return (
    <>
      <div className="mt-8 flex items-center gap-8">
        <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>

        <AnchorLink
          className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
        >
          <p>Learn More</p>
        </AnchorLink>
      </div>
    </>
  );
};

export default HeroActions;
