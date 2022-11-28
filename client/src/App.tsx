import {StatusBar} from 'react-native';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
import Navigation from './navs';
import useStore from './store/store';

// Initialize Apollo Client

const App = () => {
  const {token} = useStore();

  const httpLink = createHttpLink({
    uri: 'http://10.0.2.2:1337/graphql',
  });

  const authLink = setContext((_, {headers}) => {
    return {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : '',
      },
    };
  });
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(httpLink),
  });

  return (
    <ApolloProvider client={client}>
      <StatusBar />
      <Navigation />
    </ApolloProvider>
  );
};

export default App;
