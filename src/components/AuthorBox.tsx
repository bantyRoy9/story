import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
type Props = {
  image: any;
};
const AuthorBox: React.FC<Props> = ({ image})=> {
  return (
    <View style={styles.box}>
      <Image source={image} style={styles.avatar} />
      <View>
        <Text style={styles.name}>John Doe</Text>
        <Text style={styles.description}>Freelancer, Blogger and Web Designer.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: { flexDirection: 'row', gap: 10 },
  avatar: { width: 50, height: 50, borderRadius: 25 },
  name: { fontWeight: 'bold' },
  description: { fontSize: 12 },
});

export default AuthorBox;