
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';

const launchscreen = require('../../../images/launchscreen.png');

class SplashPage extends Component {


  static propTypes = {
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  componentWillMount() {
    setTimeout(() => {
      Actions.login({ type: ActionConst.REPLACE });
    }, 1500);
  }

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Image source={launchscreen} style={{ flex: 1, height: null, width: null }} />
    );
  }

}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps)(SplashPage);
