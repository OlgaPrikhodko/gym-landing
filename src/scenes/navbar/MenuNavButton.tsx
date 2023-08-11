import { Bars3Icon } from "@heroicons/react/24/solid";

interface MenuNavButtonProps {
  onClick: () => void;
}

const MenuNavButton: React.FC<MenuNavButtonProps> = ({ onClick }) => {
  return (
    <button className="rounded-full bg-secondary-500 p-2" onClick={onClick}>
      <Bars3Icon className="h-6 w-6 text-white" />
    </button>
  );
};

export default MenuNavButton;
