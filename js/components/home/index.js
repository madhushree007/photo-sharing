
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content, Text, Button, Icon } from 'native-base';

import { replaceRoute } from '../../actions/route';
import { openDrawer } from '../../actions/drawer';


import theme from '../../themes/base-theme';
import styles from './styles';

const signUp = require('../../../images/BG-signUp.png');
const headerLogo = require('../../../images/Header-Logo.png');

class Home extends Component {

  static propTypes = {
    replaceRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    username: React.PropTypes.string,
    password: React.PropTypes.string,
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  render() {
    return (
      <Container theme={theme}>
        <Image source={signUp} style={styles.container} >
          <Header>
            <View style={styles.header} >
              <View style={styles.rowHeader}>
                <Button transparent style={styles.btnHeader} onPress={() => this.replaceRoute('login')}>
                  <Icon name="ios-power" />
                </Button>

                <Image source={headerLogo} style={styles.imageHeader} />

                <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
                  <Icon name="ios-menu" />
                </Button>
              </View>
            </View>
          </Header>

          <Content padder>
            <Text style={styles.text}>Username: {this.props.username}</Text>
            <Text style={styles.text}>Password: {this.props.password}</Text>
          </Content>
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    replaceRoute: route => dispatch(replaceRoute(route)),
  };
}

export default connect(null, bindAction)(Home);
