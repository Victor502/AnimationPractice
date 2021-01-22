import React, {useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

export default function MovingBox() {
  const movingBox = useRef(new Animated.Value(0));

  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    marginHorizontal: 25,
    backgroundColor: 'red',
  },
});
