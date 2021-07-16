import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("should create", () => {
    const wrapper = shallowMount(App, {
      stubs: ["router-view"],
    });
    expect(wrapper).toBeTruthy();
  });
});
