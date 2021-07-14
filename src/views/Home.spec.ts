import { shallowMount } from "@vue/test-utils";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import Home from "@/views/Home.vue";
import { LATEST_API_URL, SYMBOLS_API_URL } from "@/data";
import { Latest, Symbols } from "@/domain";

const sucessSymbolsResponse: Symbols = {
  success: true,
  symbols: {
    EUR: {
      description: "Euro",
      code: "EUR",
    },
    KWD: {
      description: "Kuwaiti Dinar",
      code: "KWD",
    },
    BRL: {
      description: "Brazilian Real",
      code: "BRL",
    },
    USD: {
      description: "United States Dollar",
      code: "USD",
    },
  },
};

const sucessLatestResponse: Latest = {
  success: true,
  base: "EUR",
  date: "2021-07-13",
  rates: { KWD: 0.356935, BRL: 6.140667, USD: 1.186739 },
};

describe("Home.vue", () => {
  beforeEach(() => {
    const mock = new MockAdapter(axios);
    mock.onGet(SYMBOLS_API_URL).reply(200, sucessSymbolsResponse);
    mock.onGet(LATEST_API_URL).reply(200, sucessLatestResponse);
  });

  it("should create home", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper).toBeTruthy();
  });
});
