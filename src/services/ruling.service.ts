import { RULING_MOCK } from "./ruling.mock";
import { PreviousRulingResponse } from "./types";

export class RulingService {
  static getPassRulings(): Promise<PreviousRulingResponse> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(RULING_MOCK);
      }, 1000);
    });
  }
}