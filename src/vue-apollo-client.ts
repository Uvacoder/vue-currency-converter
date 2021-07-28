import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import Vue from "vue";
import VueApollo from "vue-apollo";

Vue.use(VueApollo);

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "https://swop.cx/graphql?api-key=a258d0e1d7cb80d51ff60f38af57270063584a7779cda522607842a864f826bc",
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

export const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});
