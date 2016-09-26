
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Icon, View, Button } from 'native-base';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';


import styles from './styles';

const headerLogo = require('../../../images/Header-Logo.png');

class HeaderContent extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }

  navigateTo() {
    this.props.closeDrawer();
  }


  popRoute() {
    this.props.popRoute();
  }

  render() {
    return (
      <View style={styles.header} >
        <View style={styles.rowHeader}>
          <Button transparent style={styles.btnHeader} onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Image source={headerLogo} style={styles.imageHeader} />
          <Button transparent style={styles.btnHeader} onPress={this.props.openDrawer} >
            <Icon name="ios-menu" />
          </Button>
        </View>
      </View>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: () => dispatch(closeDrawer()),
    popRoute: () => dispatch(popRoute()),
  };
}

export default connect(null, bindAction)(HeaderContent);
