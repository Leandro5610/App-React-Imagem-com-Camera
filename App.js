import React ,{ Component } from "react";
import { Platform, StyleSheet, Text, View, Button,TouchableHighlight } from "react-native";

import PictureList from "./app/components/PictureList";
import CameraDialog from "./app/components/CameraDialog";
export default class App extends Component{
state={
   pictureList:[
  {id:'1',url:'https://i.pinimg.com/originals/d0/64/b3/d064b36ef3377254b0a8cf65c245e0fa.jpg'},
  {id:'2',url:'https://i.pinimg.com/originals/d0/64/b3/d064b36ef3377254b0a8cf65c245e0fa.jpg'},
  {id:'2',url:'https://i.pinimg.com/originals/d0/64/b3/d064b36ef3377254b0a8cf65c245e0fa.jpg'}




   ],
   isModalOpen: false
}
onPictureSelect = (item) =>{

}
openModal = () =>{

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
        <CameraDialog isOpen={state.isModalOpen}/>
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