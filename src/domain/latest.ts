import { KeyValue } from "./key-values";

export type RateType = KeyValue<number>;

export interface Latest {
  success: boolean;
  base: string;
  date: string;
  rates: RateType;
}
