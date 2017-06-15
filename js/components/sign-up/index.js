import React, { Component } from 'react';
import { Image, Platform, StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';

import { Container, Content, Text, Item, Input, Button, Icon, View, Left, Right } from 'native-base';

import styles from './styles';
import commonColor from '../../../native-base-theme/variables/commonColor';

const bg = require('../../../images/image.png');
const logo = require('../../../images/logo.png');

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      offset: {
        x: 0,
        y: 0,
      },
    };
    this.constructor.childContextTypes = {
      theme: React.PropTypes.object,
    };
  }


  render() {

    return (
      <Container>
        <StatusBar
          backgroundColor={commonColor.statusBarColor}
          barStyle="light-content"
        />
        <Content scrollEnabled={true} bounces={false}>
          <Image source={bg} style={styles.background} >
           <View style={styles.bgTop}>
            <Image source={logo} style={Platform.OS === 'android' ? styles.aShadow : styles.iosShadow} />

            <View style={styles.bg}>
              <Item style={styles.inputGrp, styles.inputGrpFirst}>
                <Input
                  placeholder="Username"
                  placeholderTextColor="#FFF"
                  style={styles.input}
                />
              </Item>

              <Item style={styles.inputGrp}>
                <Input
                  placeholder="Email"
                  placeholderTextColor="#FFF"
                  style={styles.input}
                />
              </Item>

              <Item style={styles.inputGrp}>
                <Input
                  placeholder="Password"
                  secureTextEntry
                  placeholderTextColor="#FFF"
                  style={styles.input}
                />
              </Item>

              </View>
              <View style={styles.btnView}>
                <Button
                  rounded primary block 
                  style={styles.loginBtn, styles.btnCreate}
                  onPress={() => Actions.home({ username: this.state.username, password: this.state.password })}
                >
                  <Text style={styles.btnText}>
                      Create
                  </Text>
                </Button>

                <Text style={styles.smallText}>or</Text>
                
                <Button
                  rounded primary block 
                  style={styles.loginBtn, styles.btnFacebook}
                  onPress={() => Actions.walkthrough({ username: this.state.username, password: this.state.password })}
                >
                  <Text style={styles.btnText}>Facebook</Text>
                </Button>
    
              </View>

            <Text style={styles.tinyText}>By using this app you agree with the terms of service</Text>
            </View>
          </Image>

        </Content>
      </Container>
    );
  }
}

export default connect()(SignUp);
