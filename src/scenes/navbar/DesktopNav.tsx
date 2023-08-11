import Links from "./Links";
import ActionButton from "@/shared/ActionButton";

const DesktopNav: React.FC = () => {
  const flexBetween = "flex items-center justify-between";

  return (
    <>
      <nav className={`${flexBetween} w-full`}>
        <div className={`${flexBetween} gap-8 text-sm`}>
          <Links />
        </div>

        <div className={`${flexBetween} gap-8`}>
          <p>Sign In</p>
          <ActionButton>Become a Member</ActionButton>
        </div>
      </nav>
    </>
  );
};

export default DesktopNav;
