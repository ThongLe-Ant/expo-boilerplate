import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';

interface LoginFooterProps {
  onRegister?: () => void;
  onForgotPassword?: () => void;
}

function GoogleIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path d="M21.805 10.023h-9.765v3.977h5.617c-.242 1.242-1.484 3.648-5.617 3.648-3.375 0-6.125-2.789-6.125-6.25s2.75-6.25 6.125-6.25c1.922 0 3.211.773 3.953 1.477l2.703-2.625c-1.664-1.547-3.828-2.5-6.656-2.5-5.523 0-10 4.477-10 10s4.477 10 10 10c5.75 0 9.547-4.039 9.547-9.75 0-.656-.07-1.148-.156-1.477z" fill="#EA4335"/>
    </Svg>
  );
}
function FacebookIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.326v-21.349c0-.734-.593-1.326-1.324-1.326z" fill="#1877F3"/>
    </Svg>
  );
}
function AppleIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24">
      <Path d="M19.667 13.998c-.021-2.146 1.75-3.17 1.828-3.217-1-1.463-2.557-1.666-3.104-1.688-1.322-.135-2.58.775-3.25.775-.668 0-1.693-.756-2.789-.736-1.434.021-2.77.834-3.512 2.117-1.5 2.6-.385 6.438 1.072 8.547.713 1.033 1.561 2.191 2.678 2.148 1.08-.043 1.486-.693 2.789-.693 1.303 0 1.662.693 2.789.67 1.158-.021 1.885-1.051 2.594-2.084.82-1.197 1.158-2.357 1.178-2.418-.025-.012-2.262-.867-2.285-3.441zm-2.285-6.293c.607-.736 1.016-1.762.904-2.785-.875.035-1.934.582-2.566 1.318-.564.654-1.062 1.693-.875 2.686.926.072 1.93-.527 2.537-1.219z" fill="#000"/>
    </Svg>
  );
}

export default function LoginFooter({ onRegister, onForgotPassword }: LoginFooterProps) {
  return (
    <View style={styles.container}>
      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Text style={styles.orText}>Or sign in with</Text>
        <View style={styles.separator} />
      </View>
      <View style={styles.socialContainer}>
        <TouchableOpacity style={styles.socialButton}><GoogleIcon /></TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}><FacebookIcon /></TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}><AppleIcon /></TouchableOpacity>
      </View>
      <TouchableOpacity onPress={onRegister} style={styles.registerContainer}>
        <Text style={styles.register}>Don't have an account? <Text style={styles.registerLink}>Register</Text></Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: 327,
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
    width: '100%',
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#EDEDED',
  },
  orText: {
    marginHorizontal: 16,
    color: '#878787',
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
    marginBottom: 24,
  },
  socialButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#D6D6D6',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    backgroundColor: '#FFF',
  },
  registerContainer: {
    marginTop: 8,
  },
  register: {
    color: '#101010',
    fontFamily: 'Montserrat_500Medium',
    fontSize: 14,
  },
  registerLink: {
    color: '#FE8C00',
    fontFamily: 'Montserrat_600SemiBold',
  },
}); 