export interface SymbolDetailGraphql {
  code: string;
  name: string;
}

export interface SymbolGraphqlResponse {
  currencies: SymbolDetailGraphql[];
}
