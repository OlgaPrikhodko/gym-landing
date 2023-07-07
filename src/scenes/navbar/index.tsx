import { useState } from "react";

import { Bars3Icon } from "@heroicons/react/24/solid";

import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import MobileMenuModal from "./MobileMenuModal";
import DesktopNav from "./DesktopNav";
import NavbarLogo from "./NavbarLogo";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar: React.FC<Props> = ({
  isTopOfPage,
  selectedPage,
  setSelectedPage,
}) => {
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const handleMenuButtonClicked = () => {
    setIsMenuToggled(!isMenuToggled);
  };

  return (
    <>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <NavbarLogo />

            {/* DESKTOP VERSION */}
            {isAboveMediumScreens ? (
              <DesktopNav
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            ) : (
              // MOBILE VERSION
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={handleMenuButtonClicked}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      <MobileMenuModal
        handleMenuButtonClicked={handleMenuButtonClicked}
        isMenuToggled={isMenuToggled}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </>
  );
};

export default Navbar;
