import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Dimensions,
} from "react-native";
import Input from "@components/Input";
import Button from "@components/Button";
import Icon from "@components/Icon";
import Checkbox from "@components/Checkbox";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Routes, { RootStackParams } from "@utils/Routes";
import TopNavigation from "@components/TopNavigation";

const { width, height } = Dimensions.get("window");
const scale = (size: number) => Math.round((size * width) / 375);

export default function Register() {
  const navigation = useNavigation<StackNavigationProp<RootStackParams>>();
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleRegister = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (email && username && password && agree) {
        Alert.alert("Success", "Đăng ký thành công!");
      } else {
        Alert.alert(
          "Error",
          "Vui lòng nhập đầy đủ thông tin và đồng ý điều khoản"
        );
      }
    }, 1000);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#121223" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TopNavigation
        leftIcon={<Icon name="back" size={24} color="#5E616F" />}
        onLeftPress={() => navigation.navigate(Routes.Login)}
      />

      <View style={styles.headerWrap}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.description}>Please sign up to get started</Text>
      </View>
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
              label={"Name"}
              placeholder="John doe"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="words"
            />
          </View>
          <View style={styles.inputBlock}>
            <Input
              label={"Password"}
              placeholder="**********"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View style={styles.inputBlock}>
            <Input
              label={"Re-Type Password"}
              placeholder="**********"
              value={retypePassword}
              onChangeText={setRetypePassword}
              secureTextEntry
            />
          </View>
          <View style={styles.checkboxBlock}>
            <Checkbox
              checked={agree}
              onChange={setAgree}
              label="I Agree with Terms of Service and Privacy Policy"
            />
          </View>
          <Button
            title={loading ? "Loading..." : "Sign Up"}
            onPress={handleRegister}
            loading={loading}
            style={styles.registerBtnWrap}
          />
          <TouchableOpacity
            style={styles.loginContainer}
            onPress={() => navigation.navigate(Routes.Login)}
          >
            <Text style={styles.login}>
              Already have an account?{" "}
              <Text style={styles.loginLink}>Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  headerWrap: {
    marginTop: scale(30),
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
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    paddingHorizontal: 28,
    paddingTop: 48,
    paddingBottom: 48,
    shadowColor: "#c5c0c0",
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
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
    fontFamily: "Sen",
    fontWeight: "400",
    fontSize: scale(16),
    color: "#32343E",
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
  checkboxBlock: {
    fontFamily: "Sen",
    fontWeight: "400",
    fontSize: scale(16),
    color: "#32343E",
    marginBottom: scale(18),
  },
  checkboxLabel: {
    fontFamily: "Sen",
    fontWeight: "400",
    fontSize: scale(14),
    color: "#32343E",
  },
  registerBtnWrap: {
    borderRadius: 12,
    height: scale(56),
    width: "100%",
    alignSelf: "center",
    marginBottom: scale(18),
    overflow: "hidden",
    backgroundColor: "#FF7622",
    justifyContent: "center",
  },
  registerBtnText: {
    fontFamily: "Sen",
    fontWeight: "700",
    fontSize: scale(14),
    color: "#FFF",
    textTransform: "uppercase",
    textAlign: "center",
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
