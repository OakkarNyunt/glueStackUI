import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";

import { Box } from "@/components/ui/box";
// import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
// import { Spinner } from '@/components/ui/spinner';
import { HStack } from "@/components/ui/hstack";
import { ShoppingCart } from "lucide-react-native";
import { VStack } from "@/components/ui/vstack";
import { Badge, BadgeText } from "@/components/ui/badge";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function HomeScreen() {
  const notiNum = 19;
  
  return (
    <SafeAreaView>
      <HStack className="justify-between px-5 items-center">
        <Image
          style={{ width: 50, height: 50 }}
          source={require("@/assets/images/movie.png")}
          placeholder={{ blurhash }}
          contentFit="cover"
          transition={1000}
        />
        <Box className="items-center">
          <Badge
            className={`z-10 self-end ${notiNum > 9 ? "h-[26px] w-[26px]" : "h-[22px] w-[22px]" }  bg-red-600 rounded-full -mb-3.5 -mr-3.5`}
            variant="solid"
          >
            <BadgeText className="text-white">{notiNum > 9 ? "+9": notiNum}</BadgeText>
          </Badge>

          <ShoppingCart color="green" size={24} />
        </Box>
      </HStack>
    </SafeAreaView>
  );
}
