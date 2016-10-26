
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Content, Button, Icon } from 'native-base';

import { openDrawer } from '../../actions/drawer';
// import HeaderContent from './../headerContent/';

import theme from '../../themes/base-theme';
import styles from './styles';

const {
  popRoute,
} = actions;

const headerLogo = require('../../../images/Header-Logo.png');
const glow2 = require('../../../images/glow2.png');

class BlankPage extends Component { // eslint-disable-line

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Container theme={theme} style={{ backgroundColor: '#01cca1' }}>
        <Image source={glow2} style={styles.container} >
          <Header>
            <View style={styles.header} >
              <View style={styles.rowHeader}>
                <Button
                  transparent
                  style={styles.btnHeader}
                  onPress={() => this.popRoute()}
                >
                  <Icon name="ios-arrow-back" />
                </Button>

                <Image source={headerLogo} style={styles.imageHeader} />

                <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
                  <Icon name="ios-menu" />
                </Button>
              </View>
            </View>
          </Header>

          <Content />
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(BlankPage);
