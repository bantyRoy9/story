// components/LastComments.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';

const commentsData = [
  {
    id: '1',
    name: 'David',
    date: '16 Jan 2020',
    comment: 'A writer is someone for whom writing is more difficult than...',
    avatar: require('../assets/imgs/authors/author-2.jpg'),
  },
  {
    id: '2',
    name: 'Kokawa',
    date: '12 Feb 2020',
    comment: 'Striking pewter studded epaulettes silver zips',
    avatar: require('../assets/imgs/authors/author-3.jpg'),
  },
  {
    id: '3',
    name: 'Tsukasi',
    date: '18 May 2020',
    comment: 'Workwear bow detailing a slingback buckle strap',
    avatar: require('../assets/imgs/authors/author-4.jpg'),
  },
];

const LastComments = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>LAST COMMENTS</Text>
      <FlatList
        data={commentsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.commentCard}>
            <Image source={item.avatar} style={styles.avatar} />
            <View style={styles.textContainer}>
              <View style={styles.nameRow}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.dot}> • </Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
              <Text style={styles.comment} numberOfLines={2}>
                {item.comment}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default LastComments;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  sectionTitle: {
    fontWeight: '600',
    fontSize: 13,
    color: '#555',
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  commentCard: {
    flexDirection: 'row',
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#1f2937',
  },
  dot: {
    color: '#6b7280',
  },
  date: {
    fontSize: 12,
    color: '#6b7280',
  },
  comment: {
    fontSize: 13,
    color: '#374151',
  },
});
