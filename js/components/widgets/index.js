

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, Platform } from 'react-native';

import { Container, Header, Content, Text, Button, Icon, Left, Right, Body } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';

import theme from '../../themes/base-theme';
import styles from './styles';

const primary = require('../../themes/variable').brandPrimary;

class Widgets extends Component {

  render() {
    return (
      <Container theme={theme}>
        <Image source={require('../../../images/glow2.png')} style={styles.container} >
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
              <Button transparent>
                <Icon active name="add" />
              </Button>
            </Right>
          </Header>

          <Content showsVerticalScrollIndicator={false}>
            <View style={styles.overviewHeaderContainer}>
              <Text style={styles.overviewHeader}>WIDGETS</Text>
            </View>

            <Image source={require('../../../images/Widgets/widget1.png')} style={styles.mainWidget}>
              <Grid style={styles.mainWidgetContainer}>
                <Col>
                  <Icon name="ios-cloud-outline" style={{ fontSize: 40 }} />
                  <Text style={{ fontWeight: '700' }}>Mostly Cloudy</Text>
                  <Text style={{ opacity: 0.7, fontWeight: '700' }}>New York</Text>
                </Col>
                <Col style={{ alignItems: 'flex-end' }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.weather}>76</Text>
                    <Icon name="ios-radio-button-off" style={{ fontSize: 16, marginTop: 5 }} />
                  </View>
                </Col>
              </Grid>

              <Grid style={styles.weatherInfoContainer}>
                <Col style={{ alignItems: 'center' }}>
                  <Text style={styles.weatherInfo}>65</Text>
                  <Text style={styles.weatherTime}>8 AM</Text>
                </Col>
                <Col style={{ alignItems: 'center' }}>
                  <Text style={styles.weatherInfo}>86</Text>
                  <Text style={styles.weatherTime}>12 PM</Text>
                </Col>
                <Col style={{ alignItems: 'center' }}>
                  <Text style={styles.weatherInfo}>79</Text>
                  <Text style={styles.weatherTime}>4 PM</Text>
                </Col>
                <Col style={{ alignItems: 'center' }}>
                  <Text style={styles.weatherInfo}>62</Text>
                  <Text style={styles.weatherTime}>8 PM</Text>
                </Col>
                <Col style={{ alignItems: 'center' }}>
                  <Text style={styles.weatherInfo}>59</Text>
                  <Text style={styles.weatherTime}>12 AM</Text>
                </Col>
                <Col style={{ alignItems: 'center' }}>
                  <Text style={styles.weatherInfo}>52</Text>
                  <Text style={styles.weatherTime}>4 AM</Text>
                </Col>
              </Grid>
            </Image>

            <Grid>
              <Col>
                <Image source={require('../../../images/Widgets/widget2.png')} style={styles.otherWidget}>
                  <View style={styles.otherWidgetContainer}>
                    <Text style={styles.widgetName}>
                                            KUMAR SANKET
                                        </Text>
                    <Text style={styles.blueRatingPerc}>+0.51%</Text>
                    <Text style={styles.ratingNum}>5,055.55</Text>
                    <Button
                      transparent
                      rounded small
                      style={styles.detailsBtn}
                      textStyle={Platform.OS === 'android' ?
                                                { color: primary, fontSize: 12, fontWeight: '900', textAlign: 'center' } :
                                                { color: primary, fontSize: 12, fontWeight: '900', textAlign: 'center' }}
                    >
                      <Text>Details</Text>
                    </Button>
                  </View>
                </Image>
              </Col>
              <Col>
                <Image source={require('../../../images/Widgets/widget3.png')} style={styles.otherWidget}>
                  <View style={styles.otherWidgetContainer}>
                    <Text style={styles.widgetName}>
                                            KUMAR PRATIK
                                        </Text>
                    <Text style={styles.redRatingPerc}>-0.31%</Text>
                    <Text style={styles.ratingNum}>4,567.00</Text>
                    <Button
                      transparent
                      rounded small
                      style={styles.detailsBtn}
                    >
                      <Text
                        style={Platform.OS === 'android' ?
                        { color: primary, fontSize: 12, fontWeight: '900', textAlign: 'center' } :
                        { color: primary, fontSize: 12, fontWeight: '900', textAlign: 'center' }}
                      >Details</Text>
                    </Button>
                  </View>
                </Image>
              </Col>
            </Grid>
          </Content>
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

export default connect(null, bindAction)(Widgets);
