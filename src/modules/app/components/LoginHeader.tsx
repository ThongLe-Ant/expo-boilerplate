import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function LoginHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to your account.</Text>
      <Text style={styles.description}>Please sign in to your account</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 32,
  },
  title: {
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 32,
    color: '#101010',
    marginBottom: 8,
  },
  description: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
    color: '#878787',
    textAlign: 'left',
  },
}); 