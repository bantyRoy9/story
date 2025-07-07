// import React from 'react';
// import { View, Text, Image, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

// type Props = {
//   image: any;
//   category: string;
//   title: string;
//   date: string;
//   views: string;
//   icon?: string;
// };

// const FeaturedPostCard: React.FC<Props> = ({ image, category, title, date, views, icon }) => {
//   return (
//     <TouchableOpacity style={styles.card}>
//       <Image source={image} style={styles.image} />
//       <View style={styles.overlay}>
//         {icon && <Text style={styles.icon}>{icon}</Text>}
//         <Text style={styles.category}>{category}</Text>
//         <Text style={styles.title}>{title}</Text>
//         <Text style={styles.meta}>{`${date}   •   ${views}`}</Text>
//       </View>
//     </TouchableOpacity>
//   );
// };


// const FeaturedPostList = () => {
//   const posts = [
//     {
//       id: '1',
//       image: require("./../assets/images/OrangeRoom.jpeg"),
//       category: 'Travel',
//       title: 'Top 10 places to visit in Europe',
//       date: 'July 6, 2025',
//       views: '1.2k views',
//       icon: '🌍',
//     },
//     {
//       id: '2',
//       image: require("./../assets/images/OrangeRoom.jpeg"),
//       category: 'Food',
//       title: 'Best street foods around the world',
//       date: 'July 5, 2025',
//       views: '980 views',
//       icon: '🍔',
//     },
//     {
//       id: '3',
//       image: require("./../assets/images/OrangeRoom.jpeg"),
//       category: 'Tips',
//       title: 'How to save money while traveling',
//       date: 'July 3, 2025',
//       views: '2.1k views',
//       icon: '💰',
//     },
//   ];

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={posts}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <FeaturedPostCard {...item} />}
//         showsVerticalScrollIndicator={false}
//       />
//     </View>
//   );
// };

// export default FeaturedPostList;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#fff',
//   },
//   card: {
//     borderRadius: 12,
//     overflow: 'hidden',
//     marginBottom: 20,
//   },
//   image: {
//     width: '100%',
//     height: 200,
//   },
//   overlay: {
//     position: 'absolute',
//     bottom: 10,
//     left: 10,
//     paddingRight: 10,
//   },
//   icon: {
//     fontSize: 18,
//     backgroundColor: 'orange',
//     borderRadius: 8,
//     padding: 4,
//     alignSelf: 'flex-start',
//   },
//   category: {
//     color: 'skyblue',
//     fontSize: 12,
//     marginTop: 4,
//   },
//   title: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginTop: 2,
//   },
//   meta: {
//     color: 'white',
//     fontSize: 12,
//     marginTop: 2,
//   },
// });
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const posts = [
  {
    id: '1',
    title: 'Helpful Tips for Working from Home as a Freelancer',
    category: 'food',
    date: '7 August',
    views: '3k Views',
    image: require("./../assets/images/OrangeRoom.jpeg"), // replace with your asset
  },
  {
    id: '2',
    title: 'Top Travel Destinations for 2025',
    category: 'travel',
    date: '5 July',
    views: '4.5k Views',
    image: require("./../assets/images/OrangeRoom.jpeg"),
  },
  {
    id: '3',
    title: 'The Best Work-Life Balance Guide',
    category: 'life',
    date: '1 July',
    views: '2.3k Views',
    image: require("./../assets/images/OrangeRoom.jpeg"),
  },
];

const HotTags = ['# Covid-19', '# Inspiration', '# Work online', '# Stay home'];

const FeaturedPosts = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const scrollToIndex = (index: number) => {
    if (index >= 0 && index < posts.length) {
      flatListRef.current?.scrollToIndex({ index, animated: true });
      setCurrentIndex(index);
    }
  };

  const renderCard = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.image} />
      <View style={styles.overlay}>
        <Text style={styles.category}>{item.category}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.meta}>
          {item.date}  •  {item.views}
        </Text>
        <TouchableOpacity style={styles.starIcon}>
          <Icon name="star-outline" color="orange" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>FEATURED POSTS</Text>
      <View style={styles.tags}>
        <Icon name="pricetag-outline" size={16} color="#6b7280" />
        <Text style={styles.tagLabel}>Hot tags:</Text>
        {HotTags.map((tag) => (
          <Text key={tag} style={styles.tag}>
            {tag}
          </Text>
        ))}
      </View>

      <FlatList
        ref={flatListRef}
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderCard}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(e) => {
          const index = Math.round(
            e.nativeEvent.contentOffset.x / width
          );
          setCurrentIndex(index);
        }}
      />

      <View style={styles.sliderControls}>
        <TouchableOpacity
          disabled={currentIndex === 0}
          onPress={() => scrollToIndex(currentIndex - 1)}
        >
          <Icon
            name="chevron-back-outline"
            size={28}
            color={currentIndex === 0 ? '#ccc' : '#111'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          disabled={currentIndex === posts.length - 1}
          onPress={() => scrollToIndex(currentIndex + 1)}
        >
          <Icon
            name="chevron-forward-outline"
            size={28}
            color={currentIndex === posts.length - 1 ? '#ccc' : '#111'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FeaturedPosts;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 16,
  },
  tagLabel: {
    color: '#6b7280',
    marginLeft: 4,
    marginRight: 4,
  },
  tag: {
    color: '#6b7280',
    marginHorizontal: 4,
    fontSize: 12,
  },
  card: {
    width: width - 32,
    height: 300,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 16,
    backgroundColor: '#f3f4f6',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  category: {
    color: '#3b82f6',
    fontSize: 12,
    fontWeight: '600',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 4,
  },
  meta: {
    color: '#e5e7eb',
    fontSize: 12,
  },
  starIcon: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 20,
  },
  sliderControls: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
    gap: 24,
  },
});
