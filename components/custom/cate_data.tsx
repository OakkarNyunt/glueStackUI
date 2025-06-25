import { View, Text, Pressable,StyleSheet, } from "react-native";

import { Image } from "expo-image";
import { HStack } from "@/components/ui/hstack";
import { useState } from "react";


const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
type cateProps = {
  id: number;
  name: string;
  image: string;
  select: number;
  onSelect: (id:number) => void;
};
const CateData = ({ id, name, image,select,onSelect }: cateProps) => {
  // const [select,setSelect] = useState(1);
  return (
    <HStack className=" my-3 px-3">
      <Pressable 
      className="items-center"
      onPress={()=>onSelect(id)}
      >
        <Image
          style={[styles.cateImg ,  select === id && styles.clickCate]}
          source={image}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <Text className="text-gray-500">{name}</Text>
      </Pressable>
    </HStack>
  );
};

export default CateData;

const styles = StyleSheet.create({
  cateImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: "green",
  },
  select:{
    borderColor:"red"
  },
  clickCate:{
    borderColor: "purple",
    borderWidth: 1,
    
  }
});
