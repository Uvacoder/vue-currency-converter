import { Latest, RateType } from "./latest";

const euroRateMock: RateType = {
  EUR: 1,
};

const kuwaitiDinarRateMock: RateType = {
  KWD: 0.33,
};

const brazilianRealRateMock: RateType = {
  BRL: 6,
};

const usDollarRateMock: RateType = {
  USD: 1.17,
};

const latestMock: Latest = {
  success: true,
  base: "EUR",
  date: "",
  rates: {
    ...euroRateMock,
    ...kuwaitiDinarRateMock,
    ...brazilianRealRateMock,
    ...usDollarRateMock,
  },
};

export {
  euroRateMock,
  kuwaitiDinarRateMock,
  brazilianRealRateMock,
  usDollarRateMock,
  latestMock,
};
