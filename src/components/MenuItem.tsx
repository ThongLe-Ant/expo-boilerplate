import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

interface MenuItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onPress: () => void;
}

export default function MenuItem({ icon, label, active, onPress }: MenuItemProps) {
  return (
    <TouchableOpacity
      style={[styles.container, active && styles.active]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.icon}>{icon}</View>
      <Text style={[styles.label, active && styles.labelActive]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: '#FFF',
    marginBottom: 8,
  },
  active: {
    backgroundColor: '#FEF3E6',
  },
  icon: {
    marginRight: 16,
  },
  label: {
    fontFamily: 'Montserrat_500Medium',
    fontSize: 16,
    color: '#101010',
  },
  labelActive: {
    color: '#FE8C00',
    fontFamily: 'Montserrat_600SemiBold',
  },
}); 