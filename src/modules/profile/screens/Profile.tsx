/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Modal, Dimensions } from "react-native";
import Icon from "@components/Icon";
import TopNavigation from '@components/TopNavigation';
import { signOut } from '@modules/app/services/appService';

const user = {
  name: "Albert Stevano Bajefski",
  email: "Albertstevano@gmail.com",
  avatar: require("../../../assets/images/go_eat_go.jpg"),
};

const orders = [
  {
    id: '888333777',
    status: 'In Delivery',
    food: {
      name: 'Burger With Meat',
      price: '$12,230',
      image: require('../../../assets/images/product_1.png'),
      quantity: 14,
    },
  },
];



const { width } = Dimensions.get('window');
const scale = (size: number) => Math.round(size * width / 375);

export default function Profile({ navigation }: any) {
  const [showSignOut, setShowSignOut] = useState(false);
  const profileMenu = [
    { key: 'personal', label: 'Personal Data', icon: 'user', color: '#FE8C00', onPress: () => navigation.navigate('PersonalData') },
    { key: 'settings', label: 'Settings', icon: 'settings', color: '#413DFB', onPress: () => {} },
    { key: 'extra', label: 'Extra Card', icon: 'credit-card', color: '#B33DFB', onPress: () => {} },
  ];

  return (
    <View style={styles.safeView}>
      <View style={styles.topNavWrap}>
        <TopNavigation
          leftIcon={
            <View style={styles.backCircle}>
              <Icon name="back" size={20} color="#181C2E" />
            </View>
          }
          onLeftPress={() => navigation.goBack()}
          title="Profile Settings"
        />
      </View>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.headerBlock}>
          <View style={styles.avatarWrap}>
            <Image source={user.avatar} style={styles.avatar} resizeMode="cover" />
          </View>
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
        <View style={styles.activityCard}>
          <View style={styles.activityHeader}>
            <Text style={styles.activityTitle}>My Orders</Text>
            <TouchableOpacity><Text style={styles.seeAll}>See All</Text></TouchableOpacity>
          </View>
          {orders.map((order) => (
            <View key={order.id} style={styles.orderRow}>
              <View style={styles.orderIdBlock}>
                <Text style={styles.orderIdLabel}>Order ID</Text>
                <Text style={styles.orderId}>{order.id}</Text>
              </View>
              <View style={styles.orderStatusBadge}><Text style={styles.orderStatusText}>{order.status}</Text></View>
              <View style={styles.orderFoodBlock}>
                <Image source={order.food.image} style={styles.orderFoodImage} />
                <View style={styles.orderFoodInfo}>
                  <Text style={styles.orderFoodName}>{order.food.name}</Text>
                  <Text style={styles.orderFoodPrice}>{order.food.price}</Text>
                </View>
                <Text style={styles.orderFoodQty}>{order.food.quantity} items</Text>
              </View>
            </View>
          ))}
        </View>
        <View style={styles.menuSection}>
          <Text style={styles.menuSectionTitle}>Profile</Text>
          {profileMenu.map((item) => (
            <TouchableOpacity key={item.key} style={styles.menuItemRow} onPress={item.onPress} activeOpacity={0.8}>
              <View style={[styles.menuIconWrap, { backgroundColor: item.color + '22' }]}>
                <Icon name={item.icon} size={20} color={item.color} />
              </View>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Icon name="chevron-right" size={18} color="#D6D6D6" />
            </TouchableOpacity>
          ))}
        </View>
        
        <TouchableOpacity style={styles.signOutBtn} onPress={() => setShowSignOut(true)} activeOpacity={0.8}>
          <View style={{ marginRight: 12 }}>
            <Icon name="logout" size={22} color="#FFF" />
          </View>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
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
  topNavWrap: {
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
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#101010',
    textAlign: 'center',
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 120,
    backgroundColor: '#FFF',
  },
  headerBlock: {
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 24,
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
    borderWidth: 3,
    borderColor: '#FFC6AE',
  },
  name: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 20,
    color: '#101010',
    marginBottom: 4,
    textAlign: 'center',
  },
  email: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    color: '#878787',
    textAlign: 'center',
  },
  activityCard: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    marginBottom: 24,
    width: '90%',
    alignSelf: 'center',
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 2,
  },
  activityHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  activityTitle: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 16,
    color: '#101010',
  },
  seeAll: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#FE8C00',
  },
  orderRow: {
    marginBottom: 12,
  },
  orderIdBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  orderIdLabel: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    color: '#878787',
    marginRight: 8,
  },
  orderId: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 12,
    color: '#101010',
  },
  orderStatusBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FE8C00',
    borderRadius: 30,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginBottom: 4,
  },
  orderStatusText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 10,
    color: '#FFF',
  },
  orderFoodBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  orderFoodImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: 12,
  },
  orderFoodInfo: {
    flex: 1,
  },
  orderFoodName: {
    fontFamily: 'Inter_600SemiBold',
    fontSize: 14,
    color: '#101010',
  },
  orderFoodPrice: {
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    color: '#FE8C00',
  },
  orderFoodQty: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    color: '#878787',
    marginLeft: 8,
  },
  menuSection: {
    width: '90%',
    alignSelf: 'center',
    marginBottom: 16,
  },
  menuSectionTitle: {
    fontFamily: 'Inter_500Medium',
    fontSize: 12,
    color: '#878787',
    marginBottom: 8,
    marginLeft: 8,
  },
  menuItemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  menuIconWrap: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  menuLabel: {
    flex: 1,
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: '#101010',
  },
  signOutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
    height: 56,
    borderRadius: 100,
    backgroundColor: '#F14141',
    marginTop: 24,
    shadowColor: '#F14141',
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 2,
  },
  signOutText: {
    color: '#FFF',
    fontFamily: 'Inter_700Bold',
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
  iconWrapLogout: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontFamily: 'Inter_700Bold',
    fontSize: 24,
    color: '#101010',
    textAlign: 'center',
    marginBottom: 16,
  },
  modalDesc: {
    fontFamily: 'Inter_500Medium',
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
    fontFamily: 'Inter_600SemiBold',
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
});
