import React, {useRef, useEffect} from 'react';
import {Animated, View, Text, StyleSheet} from 'react-native';

const LoopingAnimation = (props) => {
  const loopingAnimationRef = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    loopingAnimation();
  });

  const loopingAnimation = () => {
    Animated.loop(
      Animated.timing(loopingAnimationRef, {
        useNativeDriver: false,
        toValue: 1,
        duration: 5000,
      }),
    ).start();
  };

  const interpolateLoop = loopingAnimationRef.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const loopingStyle = {
    transform: [{rotate: interpolateLoop}],
  };

  return (
    <View style={styles.mainContainer}>
      <Animated.View style={[styles.container, loopingStyle]}>
        <Text style={styles.textStyle}>{props.text}</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 50,
  },

  container: {
    // backgroundColor: 'yellow',
    marginHorizontal: 45,
    paddingVertical: 25,
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoopingAnimation;
