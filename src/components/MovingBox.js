import React, {useRef} from 'react';
import {View, StyleSheet, Animated, Text, Easing} from 'react-native';

export default function MovingBox() {
  const movingBoxRef = useRef(new Animated.Value(0)).current;

  const movingBoxAnimation = () => {
    Animated.timing(movingBoxRef, {
      useNativeDriver: false,
      toValue: 50,
      duration: 1000,
      easing: Easing.bounce,
    }).start(() => {
      Animated.timing(movingBoxRef, {
        useNativeDriver: false,
        toValue: -50,
        duration: 1000,
      }).start(); // () => movingBoxRef.setValue(0) resets back to start
    });
  };

  const movingBoxStyle = {
    transform: [{translateY: movingBoxRef}, {translateX: movingBoxRef}],
  };

  return (
    <Animated.View style={[styles.container, movingBoxStyle]}>
      <Text style={styles.container} onPress={() => movingBoxAnimation()}>
        PressMe
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 90,
    width: 90,
    marginHorizontal: 15,
    backgroundColor: 'green',
  },
});
