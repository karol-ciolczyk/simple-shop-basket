import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://reasonapps-gql-api.vercel.app/api/graphql",
  cache: new InMemoryCache(),
});

// const GET_PRODUCTS = gql`
//   query Products {
//     products {
//       id
//       name
//       slug
//       image
//       price
//     }
//   }
// `;

// client
//   .query({
//     query: gql`
//       query Products {
//         products {
//           id
//           name
//           slug
//           image
//           price
//           categories {
//             name
//           }
//         }
//       }
//     `,
//   })
//   .then((result) => console.log(result));

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
