import React, { Component, createContext } from 'react';
import { Text, View, Alert } from 'react-native';
import { Audio } from 'expo-av';
export const AudioContext = createContext();

export class AudioProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      permissionError: false,
      playbackObj: null,
      soundObj: null,
      currentAudio: {}, //??
      isPlaying: false,
      playbackPosition: null,
      playbackDuration: null,
    };
    this.totalAudioCount = 0;
  }

  onPlaybackStatusUpdate = async playbackStatus => {
//     if (playbackStatus.isLoaded && playbackStatus.isPlaying) {
//       this.updateState(this, {
//         playbackPosition: playbackStatus.positionMillis,
//         playbackDuration: playbackStatus.durationMillis,
//       });
//     }

//     if (playbackStatus.isLoaded && !playbackStatus.isPlaying) {
//       storeAudioForNextOpening(
//         this.state.currentAudio,
//         this.state.currentAudioIndex,
//         playbackStatus.positionMillis
//       );
//     }

//     if (playbackStatus.didJustFinish) {
//       if (this.state.isPlayListRunning) {
//         let audio;
//         const indexOnPlayList = this.state.activePlayList.audios.findIndex(
//           ({ id }) => id === this.state.currentAudio.id
//         );
//         const nextIndex = indexOnPlayList + 1;
//         audio = this.state.activePlayList.audios[nextIndex];

//         if (!audio) audio = this.state.activePlayList.audios[0];

//         const indexOnAllList = this.state.audioFiles.findIndex(
//           ({ id }) => id === audio.id
//         );

//         const status = await playNext(this.state.playbackObj, audio.uri);
//         return this.updateState(this, {
//           soundObj: status,
//           isPlaying: true,
//           currentAudio: audio,
//           currentAudioIndex: indexOnAllList,
//         });
//       }

//     //   const nextAudioIndex = this.state.currentAudioIndex + 1;
//     //   // there is no next audio to play or the current audio is the last
//     //   if (nextAudioIndex >= this.totalAudioCount) {
//     //     this.state.playbackObj.unloadAsync();
//     //     this.updateState(this, {
//     //       soundObj: null,
//     //       currentAudio: this.state.audioFiles[0],
//     //       isPlaying: false,
//     //       currentAudioIndex: 0,
//     //       playbackPosition: null,
//     //       playbackDuration: null,
//     //     });
//     //     return await storeAudioForNextOpening(this.state.audioFiles[0], 0);
//     //   }
//       // otherwise we want to select the next audio
//       const audio = this.state.audioFiles[nextAudioIndex];
//       const status = await playNext(this.state.playbackObj, audio.uri);
//       this.updateState(this, {
//         soundObj: status,
//         currentAudio: audio,
//         isPlaying: true,
//         currentAudioIndex: nextAudioIndex,
//       });
//       await storeAudioForNextOpening(audio, nextAudioIndex);
//     }

    const { audiosourceOBJ } = await Audio.Sound.createAsync(
        { uri: 'http://streaming.livespanel.com:20000/live' },
     );
    this.updateState(this, {
        playbackPosition: 2000,
        playbackDuration: 10000,
        soundObj: audiosourceOBJ,
    });
};

  componentDidMount() {
    // this.getPermission();
    if (this.state.playbackObj === null) {
      this.setState({ ...this.state, playbackObj: new Audio.Sound() });
    }
  }

  updateState = (prevState, newState = {}) => {
    this.setState({ ...prevState, ...newState });
  };

  render() {
    const {
      audioFiles,
      playList,
      addToPlayList,
      dataProvider,
      permissionError,
      playbackObj,
      soundObj,
      currentAudio,
      isPlaying,
      currentAudioIndex,
      playbackPosition,
      playbackDuration,
      isPlayListRunning,
      activePlayList,
    } = this.state;
    
    return (
      <AudioContext.Provider
        value={{
          playbackObj,
          soundObj,
          currentAudio,
          isPlaying,
          currentAudioIndex,
          totalAudioCount: this.totalAudioCount,
          playbackPosition,
          playbackDuration,
          isPlayListRunning,
          activePlayList,
          updateState: this.updateState,
          loadPreviousAudio: this.loadPreviousAudio,
          onPlaybackStatusUpdate: this.onPlaybackStatusUpdate,
        }}
      >
        {this.props.children}
      </AudioContext.Provider>
    );
  }
}

export default AudioProvider;