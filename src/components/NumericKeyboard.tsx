import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface NumericKeyboardProps {
  onPress: (value: string) => void;
}

const keys = [
  '1', '2', '3',
  '4', '5', '6',
  '7', '8', '9',
  '', '0', 'back',
];

export default function NumericKeyboard({ onPress }: NumericKeyboardProps) {
  return (
    <View style={styles.container}>
      {keys.map((key, idx) => (
        <TouchableOpacity
          key={idx}
          style={[styles.key, key === '' && styles.empty]}
          onPress={() => key && onPress(key)}
          disabled={key === ''}
          activeOpacity={0.7}
        >
          {key === 'back' ? (
            <Text style={styles.back}>⌫</Text>
          ) : (
            <Text style={styles.text}>{key}</Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 240,
    alignSelf: 'center',
  },
  key: {
    width: 80,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    borderRadius: 16,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EDEDED',
  },
  empty: {
    backgroundColor: 'transparent',
    borderWidth: 0,
  },
  text: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 24,
    color: '#101010',
  },
  back: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 24,
    color: '#FE8C00',
  },
}); 