import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import TopNavigation from '@components/TopNavigation';
import Icon from '@components/Icon';
import Input from '@components/Input';
import Button from '@components/Button';

export default function PersonalData({ navigation }: any) {
  // Dummy avatar, có thể lấy từ user context hoặc props
  const avatar = require('../../../assets/images/go_eat_go.jpg');
  return (
    <View style={styles.container}>
      <TopNavigation
        leftIcon={<Icon name="back" size={20} color="#101010" />}
        onLeftPress={() => navigation.goBack()}
      />
      <View style={styles.avatarBlock}>
        <Image source={avatar} style={styles.avatar} resizeMode="cover" />
        <TouchableOpacity style={styles.avatarEditBtn}>
          <Icon name="camera" size={18} color="#FE8C00" />
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
        <Text style={styles.title}>Personal Data</Text>
        <View style={styles.form}>
          <Input label="Full Name" placeholder="Enter your full name" style={styles.input} />
          <Input label="Email" placeholder="Enter your email" keyboardType="email-address" style={styles.input} />
          <Input label="Phone Number" placeholder="Enter your phone number" keyboardType="phone-pad" style={styles.input} />
          <Input label="Address" placeholder="Enter your address" style={styles.input} />
          <Input label="Birthday" placeholder="DD/MM/YYYY" style={styles.input} />
          <Input label="Gender" placeholder="Select gender" style={styles.input} />
        </View>
        <Button
          style={styles.saveBtn}
          title="Save"
          onPress={() => {}}
        />
      </ScrollView>
     
        
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 32,
  },
  title: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 24,
    color: '#101010',
    textAlign: 'center',
    marginTop: 24,
    marginBottom: 32,
  },
  form: {
    gap: 3,
    marginBottom: 10,
  },
  input: {
    marginBottom: 0,
  },
  saveBtn: {
    borderRadius: 100,
    backgroundColor: '#FE8C00',
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0,
  },
  saveBtnText: {
    color: '#FFF',
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 16,
  },
  avatarBlock: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
    marginBottom: 8,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#F5F5F5',
  },
  avatarEditBtn: {
    position: 'absolute',
    right: '32%',
    bottom: 0,
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 8,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
  },
  footer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: '#FFF',
  },
}); 