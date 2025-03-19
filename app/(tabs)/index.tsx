import { Image, StyleSheet, Text,View, ImageBackground, TextInput } from 'react-native';
import React from 'react';

export default function HomeScreen() {
  const [text, onChangeText] = React.useState('Useless Text');
  return (
    <View style={{backgroundColor: "blue", flex: 1}}>
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
      <Text style={styles.description}>For David Goggins, childhood was a nightmare -- poverty, prejudice, and physical abuse colored his days and haunted his nights.
         But through self-discipline, mental toughness, and hard work, Goggins transformed himself from a depressed, overweight young man with no future into a U.S. Armed Forces icon and one of the world's top endurance athletes. 
         The only man in history to complete elite training as a Navy SEAL, Army Ranger, and Air Force Tactical Air Controller, 
         he went on to set records in numerous endurance events, 
         inspiring Outside magazine to name him "The Fittest (Real) Man in America."</Text>
         <TextInput 
         style={styles.input}
         onChangeText={onChangeText}
         value={Text}
         />
    </View>

  );
}

const styles = StyleSheet.create({
 sealName: {
  color: 'white',
   alignSelf: 'center',
   fontSize: '40px',
  fontFamily: ""
  },
  
  description: {
    alignSelf: 'center',
    color: 'white',
    backgroundColor: 'black',
  },
  Age: {
    color: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
