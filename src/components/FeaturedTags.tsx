import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FeaturedTags = () => {
  const tags = ['Covid-19', 'Inspiration', 'Work online', 'Stay home'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FEATURED POSTS</Text>
      <Text style={styles.subtitle}>💡 Hot tags:</Text>
      <View style={styles.tagWrap}>
        {tags.map(tag => (
          <Text key={tag} style={styles.tag}>#{tag}</Text>
        ))}
      </View>
    </View>
  );
};

export default FeaturedTags;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontWeight: '600',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
  },
  tagWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 6,
  },
  tag: {
    marginRight: 10,
    color: '#5B4EFF',
  },
});
