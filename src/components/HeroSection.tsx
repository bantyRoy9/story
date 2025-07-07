import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const HeroSection = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.smallMuted}>
          Travel Blogger. Content Writer. Food Guide.
        </Text>
        <Text style={styles.intro}>
          Hello, I’m <Text style={styles.name}>Steven</Text>
        </Text>
        <Text style={styles.title}>Welcome to my blog</Text>
        <Text style={styles.subtitle}>
          Don't miss out on the latest news about Travel tips, Hotels review,
          Food guide...
        </Text>

        <View style={styles.inputGroup}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#9CA3AF"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Subscribe</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeroSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#F9FAFB',
    padding: 20,
    flex:1,
    alignItems: 'center',
    // borderColor:'red',
    // borderWidth:1,
    marginBottom:30
  },
  textContainer: {
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
  },
  smallMuted: {
    color: '#6B7280',
    fontSize: 16,
    marginVertical: 18,
  },
  intro: {
    fontSize: 40,
    fontWeight: '600',
    color: '#111827',
  },
  name: {
    color: '#6366F1',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 44,
    fontWeight: '800',
    color: '#111827',
    marginVertical: 18,
  },
  subtitle: {
    fontSize: 25,
    color: '#6B7280',
    marginVertical: 20,
  },
  inputGroup: {
    flexDirection: 'row',
    marginVertical: 20,
    borderRadius: 9999,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 18,
    fontSize: 18,
    color: '#111827',
  },
  button: {
    backgroundColor: '#6366F1',
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
  image: {
    width: width * 0.6,
    height: width * 0.6,
    marginTop: 20,
  },
});

