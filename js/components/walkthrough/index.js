import React, { Component } from 'react';
import { Platform, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { actions } from 'react-native-navigation-redux-helpers';

import { Container, Content, Text, Button, Icon, View } from 'native-base';
import Swiper from 'react-native-swiper';

import styles from './styles';

const deviceWidth = Dimensions.get('window').width;
const {
  replaceAt,
  pushRoute,
} = actions;
class Walkthrough extends Component {

  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceRoute(route) {
    this.props.replaceAt('walkthrough', { key: route }, this.props.navigation.key);
  }
  render() {
    return (
      <Container>
        <Content scrollEnabled={false}>
          <Swiper
            loop={false}
            width={deviceWidth + 3}
            dot={<View style={styles.swiperDot} />}
            activeDot={<View style={styles.swiperActiveDot} />}
          >
            <View style={styles.slides}>
              <Text style={Platform.OS === 'android' ? styles.apaginationText : styles.iospaginationText}>
                                1 of 3
                            </Text>
              <Icon name="ios-paper-outline" style={styles.imageIcons} />
              <Text numberOfLines={2} style={Platform.OS === 'android' ? styles.aText : styles.iosText}>
                                Explore the latest news from your mobile device
                            </Text>
              <Button
                transparent rounded
                onPress={() => Actions.home()}
                style={styles.Button}
              >
                <Text style={{ color: '#FFF', fontWeight: '600' }}>Skip To App</Text>
              </Button>
            </View>

            <View style={styles.slides}>
              <Text style={Platform.OS === 'android' ? styles.apaginationText : styles.iospaginationText}>
                                2 of 3
                            </Text>
              <Icon name="ios-information-circle-outline" style={styles.imageIcons} />
              <Text numberOfLines={2} style={Platform.OS === 'android' ? styles.aText : styles.iosText}>
                                Get News Feed of variuos domains at one place
                            </Text>
              <Button
                transparent rounded
                onPress={() => Actions.home()}
                style={styles.Button}
              >
                <Text style={{ color: '#FFF', fontWeight: '600' }}>Skip To App</Text>
              </Button>
            </View>

            <View style={styles.slides}>
              <Text style={Platform.OS === 'android' ? styles.apaginationText : styles.iospaginationText}>
                                3 of 3
                            </Text>
              <Icon name="ios-volume-up-outline" style={styles.imageIcons} />
              <Text numberOfLines={2} style={Platform.OS === 'android' ? styles.aText : styles.iosText}>
                                Get going with the React Native Flat App Theme
                            </Text>
              <Button
                transparent rounded
                onPress={() => Actions.home()}
                style={styles.Button}
              >
                <Text style={{ color: '#FFF', fontWeight: '600' }}>Continue To App</Text>
              </Button>
            </View>
          </Swiper>
        </Content>
      </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindActions)(Walkthrough);
