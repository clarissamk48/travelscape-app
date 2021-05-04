import React from 'react';
import { StyleSheet, ScrollView, View, Text, Image, TextInput } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';
import Feather from 'react-native-vector-icons/Feather';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import HomeScreen from './components/HomeScreen';
import HikingScreen from './components/HikingScreen';
import DiningScreen from './components/DiningScreen';
import EntertainmentScreen from './components/EntertainmentScreen';


const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
          <View>
            <Feather name={'home'} size={25} style={[{color: tintColor}]} />
          </View>
        ),
          initialRouteName: 'Home',
          activeColor: '#FFFFFF',
          inactiveColor: '#FFFFFF',
          barStyle: { backgroundColor: '#34495E' },
        
      }
    },

    Hiking: {
      screen: HikingScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Feather name={'sun'} size={25} style={[{color: tintColor}]} />
          </View>
        ),
          activeColor: '#FFFFFF',
          inactiveColor: '#FFFFFF',
          barStyle: { backgroundColor: '#E67E22' }, 
    },
  },

    Dining: {
      screen: DiningScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Feather name={'coffee'} size={25} style={[{color: tintColor}]} />
          </View>
        ),
          activeColor: '#FFFFFF',
          inactiveColor: '#FFFFFF',
          barStyle: { backgroundColor: '#E74C3C' },
    },
  },

    Entertainment: {
      screen: EntertainmentScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <View>
            <Feather name={'tv'} size={25} style={[{color: tintColor}]} />
          </View>
        ),
        activeColor: '#FFFFFF',
        inactiveColor: '#FFFFFF',
        barStyle: { backgroundColor: '#DAB72D' },
      }
    },
  },
);



export default createAppContainer(TabNavigator);
