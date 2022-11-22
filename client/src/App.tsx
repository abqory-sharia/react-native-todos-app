import {StatusBar} from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import Navigation from './navs';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://10.0.2.2:1337/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <StatusBar />
      <Navigation />
    </ApolloProvider>
  );
};

export default App;
