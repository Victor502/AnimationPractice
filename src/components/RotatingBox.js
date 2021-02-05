import React, {useRef} from 'react';
import {View, StyleSheet, Animated, Text} from 'react-native';
import ShadowButton from './ShadowButton';

export default function RotatingBox() {
  const rotatingBoxRef = useRef(new Animated.Value(0)).current;

  // () => rotatingBoxRef.setValue(0)
  const rotatingBoxAnimation = () => {
    Animated.timing(rotatingBoxRef, {
      useNativeDriver: false,
      toValue: 1,
      duration: 500,
    }).start(() => rotatingBoxRef.setValue(0));
  };

  const interpolateBox = rotatingBoxRef.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const rotatingBoxStyle = {
    transform: [{rotate: interpolateBox}],
  };

  return (
    <View>
      <Animated.View style={[styles.container, rotatingBoxStyle]}>
        <Text
          style={[styles.container, {textAlign: 'center'}]}
          onPress={() => rotatingBoxAnimation()}>
          PressMe
        </Text>
      </Animated.View>
      <ShadowButton onPress={() => rotatingBoxAnimation()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 90,
    width: 90,
    marginHorizontal: 15,
    backgroundColor: 'red',
  },
});
