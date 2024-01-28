import { RULING_MOCK } from "./ruling.mock";
import { PreviousRulingResponse, Ruler } from "./types";

const getPassRulings = (): Promise<PreviousRulingResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(RULING_MOCK);
    }, 1000);
  });
};

const postARulingVote = (ruler: Ruler) => {};

export { getPassRulings, postARulingVote };
