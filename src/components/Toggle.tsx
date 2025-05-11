import React from 'react';
import { TouchableOpacity, View, StyleSheet, Animated, Text } from 'react-native';

interface ToggleProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
  label?: string;
}

export default function Toggle({ value, onValueChange, disabled, label }: ToggleProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TouchableOpacity
        style={[styles.switch, value && styles.switchOn, disabled && styles.switchDisabled]}
        onPress={() => !disabled && onValueChange(!value)}
        activeOpacity={0.8}
        disabled={disabled}
      >
        <Animated.View style={[styles.thumb, value && styles.thumbOn]} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 15,
    color: '#101010',
    marginRight: 12,
  },
  switch: {
    width: 44,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#EDEDED',
    justifyContent: 'center',
    padding: 2,
  },
  switchOn: {
    backgroundColor: '#FE8C00',
  },
  switchDisabled: {
    opacity: 0.5,
  },
  thumb: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFF',
    transform: [{ translateX: 0 }],
  },
  thumbOn: {
    transform: [{ translateX: 16 }],
  },
}); 