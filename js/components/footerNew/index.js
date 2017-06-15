import React, { Component } from 'react';
import { Image, View, TouchableOpacity, Platform, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Footer, FooterTab, Content, Text, Button, Icon, Card, CardItem, Left, Body, Right } from 'native-base';

import { Grid, Col } from 'react-native-easy-grid';
import Swiper from 'react-native-swiper';
import { openDrawer } from '../../actions/drawer';


import styles from './styles';

class FooterNew extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  render() {
    return (

<Footer>
    <FooterTab>
        <Button>
            <Icon name="home" onPress={() => Actions.home()} />
        </Button>
        <Button>
            <Icon name="search" onPress={() => Actions.search()} />
        </Button>
        <Button>
            <Icon name="add-circle" onPress={() => Actions.settings()} />
        </Button>
        <Button>
            <Icon name="heart" onPress={() => Actions.notification()} />
        </Button>
        <Button>
            <Icon name="person" onPress={() => Actions.profile()} />
        </Button>
    </FooterTab>
</Footer>
    );
  }
}


function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(FooterNew);