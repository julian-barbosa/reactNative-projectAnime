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

import { CheckBox } from 'react-native-elements'

export default class ProjectTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  onPress() {
    this.setState({ checked: !this.state.checked })
  }
  render() {
    const image = 'https://i.pinimg.com/originals/aa/ed/8b/aaed8b69aa08dd107529cdd1f4648646.jpg';
    return (
      <View style={styles.container}>
        <Image style={styles.imageBackground} source={{ uri: image }} >
          <View style={styles.contentCenter}>
            <Text style={styles.welcome}>
              Create Your Account2
            </Text>
            <View style={styles.groupElement}>
              <Text style={styles.instructions}>
                Name
              </Text>
              <TextInput
                style={styles.inputText}
                onChangeText={(text) => this.setState({ text })}
              />
            </View>
            <View style={styles.groupElement}>
              <Text style={styles.instructions}>
                Email
            </Text>
              <TextInput
                style={styles.inputText}
                onChangeText={(text) => this.setState({ text })}
              />
            </View>
            <View style={styles.groupElement}>
              <CheckBox
                title='I have read and accept service request privacy cookie policy'
                checked={this.state.checked}
                containerStyle={{ backgroundColor: "#455265", borderWidth: 0 }}
                textStyle={{ color: "#fff" }}
                onPress={this.onPress.bind(this)}
              />
              <Button
                onPress={this.onPress.bind(this)}
                title="Next"
                color="#303c4a"
              />
            </View>
          </View>
        </Image>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#455265'
  },
  contentCenter: {
    margin: '5%',
  },
  groupElement: {
    marginTop: 20

  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFF'
  },
  instructions: {
    color: '#333333',
    marginBottom: 5,
    color: '#FFF'
  },
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#FFF'
  },
  buttonSubmit: {

  },
  imageBackground: {
    width: '100%',
    height: '100%'
  }
});

AppRegistry.registerComponent('ProjectTwo', () => ProjectTwo);
