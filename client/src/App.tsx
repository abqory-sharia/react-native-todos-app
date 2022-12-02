import {ApolloProvider} from '@apollo/client';
import React, {type PropsWithChildren} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Navigation from './navs';

const App = () => {
  return (
    // <ApolloProvider>
    <SafeAreaView style={{flex: 1}}>
      <StatusBar hidden />
      <Navigation />
    </SafeAreaView>
    // </ApolloProvider>
  );
};
export default App;
