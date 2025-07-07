import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const images = [
  'https://i.pravatar.cc/150?img=21',
  'https://i.pravatar.cc/150?img=22',
  'https://i.pravatar.cc/150?img=23',
  'https://i.pravatar.cc/150?img=24',
  'https://i.pravatar.cc/150?img=25',
  'https://i.pravatar.cc/150?img=26',
];

const Instagram = () => (
  <View style={styles.container}>
    <Text style={styles.header}>INSTAGRAM</Text>
    <View style={styles.grid}>
      {images.map((img, idx) => (
        <Image key={idx} source={{ uri: img }} style={styles.image} />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { marginVertical: 16 },
  header: { fontWeight: 'bold', marginBottom: 10 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 4 },
  image: { width: 100, height: 100, margin: 2, borderRadius: 8 },
});

export default Instagram;
