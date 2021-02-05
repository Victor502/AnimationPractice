import React, {useState} from 'react';
import {View, Pressable, StyleSheet, Text} from 'react-native';

const InsetButton = () => {
  const [pressed, setPressed] = useState(false);
  const borderBottomInset = pressed
    ? {
        borderRadius: 32,
        shadowOpacity: 0.2,
        shadowOffset: {width: -0.2, height: -0.5},
        shadowRadius: 0.95,
        backgroundColor: '#f4f4f4',
        borderBottomWidth: 4,
        borderBottomColor: 'white',
        borderLeftWidth: 2,
        borderLeftColor: 'white',
        borderRightWidth: 2,
        borderRightColor: 'white',
      }
    : {
        borderBottomWidth: 4,
        borderBottomColor: '#f4f4f4',
        borderLeftWidth: 2,
        borderLeftColor: '#f4f4f4',
        borderRightWidth: 2,
        borderRightColor: '#f4f4f4',
      };
  const borderTopInset = pressed
    ? {
        shadowOpacity: 0.1,
        shadowOffset: {width: -0.3, height: -4},
        shadowRadius: 0.95,
        backgroundColor: '#f4f4f4',
      }
    : {};
  return (
    <Pressable
      style={styles.container}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}>
      <View style={borderBottomInset}>
        <View style={[styles.container, borderTopInset]}>
          <Text style={styles.textBase}>Press Me</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 16,
    justifyContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 48,
    borderRadius: 32,
    alignItems: 'center',
  },
  textBase: {
    textAlignVertical: 'center',
    fontSize: 16,
    lineHeight: 16,
    letterSpacing: 1,
    textAlign: 'center',
  },
});

export default InsetButton;
