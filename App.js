import React ,{ Component } from "react";
import { Platform, StyleSheet, Text, View, Button,TouchableHighlight } from "react-native";

import pictureList from "./app/components/pictureList";
import cameraDialog
 from "./app/components/cameraDialog";
export default class App extends Component{
state={
   pictureList:[
  {id:'1',url:'https://wall.alphacoders.com/big.php?i=1233948'},
  {id:'2',url:'https://wall.alphacoders.com/big.php?i=1233948'},
  {id:'3',url:'https://wall.alphacoders.com/big.php?i=1233948'}



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
        <pictureList list={state.pictureList} onClick={this.onPictureSelect}/>
        <View style={styles.footer}>
          <Button onPress={this.openModal}
          title="NovaFoto"
          color='#0062ac'
          />
        </View>
        <cameraDialog isOpen={state.isModalOpen}/>
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