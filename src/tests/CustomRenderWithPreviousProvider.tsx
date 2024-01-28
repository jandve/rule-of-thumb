import {
  ContextModel,
  PreviousRulerProviderContext,
} from "../components/previousRuler/PreviousRulerProvider";
import { render } from "@testing-library/react";

export const customRenderWithPreviousProvider = (
  component: JSX.Element,
  providerProps: ContextModel,
  { ...renderOptions }
) => {
  return render(
    <PreviousRulerProviderContext.Provider value={providerProps}>
      {component}
    </PreviousRulerProviderContext.Provider>,
    renderOptions
  );
};
