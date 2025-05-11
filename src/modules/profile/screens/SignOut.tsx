import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from '@components/Icon';

export default function SignOut({ navigation, route }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.iconWrap}>
        <Icon name="logout" size={64} color="#FE8C00" />
      </View>
      <Text style={styles.title}>Sign Out</Text>
      <Text style={styles.description}>Are you sure you want to sign out of your account?</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.cancelBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.cancelText}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signOutBtn} onPress={route?.params?.onSignOut}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  iconWrap: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#FFF5E6',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  title: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 24,
    color: '#101010',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    color: '#878787',
    textAlign: 'center',
    marginBottom: 32,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 16,
    width: '100%',
    justifyContent: 'center',
  },
  cancelBtn: {
    flex: 1,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#FE8C00',
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginRight: 8,
  },
  cancelText: {
    color: '#FE8C00',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  signOutBtn: {
    flex: 1,
    borderRadius: 100,
    backgroundColor: '#FE8C00',
    paddingVertical: 16,
    alignItems: 'center',
    marginLeft: 8,
  },
  signOutText: {
    color: '#FFF',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
}); 