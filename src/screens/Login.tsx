import React, {Component} from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';
import {handleEmailChange} from '../Redux/Action/AuthAction';
import {handleLogin} from '../Redux/Action/AuthAction';

interface IState {
  email: string;
  password: string;
}

interface IProps {
  navigation?: any;
  user: any;
  password: any;
  handleEmailChange: any;
  handleLogin: any;
}

class Login extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  navigateToSignin = () => {
    this.props.navigation.navigate('signin');
  };

  render() {
    const {user, password} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.logintext}>Login</Text>
          <Text style={styles.welcometext}>Welcome Back</Text>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.detailsContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email or phone number"
              value={user}
              onChangeText={e => this.props.handleEmailChange(e, 'loginUser')}
              placeholderTextColor="grey"
            />
            <View style={styles.line}></View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={e =>
                this.props.handleEmailChange(e, 'loginPassword')
              }
            />
          </View>
          <Text style={styles.forgotText}>Forgot Password?</Text>
          <TouchableOpacity
            style={styles.loginbtnContainers}
            onPress={() => this.props.handleLogin(this.props)}>
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.ContinueText}>
            Continue with social media (or)
          </Text>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
            }}
            onPress={this.navigateToSignin}>
            <Text style={{color: 'blue', fontSize: 15, fontWeight: 'bold'}}>
              Sign In
            </Text>
          </TouchableOpacity>
          <View style={styles.btnsContainer}>
            <TouchableOpacity style={styles.googleContainer}>
              <Text style={styles.googleText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.facebookContainer}>
              <Text style={styles.googleText}>Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF6C00',
  },
  topContainer: {
    height: '30%',
    width: '100%',
    justifyContent: 'center',
    paddingLeft: 25,
    paddingTop: 30,
  },
  logintext: {
    color: '#ffffff',
    fontSize: 50,
    fontWeight: '400',
  },
  welcometext: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '400',
  },
  bottomContainer: {
    height: '70%',
    width: '100%',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    backgroundColor: '#fff',
  },
  input: {
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    // borderWidth:1
  },
  detailsContainer: {
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
    marginTop: 90,
    height: 130,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#EF6C00',
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 2,
    elevation: 30,
    backgroundColor: 'white',
    borderColor: '#EF6C00',
    borderWidth: 0.1,
  },
  line: {
    width: '100%',
    borderWidth: 0.2,
    borderColor: 'grey',
  },
  forgotText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
    marginTop: 40,
  },
  loginbtnContainers: {
    width: 220,
    height: 50,
    marginTop: 40,
    backgroundColor: '#E65100',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  loginBtnText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ContinueText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    marginTop: 45,
  },
  btnsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  googleContainer: {
    width: 150,
    height: 50,
    marginTop: 40,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  facebookContainer: {
    width: 150,
    height: 50,
    marginTop: 40,
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
  },
  googleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const mapStateToProps = (state: any) => ({
  users: state.users,
  user: state.loginUser,
  password: state.loginPassword,
});

const mapDispatchToProps = {
  handleEmailChange,
  handleLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
