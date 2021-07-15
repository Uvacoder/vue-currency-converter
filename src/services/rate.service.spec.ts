import {
  brazilianRealRateMock,
  brazilianRealSymbolDetailMock,
  euroSymbolDetailMock,
  kuwaitiDinarRateMock,
  kuwaitiDinarSymbolDetailMock,
  latestMock,
  usDollarRateMock,
  usDollarSymbolDetailMock,
} from "@/domain";
import { RateService } from "./rate.service";

describe("utils.service", () => {
  it("should calculate the rate from 10 brl to eur", () => {
    expect(
      RateService.calculateRateConversion(brazilianRealRateMock["BRL"], 10)
    ).toEqual(1.66);
  });

  it("should calculate the rate from 10 usd to eur", () => {
    expect(
      RateService.calculateRateConversion(usDollarRateMock["USD"], 10)
    ).toEqual(8.54);
  });

  it("should calculate the rate from 10 kwd to eur", () => {
    expect(
      RateService.calculateRateConversion(kuwaitiDinarRateMock["KWD"], 10)
    ).toEqual(30.3);
  });

  it("should convert 10 brl to usd", () => {
    expect(
      RateService.convert(
        latestMock,
        brazilianRealSymbolDetailMock,
        usDollarSymbolDetailMock,
        10
      )
    ).toEqual(1.94);
  });

  it("should convert 10 brl to eur", () => {
    expect(
      RateService.convert(
        latestMock,
        brazilianRealSymbolDetailMock,
        euroSymbolDetailMock,
        10
      )
    ).toEqual(1.66);
  });

  it("should convert 10 kwd to eur", () => {
    expect(
      RateService.convert(
        latestMock,
        kuwaitiDinarSymbolDetailMock,
        usDollarSymbolDetailMock,
        10
      )
    ).toEqual(30.3);
  });

  it("should convert 10 eur to brl", () => {
    expect(
      RateService.convert(
        latestMock,
        euroSymbolDetailMock,
        brazilianRealSymbolDetailMock,
        10
      )
    ).toEqual(60);
  });

  it("should convert 10 eur to kwd", () => {
    expect(
      RateService.convert(
        latestMock,
        euroSymbolDetailMock,
        brazilianRealSymbolDetailMock,
        10
      )
    ).toEqual(3.3);
  });
});
