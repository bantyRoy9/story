import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TagList = () => (
  <View style={styles.container}>
    <Text style={styles.sectionTitle}>TAGCLOUD</Text>
    <View style={styles.tagWrapper}>
      {['Beautiful', 'New York', 'Droll', 'Intimate', 'Loving', 'Travel', 'Fighting'].map(tag => (
        <Text style={styles.tag} key={tag}>{tag}</Text>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { marginVertical: 16 },
  sectionTitle: { fontWeight: 'bold', marginBottom: 10 },
  tagWrapper: { flexDirection: 'row', flexWrap: 'wrap' },
  tag: {
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    margin: 4,
  },
});

export default TagList;
