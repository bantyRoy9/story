import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const dummyData = [
  {
    id: '1',
    image: require("./../assets/images/OrangeRoom.jpeg"),
    category: 'travel',
    title: 'Give Your Space a Parisian - Inspired Makeover',
    description: 'Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultricies eu...',
    date: '27 August',
    readTime: '12 mins read',
    views: '23k views',
  },
  {
    id: '2',
    image: require("./../assets/images/OrangeRoom.jpeg"),
    category: 'tour',
    title: 'Give Your Space a Parisian - Inspired Makeover',
    description: 'Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultricies eu...',
    date: '27 August',
    readTime: '12 mins read',
    views: '23k views',
  },
  // Add more dummy cards as needed
];

const TravelTipsCard = ({ item }:any) => (
  <View style={styles.card}>
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
      <TouchableOpacity style={styles.imageIcon}>
        <Icon name="photo-camera" size={18} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.shareIcon}>
        <Icon name="share" size={18} color="white" />
      </TouchableOpacity>
    </View>
    <View style={styles.content}>
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.meta}>
        <Text style={styles.metaText}>{item.date}</Text>
        <Text style={styles.metaDot}>•</Text>
        <Text style={styles.metaText}>{item.readTime}</Text>
        <Text style={styles.metaDot}>•</Text>
        <Text style={styles.metaText}>{item.views}</Text>
      </View>
    </View>
  </View>
);

const TravelTipsList = () => {
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.header}>TRAVEL TIPS</Text>
      <FlatList
        data={dummyData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TravelTipsCard item={item} />}
        scrollEnabled={false} // Because ScrollView already handles scroll
      />
    </ScrollView>
  );
};

export default TravelTipsList;

const styles = StyleSheet.create({
  header: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 24,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  imageIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#16a34a',
    padding: 6,
    borderRadius: 20,
  },
  shareIcon: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#2563eb',
    padding: 6,
    borderRadius: 20,
  },
  content: {
    padding: 12,
  },
  category: {
    color: '#38bdf8',
    fontSize: 12,
    marginBottom: 4,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },
  description: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 10,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  metaText: {
    fontSize: 12,
    color: '#6b7280',
  },
  metaDot: {
    fontSize: 14,
    marginHorizontal: 4,
    color: '#9ca3af',
  },
});
