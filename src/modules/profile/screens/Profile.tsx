/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, Dimensions } from "react-native";
import Icon from "@components/Icon";
import TopNavigation from '@components/TopNavigation';
import { signOut } from '@modules/app/services/appService';

const user = {
  name: "Thongle",
  email: "thongle@goeat.com.vn",
  avatar: require("../../../assets/images/go_eat_go.jpg"), // dùng tạm icon app làm avatar
};

const menuGroups = [
  [
    { key: 'personal', label: 'Personal Info', icon: 'user', color: '#FE8C00', onPress: () => {} },
    { key: 'addresses', label: 'Addresses', icon: 'location', color: '#413DFB', onPress: () => {} },
  ],
  [
    { key: 'favourite', label: 'Favourite', icon: 'heart', color: '#B33DFB', onPress: () => {} },
    { key: 'cart', label: 'Cart', icon: 'cart', color: '#369BFF', onPress: () => {} },
    { key: 'payment', label: 'Payment Method', icon: 'credit-card', color: '#369BFF', onPress: () => {} },
    { key: 'notifications', label: 'Notifications', icon: 'bell', color: '#FFAA2A', onPress: () => {} },
  ],
  [
    { key: 'reviews', label: 'User Reviews', icon: 'star', color: '#2AE1E1', onPress: () => {} },
   
    { key: 'settings', label: 'Settings', icon: 'settings', color: '#101010', onPress: () => {} },
  ],
];

const { width } = Dimensions.get('window');
const scale = (size: number) => Math.round(size * width / 375);

export default function Profile({ navigation }: any) {
  const [showSignOut, setShowSignOut] = useState(false);

  return (
    <View style={styles.safeView}>
      <TopNavigation
        leftIcon={
          <View style={styles.backCircle}>
            <Icon name="back" size={20} color="#181C2E" />
          </View>
        }
        onLeftPress={() => navigation.goBack()}
        title="Profile"
      />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerBlock}>
          <View style={styles.avatarWrap}>
            <Image source={user.avatar} style={styles.avatar} resizeMode="cover" />
            <View style={styles.avatarBorder} />
          </View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.desc}>I love fast food</Text>
        </View>
        <View style={styles.menuSection}>
          {menuGroups.map((group, groupIdx) => (
            <View key={groupIdx} style={styles.menuGroupCard}>
              {group.map((item, idx) => (
                <TouchableOpacity
                  key={item.key}
                  style={[styles.menuItemRow, idx !== group.length - 1 && styles.menuItemRowBorder]}
                  onPress={item.onPress}
                  activeOpacity={0.8}
                >
                  <View style={styles.menuLeft}>
                    <View style={styles.iconWrap}>
                      <Icon name={item.icon} size={20} color={item.color} />
                    </View>
                    <Text style={[styles.menuLabel, item.key === 'delete' && styles.menuLabelDelete]}>{item.label}</Text>
                  </View>
                  <Icon name="chevron-right" size={18} color="#D6D6D6" />
                </TouchableOpacity>
              ))}
            </View>
          ))}
          <TouchableOpacity style={styles.signOutBtn} onPress={() => setShowSignOut(true)} activeOpacity={0.8}>
            <View style={{ marginRight: 12 }}>
              <Icon name="logout" size={22} color="#FFF" />
            </View>
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
        <Modal
          visible={showSignOut}
          transparent
          animationType="fade"
          onRequestClose={() => setShowSignOut(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <View style={styles.iconWrapLogout}>
                <Icon name="logout" size={64} color="#FB4A59" />
              </View>
              <Text style={styles.modalTitle}>Sign Out</Text>
              <Text style={styles.modalDesc}>Are you sure you want to sign out of your account?</Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.cancelBtn} onPress={() => setShowSignOut(false)}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalSignOutBtn} onPress={async () => {
                  setShowSignOut(false);
                  await signOut();
                  navigation.replace('Login');
                }}>
                  <Text style={styles.signOutText}>Sign Out</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  topNav: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
  },
  backCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#ECF0F4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topTitle: {
    fontFamily: 'Sen',
    fontWeight: '400',
    fontSize: 17,
    color: '#181C2E',
    textAlign: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 32,
    backgroundColor: '#FFF',
  },
  headerBlock: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 32,
  },
  avatarWrap: {
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#FE8C00',
    shadowOpacity: 0.12,
    shadowRadius: 16,
    elevation: 4,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: '#F5F5F5',
    alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: '#FFC6AE',
  },
  avatarBorder: {
    position: 'absolute',
    width: 104,
    height: 104,
    borderRadius: 52,
    borderWidth: 2,
    borderColor: '#FFF',
    top: -4,
    left: -4,
    zIndex: 0,
  },
  name: {
    fontFamily: 'Sen',
    fontWeight: '700',
    fontSize: 20,
    color: '#32343E',
    marginBottom: 4,
    textAlign: 'center',
  },
  desc: {
    fontFamily: 'Sen',
    fontWeight: '400',
    fontSize: 14,
    color: '#A0A5BA',
    textAlign: 'center',
  },
  menuSection: {
    width: '100%',
    alignSelf: 'stretch',
    paddingHorizontal: 20,
  },
  menuGroupCard: {
    backgroundColor: '#F6F8FA',
    borderRadius: 16,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 1,
    overflow: 'hidden',
  },
  menuItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 18,
    paddingHorizontal: 20,
    backgroundColor: 'transparent',
  },
  menuItemRowBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  menuItemLogout: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F6F8FA',
    borderRadius: 16,
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 1,
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  iconWrapLogout: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  menuLabel: {
    fontFamily: 'Sen',
    fontWeight: '400',
    fontSize: 16,
    color: '#32343E',
  },
  menuLabelDelete: {
    color: '#FB4A59',
    fontWeight: '700',
  },
  menuLabelLogout: {
    color: '#FB4A59',
    fontFamily: 'Sen',
    fontWeight: '700',
    fontSize: 16,
  },
  signOutText: {
    color: '#FB4A59',
    fontFamily: 'Sen',
    fontWeight: '700',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    width: 320,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 8,
  },
  modalTitle: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 24,
    color: '#101010',
    textAlign: 'center',
    marginBottom: 16,
  },
  modalDesc: {
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
  modalSignOutBtn: {
    flex: 1,
    borderRadius: 100,
    backgroundColor: '#FE8C00',
    paddingVertical: 16,
    alignItems: 'center',
    marginLeft: 8,
  },
  signOutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
    height: 56,
    borderRadius: 100,
    backgroundColor: '#FB4A59',
    marginTop: 32,
    shadowColor: '#FB4A59',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 2,
  },
});
