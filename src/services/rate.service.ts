import { Latest } from "@/domain";
export class RateService {
  static calculateRateToEuro(rate: number, amount: number): number {
    return amount / rate;
  }

  static calculateRateFromEuro(rate: number, amount: number): number {
    return amount * rate;
  }

  static convert(
    currencyRates: Latest,
    originSymbol: string,
    destinationSymbol: string,
    amount: number
  ): number {
    const originRate = currencyRates.rates[originSymbol];
    const destinationRate = currencyRates.rates[destinationSymbol];

    if (originSymbol !== currencyRates.base) {
      const amountConvertedToBase = RateService.calculateRateToEuro(
        originRate,
        amount
      );

      return RateService.convert(
        currencyRates,
        currencyRates.base,
        destinationSymbol,
        amountConvertedToBase
      );
    } else {
      const convertedValue = RateService.calculateRateFromEuro(
        destinationRate,
        amount
      );
      return Math.round(convertedValue * 100) / 100;
    }
  }
}
