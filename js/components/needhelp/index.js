

import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import { actions } from 'react-native-navigation-redux-helpers';
import { Actions } from 'react-native-router-flux';

import { Container, Content, Text, Button, Icon, Item, Input, View } from 'native-base';

import styles from './styles';

const {
  popRoute,
} = actions;
class NeedHelp extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
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

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  render() {
    return (
      <Container>
        <Content contentOffset={this.state.offset} scrollEnabled={false}>
          <View>
            <Image source={require('../../../images/BG-signUp.png')} style={styles.background} >

              <Content padder scrollEnabled={false}>
                <Text style={styles.signupHeader}>
                                    Forgot Your Password?
                                </Text>
                <View style={styles.signupContainer}>
                  <Item rounded style={styles.inputGrp}>
                    <Icon name="mail-open" />
                    <Input
                      placeholder="Email" style={styles.input}
                      placeholderTextColor="#FFF"
                    />
                  </Item>

                  <Button
                    rounded block bordered
                    onPress={() => this.popRoute()}
                    style={styles.signupBtn}
                  >
                    <Text style={{ color: '#FFF' }}>Send Email</Text>
                  </Button>

                  <TouchableOpacity onPress={() => Actions.pop()}>
                    <Text style={styles.termsText}>Back To Login</Text>
                  </TouchableOpacity>
                </View>
              </Content>
            </Image>
          </View>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(NeedHelp);
