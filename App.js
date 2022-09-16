import React ,{ Component } from "react";
import { Platform, StyleSheet, Text, View, Button,TouchableHighlight } from "react-native";

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