import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import React from "react";
import { HStack } from "../ui/hstack";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";


type Props = {
  id: string;
  category_id: string;
  brand: string;
  title: string;
  star: number;
  quantity: number;
  price: number;
  discount: number;
  image: string;
  user: string;
  colors: string;
  sizes: string;
  description: string;
};

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Product = ({
  id,
  category_id,
  brand,
  title,
  star,
  quantity,
  price,
  discount,
  image,

  user,
  colors,
  sizes,
  description,
}: Props) => {
  const route = useRouter();
  return (
    <Pressable style={styles.container} onPress = {() => route.navigate("/detail")}>
      <Image
        style={styles.image}
        source={image}
        placeholder={{ blurhash }}
        contentFit="cover"
        transition={1000}
      />
      <Pressable style={styles.heartContainer}>
        <MaterialIcons
          name={user.length > 0 ? "favorite" : "favorite-outline"}
          size={16}
          color="red"
        />
      </Pressable>
      <View style={styles.contentContainer}>
        <Text style={styles.brand}>{brand}</Text>
        <MaterialIcons name="star-outline" size={18} color="brown" />
        <Text style={styles.star}>{star}</Text>
        <Text style={styles.quantity}>{quantity}</Text>
      </View>
      <View>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <View style={styles.dollars}>
          <Text style={{ marginRight: 20, fontWeight: "bold" }}>
            ${price.toFixed(2)}
          </Text>
          <Text style={styles.discount}>${discount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 5,
    borderRadius: 12,
  },
  heartContainer: {
    backgroundColor: "#00000015",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 25,
    right: 25,
  },
  contentContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  brand: {
    color: "green",
    fontWeight: "bold",
    marginRight: 8,
  },
  star: {
    fontWeight: 500,
    marginHorizontal: 8,
    // justifyContent: "center"
  },
  quantity: {
    color: "gray",
  },
  title: {
    fontSize: 14,
    color: "gray",
    marginVertical: 3,
  },
  dollars: {
    flexDirection: "row",
  },
  discount: {
    textDecorationLine: "line-through",
  },
});
