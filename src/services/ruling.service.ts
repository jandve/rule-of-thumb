import { RULING_MOCK } from "./ruling.mock";
import { PreviousRulingResponse } from "./types";

const getPassRulings = (): Promise<PreviousRulingResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(RULING_MOCK);
    }, 1000);
  });
};

export { getPassRulings };
