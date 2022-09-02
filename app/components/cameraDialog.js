import React, {Component} from "react";
import { StyleSheet, View, Image, Modal, TouchableOpacity, Text, Button } from "react-native";

class cameraDialog extends Component{

    static defaultProps={
            isOpen: false
    }
    state ={
        currentImage: 'https://muramasa.com.br/eiichiro-oda-agradece-fas-italianos-com-nova-ilustracao-de-luffy/'
    }
    render(){
        const {props, state} = this;
        return (
            <Modal
                visible={props.isOpen}
                transparent={false}
                animationType="slide"
                >
                <View>
                    <Image source={{uri: state.currentImage}}/>
                    <TouchableOpacity>
                        <Text>X</Text>
                    </TouchableOpacity>
                </View>
                <View>
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
              
            </Modal>
        );
    }
}
export default cameraDialog