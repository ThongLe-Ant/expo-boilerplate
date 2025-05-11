import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface ProgressButtonProps {
  progress: number; // 0-1
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export default function ProgressButton({ progress, title, onPress, disabled }: ProgressButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <View style={styles.progressBarBg}>
        <View style={[styles.progressBar, { width: `${Math.max(0, Math.min(1, progress)) * 100}%` }]} />
      </View>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderRadius: 16,
    backgroundColor: '#FE8C00',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginVertical: 8,
    overflow: 'hidden',
  },
  disabled: {
    opacity: 0.5,
  },
  progressBarBg: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    backgroundColor: '#FFD9B3',
    borderRadius: 16,
    zIndex: 0,
  },
  progressBar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: '#FE8C00',
    borderRadius: 16,
    zIndex: 1,
  },
  text: {
    color: '#FFF',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
    zIndex: 2,
  },
}); 