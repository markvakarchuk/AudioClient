//import liraries
import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import color from '../misc/color';
import Screen from '../components/Screen';
import PlayerButton from '../components/PlayerButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AudioContext } from '../context/AudioSource';
import {
    changeAudio,
    moveAudio,
    pause,
    play,
    playNext,
    resume,
  } from '../misc/audioController';
  import { selectAudio } from '../misc/audioController';
  const stream_uri = 'http://streaming.livespanel.com:20000/live';

const { width } = Dimensions.get('window');


// create a component
const Player = () => {
//     const [currentPosition, setCurrentPosition] = useState(0);
    const context = useContext(AudioContext);
//     const { playbackPosition, playbackDuration, currentAudio } = context;

//     const calculateSeebBar = () => {
//         if (playbackPosition !== null && playbackDuration !== null) {
//         return playbackPosition / playbackDuration;
//         }

//         if (currentAudio.lastPosition) {
//         return currentAudio.lastPosition / (currentAudio.duration * 1000);
//         }

//         return 0;
//     };

//     useEffect(() => {
//         context.loadPreviousAudio();
//     }, []);

    // const handlePlayPause = async () => {
    //     console.log("handlePlayPause")
    //     //await selectAudio(context.soundObj, context);
    //     // play
    //     if (context.soundObj === null) {
    //       const audio = context.currentAudio;
    //       const status = await play(context.playbackObj, audio.uri);
    //       context.playbackObj.setOnPlaybackStatusUpdate(
    //         context.onPlaybackStatusUpdate
    //       );
    //       return context.updateState(context, {
    //         soundObj: status,
    //         currentAudio: audio,
    //         isPlaying: true,
    //         currentAudioIndex: context.currentAudioIndex,
    //       });
    //     }
    //     // pause
    //     if (context.soundObj && context.soundObj.isPlaying) {
    //       const status = await pause(context.playbackObj);
    //       return context.updateState(context, {
    //         soundObj: status,
    //         isPlaying: false,
    //       });
    //     }
    //     // resume
    //     if (context.soundObj && !context.soundObj.isPlaying) {
    //       const status = await resume(context.playbackObj);
    //       return context.updateState(context, {
    //         soundObj: status,
    //         isPlaying: true,
    //       });
    //     }
    //   };

    const handlePlayPause = async () => {
        if (audioStreamObj === null ) {
            
        } else {
            
        }
    } 
    
    //   const handleNext = async () => {
        // await changeAudio(context, 'next');
//         const { isLoaded } = await context.playbackObj.getStatusAsync();
//         const isLastAudio =
//           context.currentAudioIndex + 1 === context.totalAudioCount;
//         let audio = context.audioFiles[context.currentAudioIndex + 1];
//         let index;
//         let status;
    
//         if (!isLoaded && !isLastAudio) {
//           index = context.currentAudioIndex + 1;
//           status = await play(context.playbackObj, audio.uri);
//         }
    
//         if (isLoaded && !isLastAudio) {
//           index = context.currentAudioIndex + 1;
//           status = await playNext(context.playbackObj, audio.uri);
//         }
    
//         if (isLastAudio) {
//           index = 0;
//           audio = context.audioFiles[index];
//           if (isLoaded) {
//             status = await playNext(context.playbackObj, audio.uri);
//           } else {
//             status = await play(context.playbackObj, audio.uri);
//           }
//         }
    
//         context.updateState(context, {
//           currentAudio: audio,
//           playbackObj: context.playbackObj,
//           soundObj: status,
//           isPlaying: true,
//           currentAudioIndex: index,
//           playbackPosition: null,
//           playbackDuration: null,
//         });
//         storeAudioForNextOpening(audio, index);
    //   };
    
    //   const handlePrevious = async () => {
//         // await changeAudio(context, 'previous');
//         const { isLoaded } = await context.playbackObj.getStatusAsync();
//         const isFirstAudio = context.currentAudioIndex <= 0;
//         let audio = context.audioFiles[context.currentAudioIndex - 1];
//         let index;
//         let status;
    
//         if (!isLoaded && !isFirstAudio) {
//           index = context.currentAudioIndex - 1;
//           status = await play(context.playbackObj, audio.uri);
//         }
    
//         if (isLoaded && !isFirstAudio) {
//           index = context.currentAudioIndex - 1;
//           status = await playNext(context.playbackObj, audio.uri);
//         }
    
//         if (isFirstAudio) {
//           index = context.totalAudioCount - 1;
//           audio = context.audioFiles[index];
//           if (isLoaded) {
//             status = await playNext(context.playbackObj, audio.uri);
//           } else {
//             status = await play(context.playbackObj, audio.uri);
//           }
//         }
    
//         context.updateState(context, {
//           currentAudio: audio,
//           playbackObj: context.playbackObj,
//           soundObj: status,
//           isPlaying: true,
//           currentAudioIndex: index,
//           playbackPosition: null,
//           playbackDuration: null,
//         });
//         storeAudioForNextOpening(audio, index);
//       };

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
                <PlayerButton iconType='NEXT' onPress={handleNext2} />
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
