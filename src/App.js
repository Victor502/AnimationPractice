import React, {useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  StyleSheet,
  Animated,
} from 'react-native';
import ShadowButton from './components/ShadowButton.js';
import InsetButton from './components/InsetButton';
import Opacity from './components/Opacity.js';
import MovingBox from './components/MovingBox.js';
import ScalingBox from './components/ScalingBox';
import RotatingBox from './components/RotatingBox';

const App: () => React$Node = () => {
  const scrollViewAnimationRef = useRef(new Animated.Value(0)).current;

  const backgroundInterpolate = scrollViewAnimationRef.interpolate({
    inputRange: [0, 3000],
    outputRange: ['rgb(255,99,71', 'rgb(99,71,255'],
  });

  const backgroundStyle = {backgroundColor: backgroundInterpolate};
  return (
    <View style={{flex: 1}}>
      <ScrollView
        // style={{backgroundColor: '#f4f4f4', flex: 1}}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: scrollViewAnimationRef,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}>
        <Animated.View style={[styles.content, backgroundStyle]}>
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
        </Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainers: {
    margin: 10,
  },
  content: {
    height: 3000,
  },
});

export default App;
