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
import ScalingBox from './components/ScalingBox';
import RotatingBox from './components/RotatingBox';

const App: () => React$Node = () => {
  return (
    <ScrollView style={{backgroundColor: '#f4f4f4', flex: 1}}>
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
          <View
            style={[
              styles.viewContainers,
              {flexDirection: 'row', justifyContent: 'space-between'},
            ]}>
            <MovingBox />
            <ScalingBox />
            <RotatingBox />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewContainers: {
    margin: 10,
  },
});

export default App;
