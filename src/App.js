import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  StyleSheet,
} from 'react-native';
import ShadowButton from './components/ShadowButton.js';
import InsetButton from './components/InsetButton';
import Opacity from './components/Opacity.js';
import MovingBox from './components/MovingBox.js';

const App: () => React$Node = () => {
  return (
    <View style={{backgroundColor: '#f4f4f4'}}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView>
          <View style={styles.viewContainers}>
            <ShadowButton />
          </View>
          <View style={styles.viewContainers}>
            <InsetButton />
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
