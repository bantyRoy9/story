import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
type Props = {
  image: any;
};
const Destination: React.FC<Props> = ({ image}) => (
  <View style={styles.container}>
    <Text style={styles.header}>DESTINATIONS</Text>
    <View style={styles.item}>
      <Image source={image} style={styles.image} />
      <View>
        <Text style={styles.title}>Helpful Tips for Working from Home as a Freelancer</Text>
        <Text style={styles.meta}>7 AUGUST · 3K VIEWS</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { marginVertical: 16 },
  header: { fontWeight: 'bold', marginBottom: 10 },
  item: { flexDirection: 'row', gap: 10 },
  image: { width: 60, height: 60, borderRadius: 8, marginRight: 10 },
  title: { fontWeight: 'bold', flexShrink: 1 },
  meta: { color: '#999', fontSize: 12 },
});

export default Destination;
