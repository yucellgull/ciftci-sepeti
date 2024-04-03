import React from 'react'
import { ScrollView } from 'react-native';
import HeaderMain from "../../components/HeaderMain"
import BannerCarousel from "../../components/BannerCarousel"
function Index() {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={{backgroundColor:"blue"}}>
      <HeaderMain />
      <BannerCarousel />
    </ScrollView>
  );
}

export default Index; 
