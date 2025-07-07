import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Helpful Tips for Working from Home as a Freelancer',
    date: '7 AUGUST',
    views: '3K VIEWS',
    image: require("./../assets/imgs/news/news-1.jpg"),
  },
  {
    id: '2',
    title: '10 Easy Ways to Be Environmentally Friendly',
    date: '27 AUGUST',
    views: '22K VIEWS',
    image: require("./../assets/imgs/news/news-2.jpg"),
  },
  {
    id: '3',
    title: 'My Favorite Comfies to Lounge in At Home',
    date: '7 AUGUST',
    views: '12K VIEWS',
    image: require("./../assets/imgs/news/news-3.jpg"),
  },
];

const MostPopularList = () => {
  const renderItem = ({ item }: { item: typeof DATA[0] }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.textSection}>
        <Text numberOfLines={2} style={styles.title}>
          {item.title}
        </Text>
        <Text style={styles.meta}>
          {item.date}  •  {item.views}
        </Text>
      </View>
      <Image source={item.image} style={styles.thumbnail} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>MOST POPULAR</Text>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingVertical: 8 }}
      />
    </View>
  );
};

export default MostPopularList;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#F9FAFB',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textSection: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },
  meta: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },
  thumbnail: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
});
