import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface AlphabeticKeyboardProps {
  onPress: (value: string) => void;
}

const rows = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M', 'back'],
  ['space'],
];

export default function AlphabeticKeyboard({ onPress }: AlphabeticKeyboardProps) {
  return (
    <View style={styles.container}>
      {rows.map((row, rowIdx) => (
        <View style={styles.row} key={rowIdx}>
          {row.map((key, idx) => (
            <TouchableOpacity
              key={key + idx}
              style={[styles.key, key === 'space' && styles.spaceKey]}
              onPress={() => onPress(key)}
              activeOpacity={0.7}
            >
              {key === 'back' ? (
                <Text style={styles.back}>⌫</Text>
              ) : key === 'space' ? (
                <Text style={styles.text}> </Text>
              ) : (
                <Text style={styles.text}>{key}</Text>
              )}
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 4,
  },
  key: {
    width: 36,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
    borderRadius: 12,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#EDEDED',
  },
  spaceKey: {
    width: 220,
  },
  text: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 18,
    color: '#101010',
  },
  back: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 18,
    color: '#FE8C00',
  },
}); 