import { View, Text, StyleSheet, Dimensions, Animated } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Image } from "expo-image";
import PagerView, { PagerViewOnPageScrollEventData } from "react-native-pager-view";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const p1 = require("@/assets/data/family1.jpg");
const p2 = require("@/assets/data/family2.jpg");
const p3 = require("@/assets/data/family3.jpg");

const data = [
  { key: 1, image: p1 },
  { key: 2, image: p2 },
  { key: 3, image: p3 },
];

const { width, height } = Dimensions.get("window");
const DOT_SIZE = 15;

// Pagination component outside of ViewPager
const Pagination = ({
  scrollOffsetAnimatedValue,
  positionAnimatedValue,
}: {
  scrollOffsetAnimatedValue: Animated.Value;
  positionAnimatedValue: Animated.Value;
}) => {
  const inputRange = [0, data.length];
  const translateX = Animated.add(
    scrollOffsetAnimatedValue,
    positionAnimatedValue
  ).interpolate({
    inputRange,
    outputRange: [0, data.length * DOT_SIZE],
  });

  return (
    <View style={[styles.pagination]}>
      <Animated.View
        style={[
          styles.paginationIndicator,
          {
            position: "absolute",
            transform: [{ translateX: translateX }],
          },
        ]}
      />
      {data.map((item) => {
        return (
          <View key={item.key} style={styles.paginationDotContainer}>
            <View style={styles.paginationDot} />
          </View>
        );
      })}
    </View>
  );
};

const ViewPager = () => {
  const scrollOffsetAnimatedValue = React.useRef(new Animated.Value(0)).current;
  const positionAnimatedValue = React.useRef(new Animated.Value(0)).current;

  const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

  return (
    <View style={styles.container}>
      <AnimatedPagerView
        initialPage={0}
        style={styles.pagerView}
        onPageScroll={Animated.event<PagerViewOnPageScrollEventData>(
          [
            {
              nativeEvent: {
                offset: scrollOffsetAnimatedValue,
                position: positionAnimatedValue,
              },
            },
          ],
          {
            // listener: ({ nativeEvent: { offset, position } }) => {
            //   console.log(`Position: ${position} Offset: ${offset}`);
            // },
            useNativeDriver: false, // safer for offset/position
          }
        )}
      >
        {data.map((item) => (
          <View collapsable={false} key={item.key}>
            <Image
              style={styles.image}
              source={item.image}
              placeholder={{ blurhash }}
              contentFit="cover"
              transition={1000}
            />
          </View>
        ))}
      </AnimatedPagerView>

      <Pagination
        scrollOffsetAnimatedValue={scrollOffsetAnimatedValue}
        positionAnimatedValue={positionAnimatedValue}
      />

      <Link href="../">
        <Text>Go to Home</Text>
      </Link>
    </View>
  );
};

export default ViewPager;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height / 4,
  },
  pagerView: {
    height: height / 4,
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  pagination: {
    position: "absolute",
    right: width / 2 - DOT_SIZE * 2,
    bottom: 20,
    flexDirection: "row",
    height: DOT_SIZE,
  },
  paginationDot: {
    width: DOT_SIZE * 0.3,
    height: DOT_SIZE * 0.3,
    borderRadius: DOT_SIZE * 0.15,
    backgroundColor: "white",
  },
  paginationDotContainer: {
    width: DOT_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
  paginationIndicator: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    borderWidth: 1,
    borderColor: "black",
  },
});
