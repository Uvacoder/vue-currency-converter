import { Latest, Symbols } from "@/domain";
import axios, { AxiosResponse } from "axios";

export class ExchangeRateHostAPI {
  static API = "https://api.exchangerate.host";

  static SYMBOLS_API_URL = `${ExchangeRateHostAPI.API}/symbols`;
  static getSymbols = (): Promise<AxiosResponse<Symbols>> => {
    return axios.get<Symbols>(ExchangeRateHostAPI.SYMBOLS_API_URL);
  };

  static LATEST_API_URL = `${ExchangeRateHostAPI.API}/latest`;
  static getLatest = (): Promise<AxiosResponse<Latest>> => {
    return axios.get<Latest>(ExchangeRateHostAPI.LATEST_API_URL);
  };
}
