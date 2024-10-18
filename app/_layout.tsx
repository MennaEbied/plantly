import {Tabs} from "expo-router";
import { View } from "react-native/types";
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { theme } from "@/theme";

export default function Layout(){
    return(
        <Tabs screenOptions={{tabBarActiveTintColor:theme.colorGreen}}>
            <Tabs.Screen 
              name="index" 
              options={{
                tabBarShowLabel:false,
                title:"Home",
                tabBarIcon: ({size,color}) =>(
                    <Entypo name="leaf" size={size} color={color} />
                )
              }}
            />
             <Tabs.Screen 
              name="profile" 
              options={{
                tabBarShowLabel:false,
                title:"profile",
                tabBarIcon:({size,color})=>(
                    <Feather name="user" size={size} color={color} />
                )
              }}
            />
        </Tabs>
    )
}