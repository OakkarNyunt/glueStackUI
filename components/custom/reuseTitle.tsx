import { View, Text, Pressable } from 'react-native'
import { HStack } from "@/components/ui/hstack";
import React from 'react'

type Props = {
    title: string;
    btn: any
}
const ReuseTitle = ({title,btn}: Props) => {
  return (
    <HStack className=" justify-between px-5">
        <Text className=" font-bold">{title}</Text>
        <Pressable>
           <Text className=" underline">{btn}</Text>  
        </Pressable>
       
      </HStack>
  )
}

export default ReuseTitle