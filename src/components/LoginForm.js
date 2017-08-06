import React, {Component} from 'react';
import {Text, View, Image, StatusBar} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser} from '../actions';
import {Card, CardSection, Input, Button, Spinner} from './common';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const {email, password} = this.props;

    this.props.loginUser({email, password});
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return <Button onPress={this.onButtonPress.bind(this)}>LOGIN</Button>;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />

        <View
          style={styles.logoStyle}>
          <Image
            style={{flex: 1, height: undefined, width: undefined}}
            resizeMode="contain"
            source={require('./img/catLogoImage.png')}
          />
        </View>

        <View
          style={styles.containerStyle}>
          <View style={styles.sectionStyle}>
            <View style={styles.iconStyle}>
              <Icon name="user" color="#fff" size={20} />
            </View>

            <Input
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </View>

          <View style={styles.sectionStyle}>
            <View style={styles.iconStyle}>
              <Icon name="lock" color="#fff" size={20} />
            </View>

            <Input
              secureTextEntry
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </View>

          <Text style={styles.errorTextStyle}>
            {this.props.error}
          </Text>

          <View>
            {this.renderButton()}
          </View>

          <Text style={{alignSelf: 'center', paddingTop: 5, color: '#fff'}}>
            Dont have an account?
          </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  },
  logoStyle: {
    flex: 1,
    marginLeft: 30,
    marginRight: 15,
    paddingTop: 30
  },
  iconStyle: {
    paddingTop: 11,
    paddingLeft: 11
  },
  containerStyle: {
    flex: 2,
    marginLeft: 10,
    marginRight: 10
  },

  sectionStyle: {
    //height: 45,
    flexDirection: 'row',
    backgroundColor: '#252525',
    borderColor: '#46bde4',
    //borderWidth: 1.5,
    //borderRadius: 25,
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

const mapStateToProps = ({auth}) => {
  const {email, password, error, loading} = auth;

  return {email, password, error, loading};
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged,
  loginUser
})(LoginForm);
