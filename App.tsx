/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { BoxObjectModel } from './src/screens/BoxObjectModel';
import CounterScreen from './src/screens/Counter';
import PostionScreen from './src/screens/Position';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <BoxObjectModel /> */}
      <PostionScreen />
    </SafeAreaView>
  );
};

export default App;
