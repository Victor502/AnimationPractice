import React, {useRef} from 'react';
import {View, StyleSheet, Animated, Text, Easing} from 'react-native';

export default function SpringBox() {
  const springBoxRef = useRef(new Animated.Value(1)).current;

  const springBoxAnimation = () => {
    Animated.spring(springBoxRef, {
      useNativeDriver: false,
      toValue: 2,
      friction: 2,
      tension: 160,
    }).start(() => {
      Animated.timing(springBoxRef, {
        useNativeDriver: false,
        toValue: 1,
        duration: 1000,
        easing: Easing.bounce,
      }).start();
    }); // () => springBoxRef.setValue(0) resets back to start
  };

  const springBoxStyle = {
    transform: [{scale: springBoxRef}],
  };

  return (
    <Animated.View style={[styles.container, springBoxStyle]}>
      <Text style={styles.textStyle} onPress={() => springBoxAnimation()}>
        Watch Me
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
  textStyle: {
    textAlign: 'center',
    padding: 20,
  },
});
