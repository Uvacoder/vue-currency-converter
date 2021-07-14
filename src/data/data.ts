import { Latest, Symbols } from "@/domain";
import axios, { AxiosResponse } from "axios";

export const API = "https://api.exchangerate.host";

export const SYMBOLS_API_URL = `${API}/symbols`;
const getSymbols = (): Promise<AxiosResponse<Symbols>> => {
  return axios.get<Symbols>(SYMBOLS_API_URL);
};

export const LATEST_API_URL = `${API}/latest`;
const getLatest = (): Promise<AxiosResponse<Latest>> => {
  return axios.get<Latest>(LATEST_API_URL);
};

export const data = {
  getSymbols,
  getLatest,
};
