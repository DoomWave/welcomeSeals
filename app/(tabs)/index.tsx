import { Image, StyleSheet, Text,View, ImageBackground, TextInput } from 'react-native';
import React, { useCallback } from 'react';
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    'stencilla': require('@/assets/fonts/stencilla.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if (!fontsLoaded){
    return null;
  }
  const [text, onChangeText] = React.useState('Ready to join?');
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Image
        source={require('@/assets/images/pfp.jpg')}
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          alignSelf: 'center'
        }}
      />
      <Text style={styles.sealName}>SGT. Seal D. Goggings</Text>
      <Text style={styles.Age}>24 Years old</Text>
      <Text style={styles.description}>For the Seal D. Goggins, childhood was a nightmare -- poverty, prejudice, and physical abuse colored his days and haunted his nights.
         But through self-discipline, mental toughness, and hard work, Goggins transformed himself from a depressed, overweight young man with no future into a U.S. Armed Forces icon and one of the world's top endurance athletes. 
         The only man in history to complete elite training as a Navy SEAL, Army Ranger, and Air Force Tactical Air Controller, 
         he went on to set records in numerous endurance events, 
         inspiring Outside magazine to name him "The Fittest (Real) Man in America."</Text>
         <TextInput
         style={styles.input}
         onChangeText={onChangeText}
         value={text}
         />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
 sealName: {
  color: 'white',
   alignSelf: 'center',
   fontSize: 40,
   fontFamily: "stencilla"
  },
  
  description: {
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'black',
    fontFamily: "stencilla"
  },
  Age: {
    color: 'white',
  },
  input: {
    height: 20,
    margin: 10,
    borderWidth: 1,
    padding: 5,
    fontFamily: "stencilla"
  },
});
