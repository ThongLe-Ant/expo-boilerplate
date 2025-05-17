import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Switch, Modal, Pressable } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParams } from '@utils/Routes';
import { AntDesign } from '@expo/vector-icons';

// Tạo mảng days: bắt đầu từ ngày hiện tại trừ 2, kết thúc là ngày hiện tại cộng 31
const weekDays = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
const today = new Date();
const startDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2);
const days: { label: string; date: number; month: number }[] = [];
for (let i = 0; i <= 33; i++) {
  const d = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + i);
  const label = weekDays[d.getDay()];
  days.push({ label, date: d.getDate(), month: d.getMonth() + 1 });
}
//const [selectedDay, setSelectedDay] = useState(2);

const mainMenu = [
  { name: 'Cơm', image: require('../../../assets/images/product_1.png') },
  { name: 'Bún', image: require('../../../assets/images/product_2.png') },
  { name: 'Chay', image: require('../../../assets/images/product_1.png') },
  { name: 'Bánh', image: require('../../../assets/images/product_1.png') },
];

const overtimeMenu = [
  { name: 'Cơm', image: require('../../../assets/images/product_1.png') },
  { name: 'Bún', image: require('../../../assets/images/product_2.png') },
  { name: 'Chay', image: require('../../../assets/images/product_1.png') },
];

export default function OrderPlan({ navigation }: { navigation: StackNavigationProp<RootStackParams> }) {
  const [selectedDay, setSelectedDay] = useState(2);
  const [mainSelectedByDay, setMainSelectedByDay] = useState<number[]>(Array(days.length).fill(0));
  const [overtimeEnabled, setOvertimeEnabled] = useState(false);
  const [overtimeSelectedByDay, setOvertimeSelectedByDay] = useState<number[]>(Array(days.length).fill(0));
  const menuListRef = useRef<ScrollView>(null);
  const dayScrollRef = useRef<ScrollView>(null);
  const ITEM_HEIGHT = 450; // Chiều cao cố định cho mỗi menuSection

  // Lấy ngày/tháng hiện tại (giả lập, có thể lấy từ state)
  const today = new Date();
  const day = today.getDate();
  const month = today.getMonth() + 1;

  
  const [timeEat, setTimeEat] = useState('11h30-12h30');
  const [showTimeModal, setShowTimeModal] = useState(false);
  const timeEatOptions = [
    { label: 'Sáng: 11h30-12h30', value: '11h30-12h30' },
    { label: 'Chiều: 17h-18h', value: '17h-18h' },
    { label: 'Tối: 22h30-23h30', value: '22h30-23h30' },
  ];

  // Handler chọn món cho từng ngày
  const handleSelectMenu = (idx: number) => {
    const newArr = [...mainSelectedByDay];
    newArr[selectedDay] = idx;
    setMainSelectedByDay(newArr);
  };
  // Handler chọn overtime menu cho từng ngày
  const handleSelectOvertime = (idx: number) => {
    const newArr = [...overtimeSelectedByDay];
    newArr[selectedDay] = idx;
    setOvertimeSelectedByDay(newArr);
  };
  // Khi chọn ngày ở thanh ngày
  const handleDayPress = (idx: number) => {
    setSelectedDay(idx);
    menuListRef.current?.scrollTo({ y: idx * ITEM_HEIGHT, animated: true });
  };
  // Khi scroll dọc menuCard, cập nhật selectedDay realtime
  const handleMenuScroll = (e: any) => {
    const idx = Math.round(e.nativeEvent.contentOffset.y / ITEM_HEIGHT);
    if (idx !== selectedDay) {
      setSelectedDay(idx);
    }
  };

  // Khi selectedDay thay đổi, scroll ngang đến đúng ngày
  React.useEffect(() => {
    dayScrollRef.current?.scrollTo({ x: selectedDay * 60, animated: true });
  }, [selectedDay]);

  return (
    <View style={styles.container}>
      {/* Header */}
      
      
      <View style={styles.calendarRow}>
        <View style={styles.calendarBox}>
          <AntDesign name="calendar" size={20} color="#006EE9" style={{marginRight: 6}} />
          <Text style={styles.calendarText}>{`${timeEat}`}</Text>
        </View>
        <TouchableOpacity style={styles.changeTimeBtnHeaderRow} onPress={() => setShowTimeModal(true)}>
          <Text style={styles.changeTimeTextHeader}>Đổi giờ ăn</Text>
        </TouchableOpacity>
      </View>

      {/* Dãy ngày chọn */}
      <View style={styles.dayScrollWrap}>
        <ScrollView
          ref={dayScrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.dayScroll}
        >
          {days.map((d, idx) => (
            <TouchableOpacity
              key={idx}
              style={[
                styles.dayBtn,
                { height: 75, marginTop: 8, marginBottom: 8 },
                idx === selectedDay && [
                  styles.dayBtnActive,
                  { height: 90, marginTop: -8, marginBottom: -8, zIndex: 2 },
                ],
                d.label === 'CN' && { backgroundColor: '#FF3B30' },
              ]}
              onPress={() => handleDayPress(idx)}
            >
              <Text style={[
                styles.dayLabel,
                idx === selectedDay && styles.dayLabelActive,
                d.label === 'CN' && { color: '#fff' },
              ]}>{d.label}</Text>
              <Text style={[
                styles.dayDate,
                idx === selectedDay && styles.dayDateActive,
                d.label === 'CN' && { color: '#fff' },
              ]}>{d.date}/{d.month}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Menu món ăn và overtime menu: mỗi ngày là một dòng, hiển thị toàn bộ danh sách ngày */}
      <ScrollView
        style={{ flex: 1 }}
        ref={menuListRef}
        onScroll={handleMenuScroll}
        scrollEventThrottle={16}
      >
        {days.map((d, dayIdx) => (
          <View key={dayIdx} style={[styles.menuSection, { marginBottom: 12, height: ITEM_HEIGHT }]}> 
            <View style={styles.menuSectionCalendarBox}>
              <View style={styles.menuSectionCalendarInner}>
                <AntDesign name="calendar" size={14} color="#006EE9" style={{marginRight: 4}} />
                <View style={{alignItems: 'center', justifyContent: 'center'}}>
                  <Text style={styles.menuSectionCalendarText}>{d.label}</Text>
                  <Text style={[styles.menuSectionCalendarText, {marginTop: 0}]}>{`${d.date}/${d.month}`}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.menuTitle}>Bữa Chính {timeEat}</Text>
            <View style={styles.menuBlock}>
              {mainMenu.map((item, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={[
                    styles.menuCard,
                    idx === mainSelectedByDay[dayIdx] && styles.menuCardActive,
                    (idx + 1) % 2 === 0 && { marginRight: 0 },
                  ]}
                  onPress={() => {
                    const newArr = [...mainSelectedByDay];
                    newArr[dayIdx] = idx;
                    setMainSelectedByDay(newArr);
                  }}
                  activeOpacity={0.8}
                >
                  <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                    <Image source={item.image} style={[styles.menuImage, { marginTop: 2, marginBottom: 2 }]} />
                  </View>
                  <Text style={[styles.menuName, { textAlign: 'center', marginTop: 2 }]}>{item.name}</Text>
                  <View style={[styles.checkCircle, idx === mainSelectedByDay[dayIdx] && styles.checkCircleActive]}>
                    {idx === mainSelectedByDay[dayIdx] && (
                      <AntDesign name="check" size={14} color="#fff" />
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
            {/* Overtime meal block */}
            <View style={styles.overtimeHeader}>
              <Switch
                value={overtimeEnabled}
                onValueChange={setOvertimeEnabled}
                trackColor={{ false: '#E3EBF2', true: '#17E33C' }}
                thumbColor={overtimeEnabled ? '#17E33C' : '#fff'}
              />
              <Text style={[styles.menuTitle, { textAlign: 'center', flex: 1 }]}>Tăng ca</Text>
            </View>
            <View style={styles.menuBlock}>
              {overtimeMenu.map((item, idx) => (
                <TouchableOpacity
                  key={idx}
                  style={[
                    styles.menuCard,
                    idx === overtimeSelectedByDay[dayIdx] && overtimeEnabled && styles.menuCardActive,
                    !overtimeEnabled && styles.menuCardDisabled,
                    (idx + 1) % 2 === 0 && { marginRight: 0 },
                  ]}
                  onPress={() => {
                    if (!overtimeEnabled) return;
                    const newArr = [...overtimeSelectedByDay];
                    newArr[dayIdx] = idx;
                    setOvertimeSelectedByDay(newArr);
                  }}
                  activeOpacity={overtimeEnabled ? 0.8 : 1}
                  disabled={!overtimeEnabled}
                >
                  <Image source={item.image} style={[styles.menuImage, !overtimeEnabled && { opacity: 0.4 }]} />
                  <Text style={[styles.menuName, !overtimeEnabled && { opacity: 0.4 }]}>{item.name}</Text>
                  <View style={[
                    styles.checkCircle,
                    idx === overtimeSelectedByDay[dayIdx] && overtimeEnabled && styles.checkCircleActive,
                    !overtimeEnabled && { borderColor: '#E3EBF2', backgroundColor: '#F5F5F5' },
                  ]}>
                    {idx === overtimeSelectedByDay[dayIdx] && overtimeEnabled && (
                      <AntDesign name="check" size={14} color="#fff" />
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Action button chỉ còn nút xác nhận */}

      <View style={[styles.actionRow, { position: 'absolute', bottom: 2, width: '80%', alignSelf: 'center' }]}>
        <TouchableOpacity style={styles.confirmBtn}>
          <Text style={styles.confirmText}>Xác Nhận</Text>
        </TouchableOpacity>
         

      </View>

      <Modal
        visible={showTimeModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowTimeModal(false)}
      >
        <Pressable style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.3)' }} onPress={() => setShowTimeModal(false)} />
        <View style={{ position: 'absolute', left: 32, right: 32, top: '35%', backgroundColor: '#fff', borderRadius: 16, padding: 24, elevation: 8 }}>
          <Text style={{ fontWeight: '700', fontSize: 18, marginBottom: 16, textAlign: 'center', color: '#006EE9' }}>Chọn giờ ăn</Text>
          {timeEatOptions.map(opt => (
            <TouchableOpacity
              key={opt.value}
              style={{ paddingVertical: 14, borderBottomWidth: 0.5, borderColor: '#E3EBF2' }}
              onPress={() => { setTimeEat(opt.value); setShowTimeModal(false); }}
            >
              <Text style={{ fontSize: 16, color: timeEat === opt.value ? '#17E33C' : '#222', fontWeight: timeEat === opt.value ? '700' : '400', textAlign: 'center' }}>{opt.label}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity onPress={() => setShowTimeModal(false)} style={{ marginTop: 12, alignSelf: 'center' }}>
            <Text style={{ color: '#006EE9', fontWeight: '600', fontSize: 16 }}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 8, justifyContent: 'space-between' },
  headerText: { fontSize: 24, fontWeight: '600', color: '#000' },
  changeTimeBtnHeader: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#17E33C',
    alignItems: 'center',
  },
  changeTimeTextHeader: { color: '#17E33C', fontWeight: '600', fontSize: 14 },
  calendarBox: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#EBF2FF',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 6,
    minWidth: 36,
    minHeight: 36,
    height: 36,
    justifyContent: 'center',
    marginBottom: 0,
  },
  calendarText: { color: '#006EE9', fontWeight: '600', fontSize: 16 },
  dayScrollWrap: {
    marginBottom: 24,
    zIndex: 1,
  },
  dayScroll: {
    flexGrow: 0,
  },
  dayBtn: {
    backgroundColor: '#EBF2FF',
    borderRadius: 10,
    paddingVertical: 4,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
    minWidth: 48,
    height: 75,
    flexDirection: 'column',
    elevation: 1,
  },
  dayBtnActive: {
    backgroundColor: '#006EE9',
    elevation: 3,
  },
  dayDate: { fontSize: 14, fontWeight: '600', color: '#006EE9', lineHeight: 18 },
  dayDateActive: { color: '#fff' },
  dayLabel: { fontSize: 10, color: '#006EE9', lineHeight: 14 },
  dayLabelActive: { color: '#fff' },
  menuTitle: {textAlign: 'center', fontSize: 16, fontWeight: '700', marginVertical: 8, color: '#006EE9' },
  menuBlock: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  overtimeHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 8 },
  menuCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 2,
    alignItems: 'center',
    width: '30%',
    elevation: 4,
    marginBottom: 2,
    marginRight: 0,
    flexDirection: 'column',
    position: 'relative',
    shadowColor: '#006EE9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },
  menuCardActive: {
    borderColor: '#17E33C',
    borderWidth: 2,
    backgroundColor: '#F0FFF5',
    shadowOpacity: 0.18,
    shadowColor: '#17E33C',
  },
  menuCardDisabled: {
    opacity: 0.5,
  },
  menuImage: { width: 48, height: 48, borderRadius: 8, marginBottom: 8 },
  menuName: { fontSize: 16, fontWeight: '600', marginBottom: 4 },
  checkCircle: {
    width: 20, height: 20, borderRadius: 10, borderWidth: 2, borderColor: '#E3EBF2', marginTop: 4,
  },
  checkCircleActive: {
    borderColor: '#17E33C', backgroundColor: '#17E33C',
  },
  toggleSwitch: { marginTop: 4 },
  actionRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 24 },
  confirmBtn: {
    backgroundColor: '#17E33C',
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
    width: '100%',
    alignSelf: 'center',
  },
  confirmText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  menuSection: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E3EBF2',
    padding: 16,
    position: 'relative',
    minHeight: 120,
    marginTop: 0,
  },
  menuSectionCalendarBox: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 2,
  },
  menuSectionCalendarInner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E3EBF2',
    paddingHorizontal: 8,
    paddingVertical: 2,
    minHeight: 28,
    minWidth: 60,
    shadowColor: '#006EE9',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 2,
  },
  menuSectionCalendarText: {
    fontSize: 13,
    color: '#006EE9',
    fontWeight: '600',
  },
  calendarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  changeTimeBtnHeaderRow: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#17E33C',
    alignItems: 'center',
  },
}); 