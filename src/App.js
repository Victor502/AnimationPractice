import React from 'react';
import {SafeAreaView, ScrollView, View, StatusBar} from 'react-native';
import Button from './components/Button.js';

const App: () => React$Node = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <Button />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default App;
