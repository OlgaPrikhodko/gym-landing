import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";
import { useSelectedPage } from "@/contexts/SelectedPageContext";

function LearnMoreLink() {
  const { setSelectedPage } = useSelectedPage();

  return (
    <AnchorLink
      className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      <p>Learn More</p>
    </AnchorLink>
  );
}

export default LearnMoreLink;
