/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    ListView
} from 'react-native';

import BoxAnime from './animeBox';

export default class InformationList extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 != r2 });
        this.state = {
            dataSource: ds.cloneWithRows(props.informationList)
        };
    }

    componentWillReceiveProps(newProps){
        if(newProps.informationList !== this.props.informationList){
            this.state ={
                dataSource: this.state.dataSource.cloneWithRows(newProps.informationList)
            }
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(information) => <BoxAnime attr={information} />}
            />
        );
    }
}