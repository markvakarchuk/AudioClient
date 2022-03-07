import { Component } from "react";

export class audioControls extends Component {
    constructor(props) {
        super(props);
        this.state = {
          permissionError: false,
          audioStreamObj: null,
          currentAudio: null, //{}
          isPlaying: false,
          playbackPosition: null,
          playbackDuration: null,
        };
      }

      componentDidMount() {
          console.log("componentDidMount()")
        //this.getPermission();
        if (this.state.audioStreamObj === null) {
            try {
                Audio.setAudioModeAsync({
                    allowsRecordingIOS: false,
                    interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
                    playsInSilentModeIOS: true,
                    interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
                    shouldDuckAndroid: true,
                    staysActiveInBackground: true,
                    playThroughEarpieceAndroid: true
                })
    
                this.loadAudio()
            } catch (e) {
                console.log(e)
            }
        }
      }

      loadAudio() {
		const { currentIndex, isPlaying, volume } = this.state
		try {
			const audioStreamObj = new Audio.Sound()
			const source = {
				uri: stream_uri
			}

			const status = {
				shouldPlay: isPlaying,
				volume: volume
			}

			playbackInstance.setOnPlaybackStatusUpdate(this.onPlaybackStatusUpdate)
			playbackInstance.loadAsync(source, status, false)
			this.setState({
				playbackInstance
			})
		} catch (e) {
			console.log(e)
		}
	}

}