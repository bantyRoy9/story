import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const SubscribeForm = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter your email" style={styles.input} placeholderTextColor="#999" />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Subscribe</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubscribeForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 25,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    height: 50,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#5B4EFF',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
