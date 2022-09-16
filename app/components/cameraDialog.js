import React, {Component} from "react";
import { StyleSheet, View, Image, Modal, TouchableOpacity, Text, Button, } from "react-native";

class CameraDialog extends Component{

    static defaultProps={
            isOpen: false,
            onClose: () => {}
    }
    state ={
        currentImage: 'https://i.pinimg.com/originals/0c/96/ed/0c96ed65f3799887864e2a133f597056.jpg'
    }

    getImageFromClipboard=()=>{

    }


    save =()=>{
        this.props.onClose();
    }

    shot = () =>{

    }

    render(){
        const {props, state} = this;
        return (
            <Modal
                visible={props.isOpen}
                transparent={false}
                animationType="slide"
                >
                <View style={styles.modalView}>
                    <View style={styles.previewContainer}>
                    <Image source={{uri: state.currentImage}} style={styles.preview}/>
                    <TouchableOpacity onPress={props.onClose}>
                        <Text style={styles.closeButton}>X</Text>
                    </TouchableOpacity>
                    </View>

                    <View style={styles.buttonContainer}>
                        <Button
                        title="Salvar"
                        onPress={this.save}
                        color="#0062ac"
                        />
                   
                        <Button
                        title="Bater"
                        onPress={this.shot}
                        color="#0062ac"
                         />
                        <Button
                        title="Colar"
                        onPress={this.getImageFromClipboard}
                        color="#0062ac"
                        />
                   
                    </View>

                </View>
              
            </Modal>
        );
    }
}
export default CameraDialog;

const styles = StyleSheet.create({
    modalView:{
        flex:1
    },
    previewContainer:{
        backgroundColor:'#9494b8',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:"center"
    },

    preview:{
        width: 100,
        height: 75,
        borderWidth:2,
        borderColor:"black"
    },
    closeButton :{
        padding:15,
        backgroundColor:'red',
        fontSize:20,
        color:'white'
    },
    buttonContainer:{
        flexDirection:"row",
        justifyContent:'space-around',
        height:40,
        backgroundColor:'#9494b8'
    },

})