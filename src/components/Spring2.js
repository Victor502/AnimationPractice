import React, {useRef} from 'react';
import {Text, StyleSheet, Animated} from 'react-native';

const Spring2 = () => {
  const spring2BoxRef = useRef(new Animated.Value(1)).current;
  const AnimatedSpringBox = () =>
    Animated.loop(
      Animated.spring(spring2BoxRef, {
        useNativeDriver: false,
        toValue: 2,
        friction: 1,
        tension: 10,
      }).start(() => spring2BoxRef.setValue(1)),
    );

  const animatedSpringStyle = {
    transform: [{scale: spring2BoxRef}],
  };

  return (
    <Animated.View style={[styles.container, animatedSpringStyle]}>
      <Text style={styles.textStyle} onPress={() => AnimatedSpringBox()}>
        No Watch Me
      </Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: 90,
    width: 90,
    marginHorizontal: 15,
    backgroundColor: 'purple',
  },
  textStyle: {
    textAlign: 'center',
    padding: 20,
  },
});

export default Spring2;
