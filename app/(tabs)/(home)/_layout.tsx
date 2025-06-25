import {Stack} from 'expo-router';
export default function HomeLayout() {
    return(
       <Stack screenOptions={{headerShown:true}} >
        <Stack.Screen name='index' options={{headerShown:false}} />
        <Stack.Screen name='detail' options={{title: "Product Details"}} />
    </Stack>  
    )
   
}