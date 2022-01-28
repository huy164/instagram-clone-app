import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3w31bxsHYBM7gY92AUkJYRZd3QvLZg5Y",
  authDomain: "instagram-dev-6ecec.firebaseapp.com",
  projectId: "instagram-dev-6ecec",
  storageBucket: "instagram-dev-6ecec.appspot.com",
  messagingSenderId: "320624387519",
  appId: "1:320624387519:web:b6a2b7de347b56a2a02d0a",
  measurementId: "G-S0MYHBHP07"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default class App extends Component {
  constructor(props) {
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.setState({
          loaded: true,
          loggedIn: false,
        })
      } else {
        this.setState({
          loaded: true,
          loggedIn: true,
        })
      }
    })
  }

  render() {
    const { loggedIn, logIn } = this.state;

    if (!loaded) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return(
      <View>
        <Text>User is logged in</Text>
      </View>
    )
  }
}
