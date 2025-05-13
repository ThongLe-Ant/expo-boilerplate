import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TextInputProps, TouchableOpacity } from 'react-native';
import Icon from '@components/Icon';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  secureTextEntry?: boolean;
}

export default function Input({ label, error, icon, style, secureTextEntry, ...props }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputWrapper, error ? styles.inputError : null, style]}>
        {icon && <View style={styles.icon}>{icon}</View>}
        <TextInput
          style={[styles.input, style]}
          placeholderTextColor="#A0A5BA"
          secureTextEntry={secureTextEntry && !showPassword}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity
            style={styles.passwordToggle}
            onPress={() => setShowPassword(!showPassword)}
            activeOpacity={0.7}
          >
            <Icon name={showPassword ? "eye-off" : "eye"} size={20} color="#A0A5BA" />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontFamily: 'Sen',
    fontWeight: '400',
    fontSize: 22,
    color: '#32343E',
    marginBottom: 8,
   
    
    textAlign: 'left',
  },
  inputWrapper: {
    flexDirection: 'row',
     alignItems: 'center',
     borderRadius: 8,
    backgroundColor: '#F0F5FA',
    paddingHorizontal: 5,
    // height: 60,
    // width: '100%',
  },
  input: {
    flex: 1,
    width: '100%',
    height: 60,
    borderWidth: 1,
    borderColor: '#E3EBF2',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 22,
    backgroundColor: '#F0F5FA',
    color: '#32343E',
    fontFamily: 'Sen',
    fontWeight: '400',
  },
  icon: {
    marginRight: 8,
  },
  inputError: {
    // Không border, có thể thêm hiệu ứng nếu cần
  },
  error: {
    color: '#FF3B30',
    fontSize: 22,
    marginTop: 4,
    fontFamily: 'Sen',
  },
  passwordToggle: {
    padding: 8,
    marginRight: -8,
  },
}); 