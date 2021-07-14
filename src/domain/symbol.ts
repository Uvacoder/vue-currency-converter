import { KeyValue } from "./key-values";

export interface SymbolDetail {
  code: string;
  description: string;
}

export type SymbolType = KeyValue<SymbolDetail>;

export interface Symbols {
  success: boolean;
  symbols: SymbolType;
}
