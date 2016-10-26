
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Container, Content, Text, Icon, List, ListItem } from 'native-base';

import navigateTo from '../../actions/sideBarNav';
import styles from './style';

const singUp = require('../../../images/BG-signUp.png');

class SideBar extends Component {

  static propTypes = {
    navigateTo: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Container>
        <Image source={singUp} style={styles.background} >
          <Content style={styles.drawerContent}>
            <List foregroundColor={'white'} >
              <ListItem
                button iconLeft
                onPress={() => this.navigateTo('home')}
                style={styles.links}
              >
                <Icon name="ios-grid-outline" />
                <Text style={styles.linkText} >HOME</Text>
              </ListItem>

              <ListItem
                button iconLeft
                onPress={() => this.navigateTo('blankPage')}
                style={styles.links}
              >
                <Icon name="ios-keypad-outline" />
                <Text style={styles.linkText}>BLANK PAGE</Text>
              </ListItem>
            </List>
          </Content>
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(SideBar);
