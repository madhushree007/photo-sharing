

import React, { Component } from 'react';
import { Image, View, Switch, TouchableOpacity, Platform } from 'react-native';
import { connect } from 'react-redux';

import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Content, Text, Button, Icon, Thumbnail, Item, Input, Left, Right, Body } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';

import styles from './styles';
import FooterNew from '../footerNew';

const primary = require('../../themes/variable').brandPrimary;

class Settings extends Component {

  static propTypes = {
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  constructor(props) {
    super(props);
    this.state = {
      monSwitch: true,
      tueSwitch: false,
      wedSwitch: false,
      thuSwitch: false,
      friSwitch: false,
      satSwitch: false,
      sunSwitch: false,
      Username: '',
      email: '',
      password: '',
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
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer} >
              <Icon active name="menu" />
            </Button>
          </Left>

          <Body>
            <Image source={require('../../../images/Header-Logo.png')} style={styles.imageHeader} />
          </Body>
          <Right>
            <Button
              transparent
              onPress={() => Actions.login({ type: ActionConst.RESET  })}
            >
              <Icon active name="power" />
            </Button>
          </Right>
        </Header>

        <Content showsVerticalScrollIndicator={false}>
        
          <View style={styles.notificationContainer}>
            <Text style={styles.notificationHeader}>FOLLOW PEOPLE</Text>
            <View>
              <Grid style={{ marginBottom: 10 }}>
                <Col>
                  <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Monday</Text>
                </Col>
                <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                  <Switch
                    onValueChange={value => this.setState({ monSwitch: value })}
                    onTintColor={primary}
                    style={styles.switch}
                    thumbTintColor="#ccc"
                    tintColor="#aaa"
                    value={this.state.monSwitch}
                  />
                </Col>
              </Grid>
              <Grid style={{ marginBottom: 10 }}>
                <Col>
                  <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Tuesday</Text>
                </Col>
                <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                  <Switch
                    onValueChange={value => this.setState({ tueSwitch: value })}
                    onTintColor={primary}
                    style={styles.switch}
                    thumbTintColor="#ccc"
                    tintColor="#aaa"
                    value={this.state.tueSwitch}
                  />
                </Col>
              </Grid>
              <Grid style={{ marginBottom: 10 }}>
                <Col>
                  <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Wednesday</Text>
                </Col>
                <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                  <Switch
                    onValueChange={value => this.setState({ wedSwitch: value })}
                    onTintColor={primary}
                    style={styles.switch}
                    thumbTintColor="#ccc"
                    tintColor="#aaa"
                    value={this.state.wedSwitch}
                  />
                </Col>
              </Grid>
              <Grid style={{ marginBottom: 10 }}>
                <Col>
                  <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Thursday</Text>
                </Col>
                <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                  <Switch
                    onValueChange={value => this.setState({ thuSwitch: value })}
                    onTintColor={primary}
                    style={styles.switch}
                    thumbTintColor="#ccc"
                    tintColor="#aaa"
                    value={this.state.thuSwitch}
                  />
                </Col>
              </Grid>
              <Grid style={{ marginBottom: 10 }}>
                <Col>
                  <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Friday</Text>
                </Col>
                <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                  <Switch
                    onValueChange={value => this.setState({ friSwitch: value })}
                    onTintColor={primary}
                    style={styles.switch}
                    thumbTintColor="#ccc"
                    tintColor="#aaa"
                    value={this.state.friSwitch}
                  />
                </Col>
              </Grid>
              <Grid style={{ marginBottom: 10 }}>
                <Col>
                  <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Saturday</Text>
                </Col>
                <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                  <Switch
                    onValueChange={value => this.setState({ satSwitch: value })}
                    onTintColor={primary}
                    style={styles.switch}
                    thumbTintColor="#ccc"
                    tintColor="#aaa"
                    value={this.state.satSwitch}
                  />
                </Col>
              </Grid>
              <Grid style={{ marginBottom: 10 }}>
                <Col>
                  <Text style={Platform.OS === 'android' ? styles.aswitchText : styles.switchText}>Sunday</Text>
                </Col>
                <Col style={Platform.OS === 'android' ? styles.aswitchContainer : styles.switchContainer}>
                  <Switch
                    onValueChange={value => this.setState({ sunSwitch: value })}
                    onTintColor={primary}
                    style={styles.switch}
                    thumbTintColor="#ccc"
                    tintColor="#aaa"
                    value={this.state.sunSwitch}
                  />
                </Col>
              </Grid>
            </View>
          </View>
        </Content>
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

export default connect(mapStateToProps, bindAction)(Settings);
