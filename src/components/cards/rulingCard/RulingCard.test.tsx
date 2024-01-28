import {
  getByTestId,
  queryByTestId,
  render,
  screen,
} from "@testing-library/react";
import RulingCard from "./RulingCard";
import {
  ContextModel,
  PreviousRulerProviderContext,
  ViewOptions,
} from "../../previousRuler/PreviousRulerProvider";
import { Ruler } from "../../../services/types";
import { DeviceTypeEnum } from "../../../constants/appConstants";
import { CHARACTERS_MOCK } from "../../previousRuler/constants.mock";
import { customRenderWithPreviousProvider } from "../../../tests/CustomRenderWithPreviousProvider";

const testVoteRuler: Ruler = {
  id: 999,
  name: "Testing Ruler Name",
  picture: "picture.jpg",
  description: "testing description",
  category: "engineering",
  lastUpdated: "2021-02-26T23:44:50.326Z",
  votes: {
    positive: 10,
    negative: 5,
  },
};

const providerProps: ContextModel = {
  previousRulers: [],
  view: ViewOptions.list,
  onSetView: () => null,
  postAVote: (ruler: Ruler) => null,
  deviceType: DeviceTypeEnum.mobil,
  isBigCard: false,
};

describe("RulingCard component", () => {
  test("RulingCard renders as a list in desktop", async () => {
    customRenderWithPreviousProvider(
      <RulingCard ruler={testVoteRuler} />,
      { ...providerProps },
      {}
    );

    await screen.findByText(testVoteRuler.name);
    const GradientMask = screen.getByTestId("gradient-mask");
    expect(GradientMask).toBeInTheDocument();
  });

  test("RulingCard renders as a grid in desktop", async () => {
    customRenderWithPreviousProvider(
      <RulingCard ruler={testVoteRuler} />,
      { ...providerProps, view: ViewOptions.grid, isBigCard: true },
      {}
    );

    await screen.findByText(testVoteRuler.name);
    const GradientMask = screen.queryByTestId("gradient-mask");
    expect(GradientMask).not.toBeInTheDocument();
  });
});
