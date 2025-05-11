import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface TopNavigationProps {
  title?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onLeftPress?: () => void;
  onRightPress?: () => void;
}

export default function TopNavigation({ leftIcon, rightIcon, onLeftPress, onRightPress }: TopNavigationProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.roundIconButton} onPress={onLeftPress} disabled={!onLeftPress}>
        {leftIcon}
      </TouchableOpacity>
      <View style={{ flex: 1 }} />
      {rightIcon && (
        <TouchableOpacity style={styles.roundIconButton} onPress={onRightPress} disabled={!onRightPress}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 0,
    backgroundColor: 'transparent',
  },
  roundIconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
}); 