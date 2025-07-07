import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
type Props = {
  image: any;
};
const Header: React.FC<Props> = ({ image})=> {
  return (
    <View style={styles.header}>
      <Image source={image} style={styles.logo} />  <Text style={styles.buttonText}>Buy Now</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Buy Now</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#5B4EFF',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});
