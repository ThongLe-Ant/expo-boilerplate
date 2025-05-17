/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React, { useCallback, useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView, Platform, Alert, Text, TouchableOpacity, TextInput, Image, Dimensions, ImageBackground } from "react-native";
import { useDispatch } from "react-redux";
import { showToast } from "@helpers/toast/showToast";
import { SetUser } from "@modules/app/redux/appSlice";
import { useNavigation } from '@react-navigation/native';
import Routes from '@utils/Routes';
import { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParams } from '@utils/Routes';
import Button from "@components/Button";
import GoogleIcon from '../../../assets/images/figma/social_google.svg';
import FacebookIcon from '../../../assets/images/figma/social_facebook.svg';
import AppleIcon from '../../../assets/images/figma/social_apple.svg';
import CoverFood from '../../../assets/images/cover_food2.jpg';
import Icon from "@components/Icon";
import Input from "@components/Input";

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("thongle@goeat.com.vn");
  const [password, setPassword] = useState("Acb@123456");
  const [remember, setRemember] = useState(false);

  const handleLogin = useCallback(async () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email === 'thongle@goeat.com.vn' && password === 'Acb@123456') {
        dispatch(SetUser({ name: email }));
        showToast("Welcome");
        navigation.replace(Routes.Home);
      } else {
        Alert.alert("Error", "Sai thông tin người dùng");
      }
    }, 1000);
  }, [dispatch, email, password, navigation]);

  return (
    <ImageBackground
      source={CoverFood}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {/* Header trên cùng */}
        <View style={styles.headerWrap}>
          <Text style={styles.loginTitle}>Log In</Text>
          <Text style={styles.loginDesc}>Please sign in to your existing account</Text>
        </View>
        {/* Card trắng bo góc dưới cùng */}
        <View style={styles.bottomCard}>
          <View style={styles.formBlock}>
            <View style={styles.inputBlock}>
              <Input
                label={"Email"}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                placeholderTextColor="#7E8A97"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            <View style={styles.inputBlock}>
              <Input
                label="Password"
                placeholder="Enter your password"
                placeholderTextColor="#7E8A97"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
          </View>
          <View style={styles.rowBetween}>
            <TouchableOpacity style={styles.rememberMe} onPress={() => setRemember(!remember)}>
              <View style={[styles.checkbox, remember && styles.checkboxActive]} />
              <Text style={styles.rememberText}>Remember me</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(Routes.ForgotPassword)}>
              <Text style={styles.forgot}>Forgot Password</Text>
            </TouchableOpacity>
          </View>
          <Button
            title={loading ? "Loading..." : "Log In"}
            onPress={handleLogin}
            loading={loading}
            style={styles.signInBtnWrap}
          />
          <View style={styles.separatorContainer}>
            <View style={styles.separator} />
            <Text style={styles.orText}>Or</Text>
            <View style={styles.separator} />
          </View>
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton} onPress={() => Alert.alert("Google sign in")}> 
              <Icon name="search" size={24} color="#EA4335" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={() => Alert.alert("Facebook sign in")}> 
              <Icon name="chat" size={24} color="#1877F3" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} onPress={() => Alert.alert("Apple sign in")}> 
              <Icon name="user" size={24} color="#000" />
            </TouchableOpacity>
          </View>
          <View style={styles.registerRow}>
            <Text style={styles.registerText}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate(Routes.Register)}>
              <Text style={styles.registerLink}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  headerWrap: {
    marginTop: 120,
    marginBottom: 24,
    paddingHorizontal: 32,
  },
  loginTitle: {
    fontFamily: 'Sen',
    fontWeight: '700',
    fontSize: 38,
    color: '#FFF',
    marginBottom: 8,
    textAlign: 'center',
  },
  loginDesc: {
    fontFamily: 'Sen',
    fontWeight: '400',
    fontSize: 22,
    color: '#FFF',
    opacity: 0.85,
    textAlign: 'center',
  },
  bottomCard: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 28,
    paddingTop: 48,
    paddingBottom: 48,
    shadowColor: '#c5c0c0',
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 8,
    minHeight: 0.72 * SCREEN_HEIGHT,
  },
  formBlock: {
    width: "100%",
    alignSelf: "center",
    paddingHorizontal: 0,
  },
  inputBlock: {
    marginBottom: 16,
  },
  inputLabel: {
    fontFamily: 'Sen',
    fontWeight: '400',
    fontSize: 20,
    color: '#32343E',
    marginBottom: 8,
    
  },
  input: {
    height: 60,
    borderWidth: 1,
    borderColor: '#E3EBF2',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 28,
    backgroundColor: '#F0F5FA',
    color: '#32343E',
    fontFamily: 'Sen',
    fontWeight: '400',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 3,
    borderColor: '#E3EBF2',
    marginRight: 12,
    backgroundColor: '#FFF',
  },
  checkboxActive: {
    backgroundColor: '#FF7622',
    borderColor: '#FF7622',
  },
  rememberText: {
    fontFamily: 'Sen',
    fontWeight: '400',
    fontSize: 24,
    color: '#7E8A97',
  },
  forgot: {
    color: '#FF7622',
    fontFamily: 'Sen',
    fontWeight: '400',
    fontSize: 20,
  },
  signInBtnWrap: {
    borderRadius: 12,
    height: 68,
    width: '100%',
    alignSelf: 'center',
    marginBottom: 24,
    overflow: 'hidden',
    backgroundColor: '#FF7622',
    justifyContent: 'center',
    fontSize: 22,
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
    backgroundColor: '#E3EBF2',
  },
  orText: {
    marginHorizontal: 16,
    color: '#646982',
    fontFamily: 'Sen',
    fontWeight: '400',
    fontSize: 22,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  socialButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
  },
  socialIcon: {
    width: 56,
    height: 56,
    resizeMode: 'contain',
  },
  registerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  registerText: {
    color: '#646982',
    fontFamily: 'Sen',
    fontWeight: '400',
    fontSize: 22,
  },
  registerLink: {
    color: '#FF7622',
    fontFamily: 'Sen',
    fontWeight: '700',
    fontSize: 22,
   
  },
});
