import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import FontAwesome  from 'react-native-vector-icons/FontAwesome'; // or 'react-native-vector-icons/FontAwesome'

type Props = {
  image: any;
  category: string;
  title: string;
  date: string;
  readTime: string;
  views: string;
};

const PostCard: React.FC<Props> = ({ image, category, title, date, readTime, views }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <View style={styles.iconWrapper}>
          <FontAwesome name="image" size={16} color="#fff" />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.metaRow}>
          <Text style={styles.meta}>{date}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.meta}>{readTime}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.meta}>{views}</Text>
        </View>
      </View>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 180,
  },
  iconWrapper: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#10b981',
    borderRadius: 20,
    padding: 8,
  },
  content: {
    padding: 16,
  },
  category: {
    color: '#3b82f6',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 8,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  meta: {
    fontSize: 12,
    color: '#6b7280',
  },
  dot: {
    marginHorizontal: 6,
    fontSize: 12,
    color: '#6b7280',
  },
});
