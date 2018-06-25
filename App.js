import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, createStackNavigator } from 'react-navigation';

import HomeScreen from './js/HomeScreen.js';
import ProfileScreen from './js/ProfileScreen.js';
import YesChart from './js/YesChart.js';
import TodayChart from './js/TodayChart.js';

const Stack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: '#fff'
      },
    }),
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      title: "Choose your mood",
      headerTitleStyle: {
        fontFamily: 'Papyrus',
      },
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: '#fff'
      },
    }),
  },
  YesChart: {
    screen: YesChart,
    navigationOptions: () => ({
      title: "Yesterday's mood",
      headerTitleStyle: {
        fontFamily: 'Papyrus',
      },
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: '#fff',
      },
    }),
  },
  TodayChart: {
    screen: TodayChart,
    navigationOptions: () => ({
      title: "Today's mood",
      headerTitleStyle: {
        fontFamily: 'Papyrus',
      },
      headerTintColor: "black",
      headerStyle: {
        backgroundColor: '#fff',
      },
    }),
  }
});

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    YesChart: YesChart,
    TodayChart: TodayChart
  },
  {
    initialRouteName: 'Home'
  }
);

export default class App extends React.Component {
  render() {
    // return <RootStack />;
    return <Stack />;
  }
}

// export default createStackNavigator({
//   Home: { screen: HomeScreen },
//   Profile: { screen: ProfileScreen },
// });
