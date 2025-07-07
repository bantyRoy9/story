import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; 
const SocialLink = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>ABOUT ME</Text>
      <Text>Start writing, no matter what. The Water does not flow until the faucet is turned on.</Text>
      <Text style={styles.sectionTitle}>Address</Text>
      <Text>123 Main Street</Text>
      <Text>New York, NY 10001</Text>
      <Text style={styles.sectionTitle}>Follow Me</Text>
      <View style={styles.iconRow}>
        <Icon type="facebook" light />
        <Icon type="twitter" light />
        <Icon type="pinterest" light />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginBottom: 8,
    fontSize: 16,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});

export default SocialLink;
