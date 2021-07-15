import { Latest, SymbolDetail } from "@/domain";

/* eslint-disable @typescript-eslint/no-unused-vars */
export class RateService {
  static calculateRateConversion(rate: number, amount: number): number {
    return 0;
  }

  static convert(
    currencyRates: Latest,
    originSymbol: SymbolDetail,
    destinationSymbol: SymbolDetail,
    amount: number
  ): number {
    return 0;
  }
}
