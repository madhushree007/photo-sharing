import React, { Component } from 'react';
import { Image, Platform, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Text, Item, Input, Button, Icon, View, Left, Right } from 'native-base';

import styles from './styles';
import commonColor from '../../../native-base-theme/variables/commonColor';

const bg = require('../../../images/image.png');
const logo = require('../../../images/logo.png');

class Login extends Component {

  static propTypes = {
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
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
              <Item style={styles.inputGrp}>
                <Input
                  placeholder="Username or Email"
                  onChangeText={username => this.setState({ username })}
                  placeholderTextColor="#FFF"
                  style={styles.input}
                />
              </Item>

              <Item style={styles.inputGrp}>
                <Input
                  placeholder="Password"
                  secureTextEntry
                  placeholderTextColor="#FFF"
                  onChangeText={password => this.setState({ password })}
                  style={styles.input}
                />
              </Item>
              <View style={styles.otherLinksContainer}>
                <Right>
                  <Button transparent style={{ alignSelf: 'flex-end' }} onPress={() => Actions.needhelp()}>
                    <Text style={styles.helpBtns}>
                          Forgot Password?
                      </Text>
                  </Button>
                </Right>
              </View>
              </View>
              <View style={styles.btnView}>
                <Button
                  rounded primary block 
                  style={styles.loginBtn, styles.btnCreate}
                  onPress={() => Actions.home({ username: this.state.username, password: this.state.password })}
                >
                  <Text style={styles.btnText}>
                      Login
                  </Text>
                </Button>

                <Text style={styles.smallText}>or</Text>

                <Button
                  rounded primary block 
                  style={styles.loginBtn, styles.btnFacebook}
                  onPress={() => Actions.walkthrough({ username: this.state.username, password: this.state.password })}
                >
                  <Text style={styles.btnTextWhite}>Facebook</Text>
                </Button>
                <Text style={styles.smallText} onPress={() => Actions.signUp()}>Not yet registered? Sign up</Text>
              </View>

            <Text style={styles.tinyText}>By using this app you agree with the terms of service</Text>
            </View>
          </Image>

        </Content>
      </Container>
    );
  }
}


function bindActions(dispatch) {
  return {
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindActions)(Login);
