/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef} from 'react';
import {StyleSheet, Pressable, Animated, Text} from 'react-native';

export default function ShadowButton() {
  const buttonAnimation = useRef(new Animated.Value(1)).current;

  const shadowAnimation = (toValue) => {
    Animated.timing(buttonAnimation, {
      useNativeDriver: false,
      duration: 300,
      toValue: toValue,
    }).start();
  };

  const showShadow = buttonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 5],
  });

  const shadowStyle = {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: showShadow},
    shadowRadius: showShadow,
    shadowOpacity: 0.4,
  };

  return (
    <Animated.View style={shadowStyle}>
      <Pressable
        onPress={() => console.log('pressed')}
        style={styles.buttonStyle}
        onPressIn={() => shadowAnimation(0)}
        onPressOut={() => shadowAnimation(1)}>
        <Text style={styles.textStyle}>Press Me</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 50,
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 25,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
