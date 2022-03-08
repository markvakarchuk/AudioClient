import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Audio } from 'expo-av';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './app/nav/AppNavigator';

// export default function App() {
//   const [sound, setSound] = React.useState();

//   async function playSound() {
//     console.log('Loading Sound');
//     const { sound } = await Audio.Sound.createAsync(
//       {uri: 'http://streaming.livespanel.com:20000/live' },
//     );
//     setSound(sound);

//     console.log('Playing Sound');
//     await sound.playAsync(); 
//   }

//   /*const playpause = () => {


//   } */

//   /* React.useEffect(() => {
//     return sound
//       ? () => {
//           console.log('Unloading Sound');
//           sound.unloadAsync(); }
//       : undefined;
//   }, [sound]); */

//   return <NavigationContainer>
//     <AppNavigator/>
//   </NavigationContainer>
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#ecf0f1',
//     padding: 10,
//   },
// });


