

import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Text, InputGroup, Input, Button, Icon, View } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import { pushNewRoute, replaceRoute } from '../../actions/route';


import login from './login-theme';
import styles from './styles';

const bg = require('../../../images/BG.png');
const logo = require('../../../images/logo.png');

class Login extends Component {

  static propTypes = {
    replaceRoute: React.PropTypes.func,
    pushNewRoute: React.PropTypes.func,
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


  replaceRoute(route, passProps) {
    this.props.replaceRoute(route, passProps);
  }

  pushNewRoute(route, passProps) {
    this.props.pushNewRoute(route, passProps);
  }

  render() {
    return (
      <Container>
        <Content theme={login}>
          <Image source={bg} style={styles.background} >
            <Image source={logo} style={Platform.OS === 'android' ? styles.aShadow : styles.iosShadow} />

            <View style={styles.bg}>
              <InputGroup borderType="rounded" style={[styles.inputGrp, { borderWidth: 0, paddingLeft: 15 }]}>
                <Icon name="ios-person-outline" />
                <Input
                  placeholder="Username"
                  onChangeText={username => this.setState({ username })}
                />
              </InputGroup>

              <InputGroup borderType="rounded" style={[styles.inputGrp, { borderWidth: 0, paddingLeft: 15 }]}>
                <Icon name="ios-unlock-outline" />
                <Input
                  placeholder="Password"
                  secureTextEntry
                  onChangeText={password => this.setState({ password })}
                  style={styles.input}
                />
              </InputGroup>

              <Button
                rounded primary block large
                style={styles.loginBtn}
                textStyle={Platform.OS === 'android' ? { marginTop: 5, fontSize: 16 } : { fontSize: 16, marginTop: -10, fontWeight: '900' }}
                onPress={() => this.replaceRoute('home', { username: this.state.username, password: this.state.password })}
              >
                  Get Started
              </Button>

              <View style={styles.otherLinksContainer}>
                <Grid>
                  <Col>
                    <Button transparent style={{ alignSelf: 'flex-start' }}>
                      <Text style={styles.helpBtns}>
                          Create Account
                      </Text>
                    </Button>
                  </Col>
                  <Col>
                    <Button transparent style={{ alignSelf: 'flex-end' }}>
                      <Text style={styles.helpBtns}>
                          Need Help?
                      </Text>
                    </Button>
                  </Col>
                </Grid>
              </View>
            </View>
          </Image>
        </Content>
      </Container>
    );
  }
}


function bindActions(dispatch) {
  return {
    replaceRoute: (route, passprops) => dispatch(replaceRoute(route, passprops)),
    pushNewRoute: (route, passprops) => dispatch(pushNewRoute(route, passprops)),
  };
}

export default connect(null, bindActions)(Login);
