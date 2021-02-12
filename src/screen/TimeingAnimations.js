import React, {useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import ShadowButton from '../components/ShadowButton.js';
import InsetButton from '../components/InsetButton';
import Opacity from '../components/Opacity.js';
import MovingBox from '../components/MovingBox.js';
import ScalingBox from '../components/ScalingBox';
import RotatingBox from '../components/RotatingBox';

const TimingAnimations = (props) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
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
      <View style={styles.navigationContainer}>
        <Text onPress={() => props.navigation.navigate('Home')}>Home</Text>
        <Text onPress={() => props.navigation.navigate('Spring')}>Spring</Text>
      </View>
      <SafeAreaView />
    </View>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    marginVertical: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewContainers: {
    margin: 10,
  },
});

export default TimingAnimations;
