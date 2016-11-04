
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Content, Text, Button, Icon } from 'native-base';

import { openDrawer } from '../../actions/drawer';

import theme from '../../themes/base-theme';
import styles from './styles';

const {
  reset,
} = actions;

const signUp = require('../../../images/BG-signUp.png');
const headerLogo = require('../../../images/Header-Logo.png');

class Home extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
    reset: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  render() {
    return (
      <Container theme={theme}>
        <Image source={signUp} style={styles.container} >
          <Header>
            <View style={styles.header} >
              <View style={styles.rowHeader}>
                <Button
                  transparent
                  style={styles.btnHeader}
                  onPress={() => this.props.reset(this.props.navigation.key)}
                >
                  <Icon name="ios-power" style={{lineHeight: 30}} />
                </Button>

                <Image source={headerLogo} style={styles.imageHeader} />

                <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
                  <Icon name="ios-menu" />
                </Button>
              </View>
            </View>
          </Header>

          <Content padder>
            <Text style={styles.text}>Create something awesome . . .</Text>
          </Content>
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    reset: key => dispatch(reset([{ key: 'login' }], key, 0)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Home);
