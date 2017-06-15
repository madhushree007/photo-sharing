

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View, TouchableOpacity } from 'react-native';

import { Actions } from 'react-native-router-flux';
import { Container, Content, Text, Thumbnail, Icon, Button } from 'native-base';
import { Grid, Col, Row} from 'react-native-easy-grid';
import HeaderContent from './../headerContent/';
import { openDrawer } from '../../actions/drawer';

import theme from '../../themes/base-theme';
import styles from './styles';
import FooterNew from '../footerNew';

const pic = require('../../../images/NewsIcons/4.jpg');


class Profile extends Component {

  static propTypes = {
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  render() {
    return (
      <Container>
        <Content showsVerticalScrollIndicator={false}>
            <View>
            <Image source={pic} style={styles.container}>
            <View style={styles.containerTop}>
              <TouchableOpacity style={{ alignSelf: 'center' }}>
                <Thumbnail source={require('../../../images/contacts/sanket.png')} style={styles.profilePic} />
              </TouchableOpacity>
              <View style={styles.profileInfo}>
                  <Text style={styles.profileUser}>Christine Sanchez</Text>
                  <Text note style={styles.profileUserInfo}>Just a girl and her camera. Nature, animals, food.</Text>
                <Button rounded style={styles.profileBtn}>
                  <Text style={styles.profileTxt}>Edit Profile</Text>
                </Button>
              </View>
                <View>
                <Grid style={styles.infoTab}>
                  <Col>
                    <TouchableOpacity style={styles.infoTabs_header}>
                      <Text style={styles.infoTabs_tabCounts}>630</Text>
                      <Text note style={styles.infoTabs_tabName}>Posts</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col>
                    <TouchableOpacity style={styles.infoTabs_header}>
                      <Text style={styles.infoTabs_tabCounts}>246K</Text>
                      <Text note style={styles.infoTabs_tabName}>Followers</Text>
                    </TouchableOpacity>
                  </Col>
                  <Col>
                    <TouchableOpacity style={styles.infoTabs_header}>
                      <Text style={styles.infoTabs_tabCounts}>652</Text>
                      <Text note style={styles.infoTabs_tabName}>Followings</Text>
                    </TouchableOpacity>
                  </Col>
                </Grid>
                </View>
              </View>
            </Image>

            </View>
            <View style={styles.linkTabs}>
              <Grid>
                <Col>
                  <TouchableOpacity style={styles.linkTabs_header}>
                    <Icon name="ios-apps" style={styles.iconNew} />
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity style={styles.linkTabs_header}>
                    <Icon name="ios-list-box-outline" style={styles.iconNew} />
                  </TouchableOpacity>
                </Col>
                <Col>
                  <TouchableOpacity style={styles.linkTabs_header}>
                    <Icon name="ios-copy-outline" style={styles.iconNew} />
                  </TouchableOpacity>
                </Col>
              </Grid>
            </View>
           <View>
              <View>
                <Grid>
                  <Row style={styles.channelRow}>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.channel()}>
                        <Image source={require('../../../images/NewsIcons/1.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.channel()}>
                        <Image source={require('../../../images/NewsIcons/2.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.channel()}>
                        <Image source={require('../../../images/NewsIcons/3.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                  </Row>
                  <Row style={styles.channelRow}>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.channel()}>
                        <Image source={require('../../../images/NewsIcons/4.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.channel()}>
                        <Image source={require('../../../images/NewsIcons/5.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.channel()}>
                        <Image source={require('../../../images/NewsIcons/6.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                  </Row>
                  <Row style={styles.channelRow}>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.channel()}>
                        <Image source={require('../../../images/NewsIcons/7.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.channel()}>
                        <Image source={require('../../../images/NewsIcons/8.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.channel()}>
                        <Image source={require('../../../images/NewsIcons/9.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                  </Row>
                  <Row style={styles.channelRow}>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.channel()}>
                        <Image source={require('../../../images/NewsIcons/3.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.channel()}>
                        <Image source={require('../../../images/NewsIcons/2.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                    <Col>
                      <TouchableOpacity onPress={() => Actions.channel()}>
                        <Image source={require('../../../images/NewsIcons/1.jpg')} style={styles.channelImg}>
                        </Image>
                      </TouchableOpacity>
                    </Col>
                  </Row>
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

export default connect(mapStateToProps, bindAction)(Profile);
