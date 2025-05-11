import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform, Alert, Dimensions } from "react-native";
import Input from "@components/Input";
import Button from "@components/Button";
import Icon from "@components/Icon";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Routes, { RootStackParams } from '@utils/Routes';
import TopNavigation from "@components/TopNavigation";

const { width, height } = Dimensions.get('window');
const scale = (size: number) => Math.round(size * width / 375);

export default function ForgotPassword() {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email) {
        Alert.alert("Success", "Check your email for reset instructions!");
      } else {
        Alert.alert("Error", "Please enter your email");
      }
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#121223' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TopNavigation
        leftIcon={<Icon name="back" size={24} color="#5E616F" />}
        onLeftPress={() => navigation.navigate(Routes.Login)}
      />
      <View style={styles.headerWrap}>
        <Text style={styles.title}>Forgot Password?</Text>
        <Text style={styles.description}>Enter your email address to reset your password</Text>
      </View>
      <View style={styles.bottomCard}>
        <View style={styles.formBlock}>
          <Input
            label={"Email"}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor="#7E8A97"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Button
            title={loading ? "Loading..." : "Send"}
            onPress={handleSend}
            loading={loading}
            style={styles.sendBtnWrap}
          />
          <TouchableOpacity style={styles.loginContainer} onPress={() => navigation.navigate(Routes.Login)}>
            <Text style={styles.login}>Remember your password? <Text style={styles.loginLink}>Sign In</Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  headerWrap: {
    marginTop: scale(40),
    marginBottom: scale(24),
    paddingHorizontal: scale(24),
  },
  title: {
    fontFamily: "Sen",
    fontWeight: "700",
    fontSize: scale(32),
    color: "#FFF",
    marginBottom: scale(8),
    textAlign: "center",
  },
  description: {
    fontFamily: "Sen",
    fontWeight: "400",
    fontSize: scale(16),
    color: "#FFF",
    opacity: 0.85,
    textAlign: "center",
  },
  bottomCard: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: scale(20),
    paddingTop: scale(32),
    paddingBottom: scale(32),
    shadowColor: "#797777",
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 8,
    minHeight: height * 0.6,
  },
  backBtn: {
    position: "absolute",
    top: 48,
    left: 24,
    zIndex: 2,
  },
  backCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  formBlock: {
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 0,
  },
  inputBlock: {
    marginBottom: scale(12),
  },
  inputLabel: {
    fontFamily: 'Sen',
    fontWeight: '400',
    fontSize: scale(16),
    color: '#32343E',
    marginBottom: scale(6),
  },
  input: {
    borderRadius: 10,
    backgroundColor: "#F0F5FA",
    paddingHorizontal: scale(12),
    height: scale(48),
    fontFamily: "Sen",
    fontSize: scale(16),
    color: "#32343E",
  },
  sendBtnWrap: {
    borderRadius: 12,
    height: scale(56),
    width: "100%",
    alignSelf: "center",
    marginBottom: scale(18),
    overflow: "hidden",
    backgroundColor: "#FF7622",
    justifyContent: "center",
  },
  loginContainer: {
    marginTop: scale(8),
    alignSelf: "center",
    marginBottom: 0,
  },
  login: {
    color: "#32343E",
    fontFamily: "Sen",
    fontSize: scale(16),
  },
  loginLink: {
    color: "#FF7622",
    fontFamily: "Sen",
    fontWeight: "700",
  },
}); 