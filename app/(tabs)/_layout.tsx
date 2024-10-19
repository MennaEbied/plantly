import {Redirect, Tabs} from "expo-router"; 
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";


export default function Layout(){

  const hasFinishedOnboarding = useUserStore(
    (state)=> state.hasFinishedOnboarding,
    );

  if(!hasFinishedOnboarding){
    return <Redirect  href="/onboarding" />;
  }
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