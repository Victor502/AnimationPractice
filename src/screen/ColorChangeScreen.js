import React, {useRef} from 'react';
import {StyleSheet, View, Animated, ScrollView} from 'react-native';

const ColorChange = (props) => {
  const animationRef = useRef(new Animated.Value(0)).current;

  const backgroundInterpolate = animationRef.interpolate({
    inputRange: [0, 300, 3000],
    outputRange: ['rgb(255,0,0)', 'rgb(255,255,255)', 'rgb(0,0,255)'],
  });

  const backgroundStyle = {
    backgroundColor: backgroundInterpolate,
  };

  return (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  y: animationRef,
                },
              },
            },
          ],
          {useNativeDriver: false},
        )}>
        <Animated.View style={[styles.content, backgroundStyle]} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    height: 3000,
  },
});

export default ColorChange;
