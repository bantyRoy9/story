import React from 'react';
import { View, FlatList } from 'react-native';
import PostCard from './PostCard';

const posts = [
  {
    id: '1',
    image: require("./../assets/images/OrangeRoom.jpeg"), // replace with a real image in your assets
    category: 'food',
    title: 'Helpful Tips for Working from Home as a Freelancer',
    date: '7 August',
    readTime: '11 mins read',
    views: '3k views',
  },
  {
    id: '2',
    image: require("./../assets/images/OrangeRoom.jpeg"),
    category: 'lifestyle',
    title: 'How to Stay Motivated During Remote Work',
    date: '5 August',
    readTime: '7 mins read',
    views: '2.5k views',
  },
];

const PostList = () => {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <PostCard {...item} />}
      contentContainerStyle={{ paddingVertical: 16 }}
    />
  );
};

export default PostList;
