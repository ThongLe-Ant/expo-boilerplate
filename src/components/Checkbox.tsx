import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, GestureResponderEvent } from 'react-native';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
}

export default function Checkbox({ checked, onChange, disabled, label }: CheckboxProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => !disabled && onChange(!checked)}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <View style={[styles.box, checked && styles.checked, disabled && styles.disabledBox]}>
        {checked && <View style={styles.innerBox} />}
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
  box: {
    width: 24,
    height: 24,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#FE8C00',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checked: {
    borderColor: '#FE8C00',
    backgroundColor: '#FE8C00',
  },
  innerBox: {
    width: 12,
    height: 12,
    borderRadius: 3,
    backgroundColor: '#FFF',
  },
  disabledBox: {
    borderColor: '#EDEDED',
    backgroundColor: '#F2F2F2',
  },
  label: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 15,
    color: '#101010',
  },
}); 