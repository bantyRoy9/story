import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <Button title="Subscribe" onPress={() => Alert.alert(`Subscribed: ${email}`)} />
    </View>
  );
};

const styles = StyleSheet.create({
  form: { flexDirection: 'row', gap: 10, alignItems: 'center', marginTop: 10 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    height: 40,
  },
});

export default NewsletterForm;