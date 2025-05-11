import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface RadioProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
}

export default function Radio({ checked, onChange, disabled, label }: RadioProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => !disabled && onChange(!checked)}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <View style={[styles.circle, checked && styles.checked, disabled && styles.disabledCircle]}>
        {checked && <View style={styles.innerCircle} />}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FE8C00',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checked: {
    borderColor: '#FE8C00',
  },
  innerCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FE8C00',
  },
  disabledCircle: {
    borderColor: '#EDEDED',
    backgroundColor: '#F2F2F2',
  },
  label: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 15,
    color: '#101010',
  },
}); 