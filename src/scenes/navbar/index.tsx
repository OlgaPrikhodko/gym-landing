import { useState } from "react";

import useMediaQuery from "@/hooks/useMediaQuery";
import MobileMenuModal from "./MobileMenuModal";
import DesktopNav from "./DesktopNav";
import NavbarLogo from "./NavbarLogo";
import MenuNavButton from "./MenuNavButton";

type Props = {
  isTopOfPage: boolean;
};

const Navbar: React.FC<Props> = ({ isTopOfPage }) => {
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
              <DesktopNav />
            ) : (
              // MOBILE VERSION
              <MenuNavButton onClick={handleMenuButtonClicked} />
            )}
          </div>
        </div>
      </div>

      <MobileMenuModal
        handleMenuButtonClicked={handleMenuButtonClicked}
        isMenuToggled={isMenuToggled}
      />
    </>
  );
};

export default Navbar;
