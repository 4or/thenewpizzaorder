import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

//  ---------------  Apollo Client 
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http"; 
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from "apollo-cache-inmemory";
//  ------- End
import 'bootstrap/dist/css/bootstrap.min.css';

 

const localGraphQL = new HttpLink({
    // your graphql endpoint 
    uri:"http://localhost:4000/graohql" ,
    credentials: "same-origin"
});
  
const authLink = setContext((_, { headers }) => { 
    return {
        headers: {
        ...headers, 
        }
    }
}); 
  
const client = new ApolloClient({ 
    link: authLink.concat(localGraphQL),
    cache: new InMemoryCache(),
});
  
const AppProvider = (
    <ApolloProvider client={client}> 
        <App />
    </ApolloProvider>
);


ReactDOM.render(AppProvider, document.getElementById('root'));
