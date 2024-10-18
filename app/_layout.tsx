import {Stack} from "expo-router";
import { View } from "react-native/types";

export default function Layout(){
    return(
        <Stack>
            <Stack.Screen 
              name="index" 
              options={{
                title:"Home",
              }}
            />
        </Stack>
    )
}