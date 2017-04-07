import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { Actions } from 'react-native-router-flux';

import { Container, Content, Text, Button, Icon, Item, Input, View } from 'native-base';

import styles from './styles';

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
        <Image source={require('../../../images/BG-signUp.png')} style={styles.background} >
          <Content padder>
            <Text style={styles.signupHeader}>
                                    CREATE ACCOUNT
                                </Text>
            <View style={styles.signupContainer}>
              <Item rounded style={styles.inputGrp}>
                <Icon name="person" />
                <Input
                  placeholder="Username" style={styles.input}
                  placeholderTextColor="#FFF"
                />
              </Item>

              <Item rounded style={styles.inputGrp}>
                <Icon name="mail-open" />
                <Input
                  placeholder="Email" style={styles.input}
                  placeholderTextColor="#FFF"
                />
              </Item>

              <Item rounded style={styles.inputGrp}>
                <Icon name="unlock" />
                <Input
                  placeholder="Password" secureTextEntry style={styles.input}
                  placeholderTextColor="#FFF"
                />
              </Item>

              <Button
                rounded bordered block
                onPress={() => Actions.pop()}
                style={styles.signupBtn}
              >
                <Text style={{ color: '#FFF' }}>Continue</Text>
              </Button>

              <Button block transparent style={{ marginTop: 10 }}>
                <Text style={styles.termsText}>Terms & Conditions</Text>
              </Button>
            </View>
          </Content>
        </Image>
      </Container>
    );
  }
}

export default connect()(SignUp);
