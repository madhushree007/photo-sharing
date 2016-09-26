
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Content, Text } from 'native-base';

import { popRoute } from '../../actions/route';
import { openDrawer } from '../../actions/drawer';

import HeaderContent from './../headerContent/';

import theme from '../../themes/base-theme';
import styles from './styles';

const glow2 = require('../../../images/glow2.png');

class BlankPage extends Component {
  static propTypes = {
    popRoute: React.PropTypes.func,
  }

  popRoute() {
    this.props.popRoute();
  }
  render() { // eslint-disable-line class-methods-use-this
    return (
      <Container theme={theme} style={{ backgroundColor: '#01cca1' }}>
        <Image source={glow2} style={styles.container} >
          <Header>
            <HeaderContent />
          </Header>

          <Content padder foregroundColor="#000">
            <Text>
              Create Something Awesome . . .
            </Text>
          </Content>
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute()),
  };
}

export default connect(null, bindAction)(BlankPage);
