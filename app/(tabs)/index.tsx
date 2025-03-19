import { Image, StyleSheet, Text,View, ImageBackground } from 'react-native';


export default function HomeScreen() {
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
      <Text style={styles.description}>For David Goggins, childhood was a nightmare -- poverty, prejudice, and physical abuse colored his days and haunted his nights.
         But through self-discipline, mental toughness, and hard work, Goggins transformed himself from a depressed, overweight young man with no future into a U.S. Armed Forces icon and one of the world's top endurance athletes. 
         The only man in history to complete elite training as a Navy SEAL, Army Ranger, and Air Force Tactical Air Controller, 
         he went on to set records in numerous endurance events, 
         inspiring Outside magazine to name him "The Fittest (Real) Man in America."</Text>
    </View>
  );
}

const styles = StyleSheet.create({
 sealName: {
  color: 'white',
   alignSelf: 'center',
   fontSize: '40px'},
  
  description: {
    alignSelf: 'center',
    color: 'white',

  }

});
