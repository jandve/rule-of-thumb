import { createContext, ReactNode, useEffect, useState } from "react";
import { Ruler } from "../../services/types";
import useScreen from "../../hooks/useScreen";
import { DeviceTypeEnum } from "../../constants/appConstants";
import { getPassRulings, postARulingVote } from "../../services/ruling.service";

enum ViewOptions {
  list = "List",
  grid = "Grid",
}

type ContextModel = {
  previousRulers: Ruler[];
  view: ViewOptions;
  onSetView: (view: ViewOptions) => void;
  postAVote: (ruler: Ruler) => void;
  deviceType: DeviceTypeEnum;
  isBigCard: boolean;
};
const PreviousRulerProviderContext = createContext<ContextModel>({
  previousRulers: [],
  view: ViewOptions.list,
  onSetView: () => null,
  postAVote: () => null,
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
  }, [deviceType, view]);

  const getPreviousRulers = async () => {
    const data = await getPassRulings();
    if (data) setPreviousRulers(data);
  };

  const postAVote = (ruler: Ruler) => {
    postARulingVote(ruler.id, ruler.votes).then(() => getPreviousRulers());
  };

  const onSetView = (view: ViewOptions) => {
    setView(view);
    if (view === ViewOptions.grid) setIsBigCard(true);
    else setIsBigCard(false);
  };

  return (
    <PreviousRulerProviderContext.Provider
      value={{
        previousRulers,
        view,
        onSetView,
        deviceType,
        isBigCard,
        postAVote,
      }}
    >
      {children}
    </PreviousRulerProviderContext.Provider>
  );
};

export { PreviousRulerProvider, PreviousRulerProviderContext, ViewOptions };

export type { ContextModel };
