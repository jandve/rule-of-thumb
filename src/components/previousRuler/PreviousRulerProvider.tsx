import { createContext, ReactNode, useEffect, useState } from "react";
import { RULING_MOCK } from "../../services/ruling.mock";
import { Ruler } from "../../services/types";
import useScreen from "../../hooks/useScreen";
import { DeviceTypeEnum } from "../../constants/appConstants";

enum ViewOptions {
  list = "List",
  grid = "Grid",
}

type ContextModel = {
  previousRulers: Ruler[];
  view: ViewOptions;
  setView: (view: ViewOptions) => void;
  deviceType: DeviceTypeEnum;
  isBigCard: boolean;
};
const PreviousRulerProviderContext = createContext<ContextModel>({
  previousRulers: [],
  view: ViewOptions.list,
  setView: () => null,
  deviceType: DeviceTypeEnum.desktop,
  isBigCard: false,
});

const PreviousRulerProvider = ({ children }: { children: ReactNode }) => {
  const [previousRulers, setPreviousRulers] = useState<Ruler[]>([]);
  const [view, setView] = useState<ViewOptions>(ViewOptions.list);
  const [isBigCard, setIsBigCard] = useState<boolean>(false);
  const { deviceType } = useScreen();

  useEffect(() => {
    getPreviousRulers();
  }, []);

  useEffect(() => {
    setIsBigCard(
      (deviceType !== DeviceTypeEnum.mobil && view === ViewOptions.grid) ||
        deviceType === DeviceTypeEnum.mobil
    );
  }, [deviceType]);

  const getPreviousRulers = () => {
    if (RULING_MOCK.data) {
      setPreviousRulers(RULING_MOCK.data);
    }
  };

  return (
    <PreviousRulerProviderContext.Provider
      value={{
        previousRulers,
        view,
        setView,
        deviceType,
        isBigCard,
      }}
    >
      {children}
    </PreviousRulerProviderContext.Provider>
  );
};

export { PreviousRulerProvider, PreviousRulerProviderContext, ViewOptions };
