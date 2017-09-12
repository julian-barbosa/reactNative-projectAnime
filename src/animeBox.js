/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image    
} from 'react-native';

import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

export default class AnimeBox extends Component { 

    render() {        
        const {image,name} = this.props.attr;
        return (           
                <View style={styles.box}>
                    <Image style={styles.imageBox} source={{ uri: image }} ></Image>
                    <View style={{flex: 1,backgroundColor:'#003352'}}>
                        <Text style={{color:'#fff',textAlign:'center', fontSize: 20}}>{name} </Text>    
                        <View style={{flex:1, flexDirection:'row', justifyContent:'space-around', paddingTop:20 }}>
                            <Icon name='md-heart-outline' size={30} color='#FFF' />    
                            <Icon name='md-man' size={30} color='#FFF' /> 
                        </View>
                        <View style={{flex:1, flexDirection:'row', justifyContent:'space-around', paddingTop:0 }}>     
                        <Text style={{color:'#fff',textAlign:'center', fontSize: 15}}>1500 </Text> 
                        <Text style={{color:'#fff',textAlign:'center', fontSize: 15}}>250 </Text>                 
                        </View>
                    </View>
                            
                </View>      
        );
    }
}

const styles = StyleSheet.create({ 
    imageBox: {
        width: '50%',
        height: '100%'
        
    },
    box: {
        backgroundColor:'black',
        height: 150,
        flexDirection:'row',      
        margin: 5,     
        elevation:10
    }
    
    
});

