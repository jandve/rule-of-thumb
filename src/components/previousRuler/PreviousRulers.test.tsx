import { screen } from "@testing-library/react";
import PreviousRulers from "./PreviousRulers";
import { ContextModel, ViewOptions } from "./PreviousRulerProvider";
import { DeviceTypeEnum } from "../../constants/appConstants";
import { Ruler } from "../../services/types";
import { customRenderWithPreviousProvider } from "../../tests/CustomRenderWithPreviousProvider";
import { CHARACTERS_MOCK } from "./constants.mock";

const providerProps: ContextModel = {
  previousRulers: [],
  view: ViewOptions.list,
  onSetView: () => null,
  postAVote: (ruler: Ruler) => null,
  deviceType: DeviceTypeEnum.mobil,
  isBigCard: false,
};

describe("PreviousRuler component", () => {
  test("PreviousRulers renders as a list display all characters ", async () => {
    customRenderWithPreviousProvider(
      <PreviousRulers />,
      { ...providerProps, previousRulers: CHARACTERS_MOCK },
      {}
    );
    const Cards = await screen.findAllByTestId("ruler-card");
    expect(Cards).toHaveLength(CHARACTERS_MOCK.length);
  });

  test("PreviousRulers should not display view options if the view is mobil", async () => {
    customRenderWithPreviousProvider(
      <PreviousRulers />,
      {
        ...providerProps,
        view: ViewOptions.list,
        deviceType: DeviceTypeEnum.mobil,
      },
      {}
    );
    const SelectView = screen.queryByTestId("select-view-component");
    expect(SelectView).not.toBeInTheDocument();
  });
  test("PreviousRulers should display view options if the view is not mobil", async () => {
    customRenderWithPreviousProvider(
      <PreviousRulers />,
      {
        ...providerProps,
        view: ViewOptions.list,
        deviceType: DeviceTypeEnum.tablet,
      },
      {}
    );
    const SelectView = screen.queryByTestId("select-view-component");
    expect(SelectView).toBeInTheDocument();
  });
});
