import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import TopNavigation from './TopNavigation';
import Icon from './Icon';

interface NavItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onPress: () => void;
}

interface NavigationBarProps {
  items: NavItem[];
}

export default function NavigationBar({ items }: NavigationBarProps) {
  return (
    <>
    
      <View style={styles.container}>
        {items.map((item, idx) => (
          <TouchableOpacity
            key={item.label + idx}
            style={styles.item}
            onPress={item.onPress}
            activeOpacity={0.8}
          >
            <View style={[styles.icon, item.active && styles.iconActive]}>{item.icon}</View>
            <Text style={[styles.label, item.active && styles.labelActive]}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderTopWidth: 1,
    borderTopColor: '#EDEDED',
    paddingVertical: 8,
    paddingBottom: 12,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    marginBottom: 4,
    opacity: 0.6,
  },
  iconActive: {
    opacity: 1,
  },
  label: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 12,
    color: '#878787',
  },
  labelActive: {
    color: '#FE8C00',
    fontFamily: 'Montserrat_600SemiBold',
  },
}); 