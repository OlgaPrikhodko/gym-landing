import Links from "./Links";
import ActionButton from "@/shared/ActionButton";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const DesktopNav: React.FC<Props> = ({ selectedPage, setSelectedPage }) => {
  const flexBetween = "flex items-center justify-between";

  return (
    <>
      <nav className={`${flexBetween} w-full`}>
        <div className={`${flexBetween} gap-8 text-sm`}>
          <Links
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        </div>

        <div className={`${flexBetween} gap-8`}>
          <p>Sign In</p>
          <ActionButton setSelectedPage={setSelectedPage}>
            Become a Member
          </ActionButton>
        </div>
      </nav>
    </>
  );
};

export default DesktopNav;
