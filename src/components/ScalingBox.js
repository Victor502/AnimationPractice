import React, {useRef} from 'react';
import {View, StyleSheet, Animated, Text} from 'react-native';

export default function ScalingBox() {
  const scalingBoxRef = useRef(new Animated.Value(1)).current;

  const flippingBoxAnimation = () => {
    Animated.timing(scalingBoxRef, {
      useNativeDriver: false,
      toValue: -1,
      duration: 200,
    }).start(() => {
      Animated.timing(scalingBoxRef, {
        useNativeDriver: false,
        toValue: 1,
        duration: 200,
      }).start(() => {
        Animated.timing(scalingBoxRef, {
          useNativeDriver: false,
          toValue: -1,
          duration: 300,
        }).start(() => {
          Animated.timing(scalingBoxRef, {
            useNativeDriver: false,
            toValue: 1,
            duration: 300,
          }).start();
        });
      });
    });
  };

  const flippingBoxStyle = {
    transform: [{scaleX: scalingBoxRef}],
  };

  return (
    <Animated.View style={[styles.container, flippingBoxStyle]}>
      <Text
        style={[styles.container, {textAlign: 'center'}]}
        onPress={() => flippingBoxAnimation()}>
        Press Me
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
    backgroundColor: 'orange',
  },
});
