import { shallowMount } from "@vue/test-utils";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import Home from "@/views/Home.vue";
import { ExchangeRateHostAPI } from "@/data";
import { latestMock, sucessSymbolsResponseMock } from "@/domain";

describe("Home.vue", () => {
  beforeEach(() => {
    const mock = new MockAdapter(axios);
    mock
      .onGet(ExchangeRateHostAPI.SYMBOLS_API_URL)
      .reply(200, sucessSymbolsResponseMock);
    mock.onGet(ExchangeRateHostAPI.LATEST_API_URL).reply(200, latestMock);
  });

  it("should create home", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper).toBeTruthy();
  });
});
