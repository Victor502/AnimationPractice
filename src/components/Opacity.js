import React, {useRef} from 'react';
import {View, Animated, StyleSheet, Pressable} from 'react-native';

export default function Opacity() {
  const animatedOpacity = useRef(new Animated.Value(1)).current;
  const hideBox = (value) => {
    Animated.timing(animatedOpacity, {
      useNativeDriver: false,
      toValue: value,
      duration: 300,
    }).start();
  };

  const showBox = animatedOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const animatedStyle = {
    opacity: showBox,
  };
  return (
    <Pressable
      onPress={() => console.log('I was pressed')}
      onPressIn={() => hideBox(0)}
      onPressOut={() => hideBox(1)}>
      <Animated.View style={[styles.container, animatedStyle]} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    backgroundColor: 'blue',
    marginHorizontal: 50,
  },
});
