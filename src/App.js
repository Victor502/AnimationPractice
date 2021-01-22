import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';
import Button from './components/Button.js';
import Opacity from './components/Opacity.js';
import MovingBox from './components/MovingBox.js';

const App: () => React$Node = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.viewContainers}>
            <Button />
          </View>
          <View style={styles.viewContainers}>
            <Opacity />
          </View>
          <View style={styles.viewContainers}>
            <MovingBox />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainers: {
    margin: 25,
  },
});

export default App;
