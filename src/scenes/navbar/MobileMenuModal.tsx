import useMediaQuery from "@/hooks/useMediaQuery";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Links from "./Links";

type Props = {
  handleMenuButtonClicked: () => void;
  isMenuToggled: boolean;
};

const MobileMenuModal: React.FC<Props> = ({
  handleMenuButtonClicked,
  isMenuToggled,
}) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <>
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed bottom-0 right-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={handleMenuButtonClicked}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Links />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenuModal;
