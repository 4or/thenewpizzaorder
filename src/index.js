import React from 'react';
import ReactDOM from 'react-dom';
import OrderFoodApp from './App/Component/OrderFoodApp/index';

//  ---------------  Apollo Server 
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { HttpLink } from "apollo-link-http"; 
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from "apollo-cache-inmemory";
//  ------- End
import 'bootstrap/dist/css/bootstrap.min.css';

 
const localGraphQL = new HttpLink({
    uri:"http://localhost:4000/graphql" ,
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
  
const App = (
    <ApolloProvider client={client}> 
        <OrderFoodApp />
    </ApolloProvider>
);


ReactDOM.render(App, document.getElementById('root'));