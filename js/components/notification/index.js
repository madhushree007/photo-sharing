

import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import { Container, Header, Text, Input, Right, Button, Icon, Body, Item } from 'native-base';

import styles from './style';
import FooterNew from '../footerNew';


import CustomTabBar from '../channels/CustomTabBar';
import TabOne from './tabOne';
import TabTwo from './tabTwo';

class Notification extends Component {

  static propTypes = {
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      offset: {
        x: 0,
        y: 0,
      },
    };
    this.constructor.childContextTypes = {
      theme: React.PropTypes.object,
    };
  }

  render() {
    return (
      <Container>
        <Image source={require('../../../images/glow2.png')} style={styles.container} >
          <Header style={{ backgroundColor: '#373737' }}>
          <View style={styles.searchContainer}>
            <Item rounded style={styles.inputGrp}>
                <Icon name="ios-search-outline" style={styles.iconSearch} />
                <Input placeholder="Search" placeholderTextColor="rgba(0,0,0,0.5)" style={styles.input} />
              </Item>
          </View>
          <Right>
            <Button
              transparent
              onPress={() => Actions.login({ type: ActionConst.RESET  })}
            >
              <Text>Cancle</Text>
            </Button>
          </Right>
        </Header>

          <View style={styles.commentHeadbg}>
            <ScrollableTabView renderTabBar={() => <CustomTabBar someProp={'here'} />}>
              <TabOne tabLabel="Following" />
              <TabTwo tabLabel="You" />
            </ScrollableTabView>
          </View>
        </Image>
        <FooterNew />
      </Container>
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

export default connect(mapStateToProps)(Notification);
