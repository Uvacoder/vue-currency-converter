export interface LatestGraphql {
  baseCurrency: string;
  quoteCurrency: string;
  quote: number;
  date: string;
}

export interface LatestGraphqlResult {
  latest: LatestGraphql[];
}
