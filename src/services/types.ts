type PreviousRulingResponse = Ruler[];

interface Ruler {
  id: number;
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: Votes;
}

interface Votes {
  positive: number;
  negative: number;
}

export type { PreviousRulingResponse, Ruler, Votes };
