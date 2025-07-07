import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Header = ({ image }: { image: string }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView edges={['top']} style={styles.safeArea}>
      <View style={styles.header}>
        <Image source={image} style={styles.logo} />  <Text style={styles.buttonText}>Buy Now</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.container}>
        {/* Logo + Title */}
        <View style={styles.left}>
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Main Menu</Text>
        </View>

        {/* Right Actions */}
        <View style={styles.right}>

          <Text style={styles.icon}>🌐</Text>
          <Text style={styles.icon}>🐦</Text>
          <Text style={styles.icon}>📌</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ffffff',
  },
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
  container: {
    height: 55,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    fontSize: 24,
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'normal',
    color: '#111827',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buyButton: {
    backgroundColor: '#6366f1',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginRight: 8,
  },
  buyText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  icon: {
    marginHorizontal: 4,
    fontSize: 18,
  },
});
