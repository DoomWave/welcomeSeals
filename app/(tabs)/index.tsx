import { Image, StyleSheet, Text,View, ImageBackground } from 'react-native';


export default function HomeScreen() {
  return (
    <View>
      <Image
        source={require('@/assets/images/pfp.jpg')}
        style={{
          width: 200,
          height: 200,
          borderRadius: 100,
          alignSelf: 'center'
        }}
      />
      <Text style={{color: 'white', alignSelf: 'center'}}>SGT. Seal D. Goggings</Text>
      <Text>???</Text>
    </View>
  );
}

const styles = StyleSheet.create({
 
});
