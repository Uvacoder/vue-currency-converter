import { SymbolDetail, Symbols, SymbolType } from "./symbol";

const euroSymbolDetailMock: SymbolDetail = {
  description: "Euro",
  code: "EUR",
};
const euroSymbolMock: SymbolType = {
  EUR: euroSymbolDetailMock,
};

const kuwaitiDinarSymbolDetailMock: SymbolDetail = {
  description: "Kuwaiti Dinar",
  code: "KWD",
};
const kuwaitiDinarSymbolMock: SymbolType = {
  KWD: kuwaitiDinarSymbolDetailMock,
};

const brazilianRealSymbolDetailMock: SymbolDetail = {
  description: "Brazilian Real",
  code: "BRL",
};
const brazilianRealSymbolMock: SymbolType = {
  BRL: brazilianRealSymbolDetailMock,
};

const usDollarSymbolDetailMock: SymbolDetail = {
  description: "United States Dollar",
  code: "USD",
};
const usDollarSymbolMock: SymbolType = {
  USD: usDollarSymbolDetailMock,
};

const allSymbolsMock: SymbolType = {
  ...euroSymbolMock,
  ...kuwaitiDinarSymbolMock,
  ...brazilianRealSymbolMock,
  ...usDollarSymbolMock,
};

const sucessSymbolsResponseMock: Symbols = {
  success: true,
  symbols: allSymbolsMock,
};

export {
  euroSymbolDetailMock,
  kuwaitiDinarSymbolDetailMock,
  brazilianRealSymbolDetailMock,
  usDollarSymbolDetailMock,
  euroSymbolMock,
  kuwaitiDinarSymbolMock,
  brazilianRealSymbolMock,
  usDollarSymbolMock,
  allSymbolsMock,
  sucessSymbolsResponseMock,
};
