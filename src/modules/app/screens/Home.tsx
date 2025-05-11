/**
 * @author Ali Burhan Keskin <alikeskin@milvasoft.com>
 */
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import Icon from "@components/Icon";

const categories = [
  { key: 'burger', label: 'Burger', image: require('../../../assets/images/category_burger.png') },
  { key: 'taco', label: 'Taco', image: require('../../../assets/images/category_taco.png') },
  { key: 'drink', label: 'Drink', image: require('../../../assets/images/category_drink.png') },
  { key: 'pizza', label: 'Pizza', image: require('../../../assets/images/category_pizza.png') },
];

const products = [
  {
    key: '1',
    name: 'Ordinary Burgers',
    price: '$17,230',
    image: require('../../../assets/images/product_1.png'),
    liked: false,
    rating: 4.9,
    distance: '190m',
  },
  {
    key: '2',
    name: 'Chicken Taco',
    price: '$15,000',
    image: require('../../../assets/images/product_2.png'),
    liked: true,
    rating: 4.8,
    distance: '210m',
  },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Image source={require('../../../assets/images/go_eat_go.jpg')} style={styles.avatar} />
          <View style={styles.locationBlock}>
            <Text style={styles.deliveryTo}>Delivery to</Text>
            <View style={styles.locationRow}>
              <Icon name="location" size={18} color="#FE8C00" />
              <Text style={styles.locationText}>Ho Chi Minh City</Text>
              <Icon name="chevron-down" size={16} color="#878787" />
            </View>
          </View>
          <TouchableOpacity style={styles.notifBtn}>
            <Icon name="bell" size={24} color="#101010" />
          </TouchableOpacity>
        </View>

        {/* Banner */}
        <Image source={require('../../../assets/images/home_banner.png')} style={styles.banner} resizeMode="cover" />

        {/* Search Bar */}
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#878787" />
          <Text style={styles.searchInput}>Search food</Text>
          <TouchableOpacity style={styles.filterBtn}>
            <Icon name="settings" size={20} color="#FE8C00" />
          </TouchableOpacity>
        </View>

        {/* Section Title */}
        <View style={styles.sectionTitleRow}>
          <Text style={styles.sectionTitle}>Find by Category</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Categories */}
        <View style={styles.categoryRow}>
          {categories.map((cat) => (
            <View key={cat.key} style={styles.categoryItem}>
              <View style={styles.categoryImageWrap}>
                <Image source={cat.image} style={styles.categoryImage} />
              </View>
              <Text style={styles.categoryLabel}>{cat.label}</Text>
            </View>
          ))}
        </View>

        {/* Section Title */}
        <View style={styles.sectionTitleRow}>
          <Text style={styles.sectionTitle}>Popular Food</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>

        {/* Product Cards */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.productScroll}>
          {products.map((prod) => (
            <View key={prod.key} style={styles.productCard}>
              <View style={styles.productImageWrap}>
                <Image source={prod.image} style={styles.productImage} />
                <TouchableOpacity style={styles.likeBtn}>
                  <Icon name={prod.liked ? "heart" : "heart"} size={20} color={prod.liked ? "#FE8C00" : "#EDEDED"} />
                </TouchableOpacity>
              </View>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{prod.name}</Text>
                <View style={styles.productSubInfoRow}>
                  <View style={styles.productSubInfoItem}>
                    <Icon name="star" size={14} color="#FE8C00" />
                    <Text style={styles.productSubInfoText}>{prod.rating}</Text>
                  </View>
                  <View style={styles.productSubInfoItem}>
                    <Icon name="location" size={14} color="#FE8C00" />
                    <Text style={styles.productSubInfoText}>{prod.distance}</Text>
                  </View>
                </View>
                <Text style={styles.productPrice}>{prod.price}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollContent: {
    paddingBottom: 90,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    marginBottom: 16,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  locationBlock: {
    flex: 1,
  },
  deliveryTo: {
    fontSize: 12,
    color: '#878787',
    fontFamily: 'Montserrat_500Medium',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  locationText: {
    fontSize: 16,
    color: '#101010',
    fontFamily: 'Montserrat_600SemiBold',
    marginHorizontal: 4,
  },
  notifBtn: {
    marginLeft: 16,
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#FFF',
    elevation: 2,
  },
  banner: {
    width: '90%',
    height: 160,
    borderRadius: 16,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 4,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 100,
    paddingHorizontal: 20,
    height: 48,
    marginHorizontal: 24,
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#101010',
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 8,
  },
  filterBtn: {
    marginLeft: 8,
    padding: 8,
    borderRadius: 20,
    backgroundColor: '#FFF',
    elevation: 2,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 24,
    marginBottom: 12,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#101010',
    fontFamily: 'Montserrat_600SemiBold',
  },
  seeAll: {
    fontSize: 14,
    color: '#FE8C00',
    fontFamily: 'Montserrat_500Medium',
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginBottom: 24,
  },
  categoryItem: {
    alignItems: 'center',
    width: 59,
  },
  categoryImageWrap: {
    width: 59,
    height: 59,
    borderRadius: 8,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
    elevation: 2,
  },
  categoryImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  categoryLabel: {
    fontSize: 14,
    color: '#878787',
    fontFamily: 'Montserrat_500Medium',
    textAlign: 'center',
  },
  productScroll: {
    paddingLeft: 24,
    marginBottom: 32,
  },
  productCard: {
    width: 152,
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginRight: 16,
    padding: 8,
    elevation: 2,
  },
  productImageWrap: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
    overflow: 'hidden',
    backgroundColor: '#F5F5F5',
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  likeBtn: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 6,
    elevation: 2,
  },
  productInfo: {
    alignItems: 'flex-start',
    marginTop: 4,
  },
  productName: {
    fontSize: 16,
    color: '#101010',
    fontFamily: 'Montserrat_600SemiBold',
    marginBottom: 2,
  },
  productSubInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 40,
    marginBottom: 2,
  },
  productSubInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  productSubInfoText: {
    fontSize: 12,
    color: '#101010',
    fontFamily: 'Montserrat_500Medium',
    marginLeft: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#FE8C00',
    fontFamily: 'Montserrat_600SemiBold',
  },
});
