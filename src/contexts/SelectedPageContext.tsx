import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { SelectedPage } from "@/shared/types";

type SelectedPageContextType = {
  selectedPage: SelectedPage;
  setSelectedPage: Dispatch<SetStateAction<SelectedPage>>;
};

const SelectedPageContext = createContext<SelectedPageContextType>(
  {} as SelectedPageContextType
);

type SelectedPageProviderProps = { children: React.ReactNode };

const SelectedPageProvider: React.FC<SelectedPageProviderProps> = ({
  children,
}) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <SelectedPageContext.Provider
      value={{
        selectedPage,
        setSelectedPage,
      }}
    >
      {children}
    </SelectedPageContext.Provider>
  );
};

const useSelectedPage = () => useContext(SelectedPageContext);

export { useSelectedPage };

export default SelectedPageProvider;
