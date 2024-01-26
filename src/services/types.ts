interface PreviousRulingResponse {
  data: Ruler[]
}

interface Ruler {
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: {
    positive: number;
    negative: number;
  }
}

export type { PreviousRulingResponse }
