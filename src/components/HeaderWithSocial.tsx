import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SocialIcon } from 'react-native-elements';

const HeaderWithSocial = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="bars" size={24} color="#6c7a89" />
      </TouchableOpacity>
      <Text style={styles.text}>Main Menu</Text>


      <View style={styles.socialIcons}>
        <SocialIcon type="facebook" iconSize={12} style={styles.icon} />
        <SocialIcon type="twitter" iconSize={12} style={styles.icon} />
        <SocialIcon type="pinterest" iconSize={12} style={styles.icon} />
      </View>

      <TouchableOpacity>
        <Icon name="bars" size={24} color="#6c7a89" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
  },
  text: {
    color: '#6c7a89',
    fontSize: 16,
    fontWeight: '500',
    marginHorizontal: 10,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default HeaderWithSocial;
