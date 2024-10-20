import {  StyleSheet  ,Text ,View } from "react-native";
import { theme } from "@/theme";
import { useUserStore } from "@/store/userStore";
import { useRouter } from "expo-router";
import { PlantlyButton } from "@/component/PlantlyButton";
import { LinearGradient } from "expo-linear-gradient"; 
import { StatusBar } from "expo-status-bar"; 
import { PlantlyImage } from "@/component/PlantlyImage";

export default function OnboardingScreen() {

    const router = useRouter();
    const toggleHasOnboarded=useUserStore((state)=>state.toggleHasOnboarded)

    const handlePress = () =>{
        toggleHasOnboarded();
        router.replace("/");
    }
  return (
    <LinearGradient 
    start={{x:0,y:0}}
    end={{x:1,y:0.5}}
    colors={[theme.colorGreen,theme.colorAppleGreen,theme.colorLimeGreen]}
    style={styles.container}>
      <StatusBar style="light" />
      <View>
        <Text style={styles.heading}>Plantly</Text>
        <Text style={styles.tagLine}>Keep your plants healthy and hydrated</Text>
      </View>
      <PlantlyImage />
      <PlantlyButton title="Let me in!" onPress={handlePress} />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
    paddingHorizontal:8,
  },
  heading:{
    color:theme.colorWhite,
    fontSize:42,
    fontWeight:"bold",
    marginBottom:12,
    textAlign:"center",

  },
  tagLine:{
    fontSize:26,
    color:theme.colorWhite,
    textAlign:"center",
    
  }
});