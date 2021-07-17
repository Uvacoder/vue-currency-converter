import { shallowMount } from "@vue/test-utils";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";
import Home from "@/views/Home.vue";
import { LATEST_API_URL, SYMBOLS_API_URL } from "@/data";
import { latestMock, sucessSymbolsResponseMock } from "@/domain";

describe("Home.vue", () => {
  beforeEach(() => {
    const mock = new MockAdapter(axios);
    mock.onGet(SYMBOLS_API_URL).reply(200, sucessSymbolsResponseMock);
    mock.onGet(LATEST_API_URL).reply(200, latestMock);
  });

  it("should create home", () => {
    const wrapper = shallowMount(Home);
    expect(wrapper).toBeTruthy();
  });
});
