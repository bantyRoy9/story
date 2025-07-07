import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NewsletterForm from './NewletterForm';

const Newsletter = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>NEWSLETTER</Text>
      <Text>Subscribe to our newsletter and get our newest updates right on your inbox.</Text>
      <NewsletterForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginVertical: 10 },
  title: { fontWeight: 'bold', marginBottom: 10 },
});

export default Newsletter;