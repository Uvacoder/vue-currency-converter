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
      RateService.calculateRateToEuro(brazilianRealRateMock["BRL"], 10)
    ).toEqual(1.6666666666666667);
  });

  it("should calculate the rate from 10 usd to eur", () => {
    expect(
      RateService.calculateRateToEuro(usDollarRateMock["USD"], 10)
    ).toEqual(8.547008547008547);
  });

  it("should calculate the rate from 10 kwd to eur", () => {
    expect(
      RateService.calculateRateToEuro(kuwaitiDinarRateMock["KWD"], 10)
    ).toEqual(30.3030303030303);
  });

  it("should calculate the rate from 10 eur to brl", () => {
    expect(
      RateService.calculateRateFromEuro(brazilianRealRateMock["BRL"], 10)
    ).toEqual(60);
  });

  it("should calculate the rate from 10 eur to usd", () => {
    expect(
      RateService.calculateRateFromEuro(usDollarRateMock["USD"], 10)
    ).toEqual(11.7);
  });

  it("should calculate the rate from 10 eur to kwd", () => {
    expect(
      RateService.calculateRateFromEuro(kuwaitiDinarRateMock["KWD"], 10)
    ).toEqual(3.3000000000000003);
  });

  it("should convert 10 brl to usd", () => {
    expect(
      RateService.convert(
        latestMock,
        brazilianRealSymbolDetailMock.code,
        usDollarSymbolDetailMock.code,
        10
      )
    ).toEqual(1.95);
  });

  it("should convert 10 brl to eur", () => {
    expect(
      RateService.convert(
        latestMock,
        brazilianRealSymbolDetailMock.code,
        euroSymbolDetailMock.code,
        10
      )
    ).toEqual(1.67);
  });

  it("should convert 10 kwd to eur", () => {
    expect(
      RateService.convert(
        latestMock,
        kuwaitiDinarSymbolDetailMock.code,
        usDollarSymbolDetailMock.code,
        10
      )
    ).toEqual(35.45);
  });

  it("should convert 10 eur to brl", () => {
    expect(
      RateService.convert(
        latestMock,
        euroSymbolDetailMock.code,
        brazilianRealSymbolDetailMock.code,
        10
      )
    ).toEqual(60);
  });

  it("should convert 10 eur to kwd", () => {
    expect(
      RateService.convert(
        latestMock,
        euroSymbolDetailMock.code,
        kuwaitiDinarSymbolDetailMock.code,
        10
      )
    ).toEqual(3.3);
  });
});
