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

import InformationList from './informationList';
import {getListName} from  "./apiClient.js";

export default class ProjectTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            elements: []
        };
    }
    
    componentDidMount(){
        getListName().then(data => this.setState({elements: data}));
    }

    render() {
        return (
            <View style={styles.container} >
                <View style={styles.titleView}>
                    <Text style={styles.title}>
                        TOP ANIMES
                    </Text>
                </View>
                <InformationList informationList={this.state.elements} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 25,
        padding:5,
        fontFamily:'fantasy'
    },
    titleView: {
        backgroundColor: 'black'
        
    }

});


