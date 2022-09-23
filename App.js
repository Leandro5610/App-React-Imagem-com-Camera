import React ,{ Component } from "react";
//import { Platform, StyleSheet, Text, View, Button,TouchableHighlight } from "react-native";
import { RNCamera } from 'react-native-camera';
import { AppRegistry, Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import PictureList from "./app/components/PictureList";
import CameraDialog from "./app/components/CameraDialog";
export default class App extends Component{
state={
   pictureList:[
  {id:'1',url:'https://i.pinimg.com/originals/0c/96/ed/0c96ed65f3799887864e2a133f597056.jpg'},
  {id:'2',url:'https://i.pinimg.com/originals/0c/96/ed/0c96ed65f3799887864e2a133f597056.jpg'},
  {id:'2',url:'https://i.pinimg.com/originals/0c/96/ed/0c96ed65f3799887864e2a133f597056.jpg'}




   ],
   isModalOpen: false
}
onPictureSelect = (item) =>{

}
openModal = () =>{
  this.setState({isModalOpen:true})
}
closeModal =(response) =>{
  this.setState({isModalOpen:false});
}

  render(){
    const {state} = this;
    return(
      <View style={styles.container}>
        <PictureList list={state.pictureList} onClick={this.onPictureSelect}/>
        <View style={styles.footer}>
          <Button onPress={this.openModal}
          title="NovaFoto"
          color='#0062ac'
          />
        </View>
        <CameraDialog isOpen={state.isModalOpen} onClose={this.closeModal}/>
      </View>
    )
  }
  
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems:"center",
      backgroundColor: '#F5FCFF'

    },
    footer :{
      padding: 15,
      backgroundColor: '#999',
      width: '100%',
      textAlign: 'center'
    }
});

/*render() {
  return (
    <View style={styles.container}>
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.on}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        onGoogleVisionBarcodesDetected={({ barcodes }) => {
          console.log(barcodes);
        }}
      />
      <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
        <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.capture}>
          <Text style={{ fontSize: 14 }}> SNAP </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

takePicture = async () => {
  if (this.camera) {
    const options = { quality: 0.5, base64: true };
    const data = await this.camera.takePictureAsync(options);
    console.log(data.uri);
  }
};
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  flexDirection: 'column',
  backgroundColor: 'black',
},
preview: {
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
},
capture: {
  flex: 0,
  backgroundColor: '#fff',
  borderRadius: 5,
  padding: 15,
  paddingHorizontal: 20,
  alignSelf: 'center',
  margin: 20,
},
});
AppRegistry.registerComponent('App', () => ExampleApp);*/
