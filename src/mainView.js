/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    Image
} from 'react-native';

import { CheckBox } from 'react-native-elements';

import InformationList from './informationList';

export default class ProjectTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }

    fillArray() {
        const informationList2 = Array(500);
        for (let i = 0; i < 500; i++) {
            const envio = {
                image: 'https://2.gravatar.com/avatar/b5d5383385b2dd615bb34a7114d3f49f?s=256&d=identicon&r=G',
                name: 'Julian' + i
            }
            informationList2.push(envio);
        }
        return informationList2;
    }

    render() {

        const envio = {
            image: 'https://2.gravatar.com/avatar/b5d5383385b2dd615bb34a7114d3f49f?s=256&d=identicon&r=G',
            name: 'Julian'
        }
        const informationList2 = this.fillArray();
        return (
            <View style={styles.container} >
                <View style={styles.titleView}>
                    <Text style={styles.title}>
                        TOP ANIMES
                    </Text>
                </View>
                <InformationList informationList={informationList2} />
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

AppRegistry.registerComponent('ProjectTwo', () => ProjectTwo);
