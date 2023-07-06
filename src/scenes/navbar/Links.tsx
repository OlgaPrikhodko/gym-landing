import { SelectedPage } from "@/shared/types";
import Link from "./Link";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Links: React.FC<Props> = ({ selectedPage, setSelectedPage }) => {
  const pageNames = ["Home", "Benefits", "Our classes", "Contact Us"];

  return (
    <>
      {pageNames.map((pageName, index) => (
        <Link
          key={index}
          page={pageName}
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
        />
      ))}
    </>
  );
};

export default Links;
