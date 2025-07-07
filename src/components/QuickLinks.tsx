import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const links = ['About me', 'Help & Support', 'Licensing Policy', 'Refund Policy', 'Hire me', 'Contact'];

const QuickLinks = () => (
  <View style={styles.container}>
    <Text style={styles.header}>QUICK LINK</Text>
    {links.map((link) => (
      <TouchableOpacity key={link}>
        <Text style={styles.link}>{link}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: { marginVertical: 16 },
  header: { fontWeight: 'bold', marginBottom: 12 },
  link: {
    paddingVertical: 6,
    borderBottomColor: '#ccc',
    borderBottomWidth: 0.5,
  },
});

export default QuickLinks;
