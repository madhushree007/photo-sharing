

import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';

import ScrollableTabView from 'react-native-scrollable-tab-view';

import { Container, Header, Text, Input, Right, Button, Icon, Tab, Tabs, TabHeading, Item } from 'native-base';

import styles from './style';
import FooterNew from '../footerNew';


import CustomTabBar from '../channels/CustomTabBar';
import TabOne from './tabOne';
import TabTwo from './tabTwo';
import TabThree from './tabThree';
import TabFour from './tabFour';

class SearchResult extends Component {

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
          <Header style={{ borderWidth: 1, borderColor: '#FFF' }} hasTabs >
          
          <Right>
            <Button
              transparent
              onPress={() => Actions.login({ type: ActionConst.RESET  })}
            >
              <Text>Cancle</Text>
            </Button>
          </Right>
        </Header>
         <Tabs>
              <Tab heading={ <TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
                    <TabOne />
                </Tab>
                <Tab heading={ <TabHeading><Text>No Icon</Text></TabHeading>}>
                    <TabTwo />
                </Tab>
                <Tab heading={ <TabHeading><Icon name="apps" /></TabHeading>}>
                    <TabThree />
                </Tab>
            </Tabs>
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

export default connect(mapStateToProps)(SearchResult);
