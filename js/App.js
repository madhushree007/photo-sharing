
import React, { Component } from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';
import { Container, Text, View, InputGroup, Input, Icon } from 'native-base';
import Modal from 'react-native-modalbox';

import AppNavigator from './AppNavigator';
import ProgressBar from './components/loaders/ProgressBar';
import theme from './themes/base-theme';

const glow2 = require('../images/glow2.png');

const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  box: {
    padding: 10,
    backgroundColor: 'transparent',
    flex: 1,
    height: height - 70,
  },
  space: {
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal1: {
    height: 300,
  },
});

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showDownloadingModal: false,
      showInstalling: false,
      downloadProgress: 0,
    };
  }


  render() {
    return <AppNavigator />;
  }
}

export default App;
