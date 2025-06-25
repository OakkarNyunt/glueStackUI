import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
// import { StyleSheet } from "react-native";
import { Box } from "@/components/ui/box";
// import { Text } from "@/components/ui/text";
// import { Button, ButtonText } from "@/components/ui/button";
// import { Spinner } from '@/components/ui/spinner';
import { HStack } from "@/components/ui/hstack";
import { ShoppingCart } from "lucide-react-native";
// import { VStack } from "@/components/ui/vstack";
import { Badge, BadgeText } from "@/components/ui/badge";
import { FlashList } from "@shopify/flash-list";

import Banner from "@/components/custom/banner";
import ReuseTitle from "@/components/custom/reuseTitle";
import Cate_data from "@/components/custom/cate_data";
import Product from "@/components/custom/product";
// import { FlatList } from "react-native";

import {data,product} from "@/constants/cate"
import { useState } from "react";
import { Dimensions, ScrollView, View,Text,StyleSheet } from "react-native";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function HomeScreen() {
  const notiNum = 9;
  const notiHandle = notiNum > 9 ? "+9" : notiNum;
  const [select, setSelect] = useState(1);
  const handleSelect = (id: number) => {
    setSelect(id);
  };
  const width = Dimensions.get("screen").width;
  const numColumns = width < 600 ? 2 : width < 768 ? 3 : 4;
  return (
    <SafeAreaView>
      <HStack className="justify-between px-5 items-center">
        <Image
          style={{ width: 30, height: 30 }}
          source={require("@/assets/images/movie.png")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <Box className="items-center">
          <Badge
            className={`z-10 self-end ${
              notiNum > 9 ? "h-[26px] w-[26px]" : "h-[20px] w-[20px]"
            }  bg-red-600 rounded-full -mb-3.5 -mr-3.5`}
            variant="solid"
          >
            <BadgeText className="text-white text-xs font-semibold">
              {notiHandle}
            </BadgeText>
          </Badge>

          <ShoppingCart color="green" size={24} />
        </Box>
      </HStack>
      
      
    <ScrollView showsVerticalScrollIndicator={false}>
      <Banner />
      <ReuseTitle title="Shop By Category" btn="See All" />
      
      <FlashList
        data={data}
        renderItem={({item}) => 
        <Cate_data {...item} 
        select={select}
        onSelect={handleSelect}
        />}
        keyExtractor={item => item.id.toString()}
        //for select when click category
        extraData={select}
        horizontal 
        showsHorizontalScrollIndicator={false}
        estimatedItemSize={90}
      />
      <ReuseTitle title="Recommended for you" btn="See All" />
      <FlashList
            
            data={product}
            renderItem={({ item }) => <Product {...item}  />}
            keyExtractor={(item) => item.id.toString()}
            extraData={select}
            // horizontal
            showsVerticalScrollIndicator={false}
            estimatedItemSize={300}
            numColumns={numColumns}
            // columnWrapperStyle={{ padding: 15 }}
            contentContainerStyle={{paddingHorizontal : 15,paddingBottom: 15}}
            
            ListFooterComponent={() => (
              <>
                <View style={styles.seeMoreContainer}>
                  <Text style={styles.seeMore}>See More...</Text>
                </View>
              </>
            )}
          />
    </ScrollView>
    
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  
  seeMoreContainer: {
    alignItems: "center",
    color: "green",
  },
  seeMore: {
    // height: "100%",
    marginVertical: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 20,
    backgroundColor: "green",
    color: "white",
    // fontWeight: "bold",
  },
});
