//import liraries
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import color from '../misc/color';
import Screen from '../components/Screen';
import PlayerButton from '../components/PlayerButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
// import { PlayerControls } from '../context/audioControls';

// import { AudioContext } from '../context/AudioSource';
// import {
//     changeAudio,
//     moveAudio,
//     pause,
//     play,
//     playNext,
//     resume,
//   } from '../misc/audioController';
//   import { selectAudio } from '../misc/audioController';

const stream_uri = 'http://streaming.livespanel.com:20000/live'



const { width } = Dimensions.get('window');

// class AudioControls extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//           permissionError: false,
//           audioStreamObj: null,
//           currentAudio: null, //{}
//           isPlaying: false,
//           playbackPosition: null,
//           playbackDuration: null,
//         };
//       }

//       componentDidMount() {
//           console.log("componentDidMount()")
//         //this.getPermission();
//         if (this.state.audioStreamObj === null) {
//             try {
//                 Audio.setAudioModeAsync({
//                     allowsRecordingIOS: false,
//                     interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
//                     playsInSilentModeIOS: true,
//                     interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
//                     shouldDuckAndroid: true,
//                     staysActiveInBackground: true,
//                     playThroughEarpieceAndroid: true
//                 })
    
//                 this.loadAudio()
//             } catch (e) {
//                 console.log(e)
//             }
//         }
//       }
//     }

// create a component

const Player = () => {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [sound, setSound] = React.useState();

    async function handlePlayPause() {
        if (!isLoaded) {
                // await loadAudio();
            console.log('loading audio')
            const { sound } = await Audio.Sound.createAsync(
                { uri: 'http://streaming.livespanel.com:20000/live' },
                { shouldPlay: true }
            );
            setSound(sound);
            setIsLoaded(true);
            //  console.log(sound)
            console.log('audio state: '+ isLoaded)
            // await sound.loadAsync();
            // await sound.playAsync();
            sound.setVolumeAsync(1);
        }
        // console.log('status combination: ' + isLoaded && !isPlaying);
        // if (isLoaded && !isPlaying) {
        //     console.log('Starting audio')
        //     await sound.playAsync();
        //     setIsPlaying(true)
        //     // console.log('loaded state: '+ isLoaded);
        //     // console.log('playing state: '+ isPlaying);
        //     // isPlaying ? setIsPlaying(true);
        // }
        console.log("\nhandeling play pause")
        // console.log('loaded state: '+ isLoaded)
        // console.log('playing state: '+ isPlaying)
        console.log('switching playing state \nfrom: '+ isPlaying + '\nto: ' + !isPlaying)
        isPlaying ? await sound.pauseAsync() : await sound.playAsync()
        setIsPlaying(!isPlaying)
        // this.setState({
        //     isPlaying: !isPlaying
        // })
        const checkStatus = sound.getStatusAsync();
        console.log("checking status: " + checkStatus)

        }
    
    async function loadAudio (){
        console.log('loading audio')
        const { sound } = await Audio.Sound.createAsync(
            { uri: 'http://streaming.livespanel.com:20000/live' },
            { shouldPlay: true }
         );
        setSound(sound);
        setIsLoaded(true);
        //  console.log(sound)
        console.log('audio state: '+ isLoaded)
        await sound.loadAsync();
        await sound.playAsync();
        sound.setVolumeAsync(1);
        //  setIsPlaying(true)
    }
    async function handleUnload (){
        console.log('Handling Unload')
        console.log("need to unload:" + isLoaded)
        if (isLoaded) {
            console.log("unloading")
            sound.unloadAsync();
            setIsLoaded(false);
            setIsPlaying(false)
        }
        
    }

    const handlePrevious2 = async () => {
          console.log("handle Prev")
    };
      const handlePlayPause2 = async () => {
        console.log("handle play/Pause")

    };
    const handleNext2 = async () => {
        console.log("handle Next")
    };
  
    return (
        <Screen>
          <View style={styles.container}>
            {/* <View style={styles.audioCountContainer}>
              <View style={{ flexDirection: 'row' }}>
                {context.isPlayListRunning && (
                  <>
                    <Text style={{ fontWeight: 'bold' }}>From Playlist: </Text>
                    <Text>{context.activePlayList.title}</Text>
                  </>
                )}
              </View>
              <Text style={styles.audioCount}>{`${
                context.currentAudioIndex + 1
              } / ${context.totalAudioCount}`}</Text>
            </View> */}
            {/* <View style={styles.midBannerContainer}>
              <MaterialCommunityIcons
                name='music-circle'
                size={300}
                color={context.isPlaying ? color.ACTIVE_BG : color.FONT_MEDIUM}
              />
            </View> */}
            {/* <View style={styles.audioPlayerContainer}>
              <Text numberOfLines={1} style={styles.audioTitle}>
                {context.currentAudio.filename}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: 15,
                }}
              >
                <Text>{convertTime(context.currentAudio.duration)}</Text>
                <Text>
                  {currentPosition ? currentPosition : renderCurrentTime()}
                </Text>
              </View> */}
              {/* <Slider
                style={{ width: width, height: 40 }}
                minimumValue={0}
                maximumValue={1}
                value={calculateSeebBar()}
                minimumTrackTintColor={color.FONT_MEDIUM}
                maximumTrackTintColor={color.ACTIVE_BG}
                onValueChange={value => {
                  setCurrentPosition(
                    convertTime(value * context.currentAudio.duration)
                  );
                }}
                onSlidingStart={async () => {
                  if (!context.isPlaying) return;
    
                  try {
                    await pause(context.playbackObj);
                  } catch (error) {
                    console.log('error inside onSlidingStart callback', error);
                  }
                }}
                onSlidingComplete={async value => {
                  await moveAudio(context, value);
                  setCurrentPosition(0);
                }}
              /> */}

              
              <View style={styles.audioControllers}>
                <PlayerButton iconType='PREV' onPress={handlePrevious2} />
                <PlayerButton
                  onPress={handlePlayPause}
                  style={{ marginHorizontal: 25 }}
                //   iconType={context.isPlaying ? 'PLAY' : 'PAUSE'}
                    iconType={'PAUSE'}
                />
                <PlayerButton iconType='NEXT' onPress={handleUnload} />
              </View>
            </View>
          {/* </View> */}
        </Screen>
      );
    };
    
    const styles = StyleSheet.create({
      audioControllers: {
        width,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20,
      },
      audioCountContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
      },
      container: {
        flex: 1,
      },
      audioCount: {
        textAlign: 'right',
        color: color.FONT_LIGHT,
        fontSize: 14,
      },
      midBannerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      audioTitle: {
        fontSize: 16,
        color: color.FONT,
        padding: 15,
      },
    });
    

//make this component available to the app
export default Player;
