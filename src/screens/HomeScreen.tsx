import { Button } from '@react-navigation/elements';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import HeroSection from '../components/HeroSection';
import HeaderWithSocial from '../components/HeaderWithSocial';
import AuthorBox from '../components/AuthorBox';
import Destination from '../components/Destinations';
import FeaturedPostCard from '../components/FeaturedPostCard';
import FeaturedTags from '../components/FeaturedTags';
import Instagram from '../components/Instagram';
import LastComment from '../components/LastComment';
import NewsletterForm from '../components/NewletterForm';
import Newsletter from '../components/NewsLetter';
import PopularPostCard from '../components/PopularPostCard';
import QuickLinks from '../components/QuickLinks';
import SocialLink from '../components/SocialLink';
import SubscribeForm from '../components/SubscribeForm';
import PostList from '../components/PostList';
import TravelTipsList from '../components/TravelTipsList';
import MostPopularList from '../components/MostPopularList';

const HomeScreen = () => {
  const navigation = useNavigation();
  
    return (
      <ScrollView>
        <HeroSection/>
        <FeaturedPostCard/>
        <PostList/>
        <TravelTipsList/>
        <MostPopularList/>
        <LastComment/>
        
        <AuthorBox image={require("./../assets/images/buckets-paint-floor.jpg")}/>
        <Destination image={require("./../assets/images/OrangeRoom.jpeg")}/>
        <FeaturedTags/>
        <Instagram/>
        <NewsletterForm/>
        <Newsletter/>
        {/* <PopularPostCard /> */}
        <QuickLinks/>
        <SocialLink/>
        <SubscribeForm/>
        
      </ScrollView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
  },
});
