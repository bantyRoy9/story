import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

type PopularPostCardProps = {
  title: string;
  date: string;
  views: string;
  image: number; // ✅ correct type for require(...)
  onPress?: () => void;
};

const PopularPostCard = ({ title, date, views, image, onPress }: PopularPostCardProps) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.meta}>{date} • {views} VIEWS</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginBottom: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: 80,
    height: 80,
  },
  info: {
    flex: 1,
    padding: 8,
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  meta: {
    fontSize: 12,
    color: "#777",
  },
});

export default PopularPostCard;
