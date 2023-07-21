import React, {Component} from 'react';
import {Text, View} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/screens/Login';
import SignIn from './src/screens/SignIn';
import Home from './src/screens/Home';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';

const Stack = createStackNavigator();

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="signin" component={SignIn} />
            <Stack.Screen name="home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;
