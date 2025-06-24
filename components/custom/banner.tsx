import {  StyleSheet } from 'react-native'
import { HStack } from "@/components/ui/hstack";
import { Image } from "expo-image";
import React from 'react'


const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";


const Banner = () => {
  return (
    <HStack>
        <Image
          style={styles.banner}
          source={require("@/assets/images/family2.jpg")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
          
        />
      </HStack>
  )
}

export default Banner

const styles = StyleSheet.create({
  banner:{
    width: "100%",
    aspectRatio: 16/9,
    marginVertical: 10,
  }
});

