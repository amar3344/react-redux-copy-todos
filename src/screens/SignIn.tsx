import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {handleSignIn} from '../Redux/Action/AuthAction';
import {handleUsernameChange} from '../Redux/Action/AuthAction';

interface IState {
  username: string;
  email: string;
  password: string;
  verifyPassword: string;
}

interface IProps {
  navigation?: any;
  username: string;
  email: string;
  password: string;
  verifyPassword: string;
  users: any;
  handleUsernameChange: any;
  handleSignIn: any;
}

class SignIn extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
  }

  //   handleUsernameChange = (username: any) => {
  //     this.setState({username});
  //   };

  // handleEmailChange = (email: any) => {
  //   this.setState({email});
  // };

  // handlePasswordChange = (password: any) => {
  //   this.setState({password});
  // };

  // handleVerifyPasswordChange = (verifyPassword: any) => {
  //   this.setState({verifyPassword});
  // };

  //   handleSignIn = () => {
  //     const {username, email, password, verifyPassword} = this.state;

  //     const newObj = {
  //       id: new Date(),
  //       username: this.state.username,
  //       email: this.state.email,
  //       password: this.state.password,
  //     };
  //     this.setState({
  //       username: '',
  //       email: '',
  //       password: '',
  //       verifyPassword: '',
  //     });
  //   };

  navigateToLogin = () => {
    this.props.navigation.navigate('login');
  };

  render() {
    const {username, email, password, verifyPassword, users} = this.props;

    return (
      <View style={styles.signinContainer}>
        <View style={styles.topContainer}>
          <Icon name="user-circle" style={styles.userIcon} />
          <Text style={styles.signupText}>Register</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Username"
              value={username}
              onChangeText={e => this.props.handleUsernameChange(e, 'username')}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={e => this.props.handleUsernameChange(e, 'email')}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={e => this.props.handleUsernameChange(e, 'password')}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Verify Password"
              secureTextEntry={true}
              value={verifyPassword}
              onChangeText={e =>
                this.props.handleUsernameChange(e, 'verifyPassword')
              }
            />
          </View>
          <TouchableOpacity
            style={styles.facebookContainer}
            onPress={() => this.props.handleSignIn()}>
            <Text>Register</Text>
          </TouchableOpacity>
          <Text style={{marginTop: 50}}>
            Already a Member?{' '}
            <Text
              style={{color: '#EF6C00', fontWeight: 'bold'}}
              onPress={this.navigateToLogin}>
              Login
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state: any) => ({
  username: state.username,
  email: state.email,
  password: state.password,
  verifyPassword: state.verifyPassword,
  users: state.users,
});

const mapDispatchToProps = {
  handleSignIn,
  handleUsernameChange,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

const styles = StyleSheet.create({
  signinContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    height: '25%',
    width: '100%',
    backgroundColor: '#EF6C00',
    borderBottomLeftRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 65,
  },
  userIcon: {
    fontSize: 60,
    color: '#ffffff',
  },
  signupText: {
    color: 'white',
    fontSize: 30,
  },
  inputContainer: {
    height: 49,
    paddingLeft: 15,
    width: '90%',
    borderRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 2,
    elevation: 15,
    backgroundColor: 'white',
    borderColor: '#EF6C00',
    borderWidth: 0.1,
    marginBottom: 25,
  },

  facebookContainer: {
    width: 200,
    height: 50,
    marginTop: 40,
    backgroundColor: '#EF6C00',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
});
