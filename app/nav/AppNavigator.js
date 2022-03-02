//import liraries
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Player from '../screens/Player';
import Settings from '../screens/Settings';
import App from '../../App';
// import { Settings } from 'react-native';

const Tab = createBottomTabNavigator()

// create a component
const AppNavigator = () => {
    return <Tab.Navigator>
        <Tab.Screen name='Player' component = {Player} />
        <Tab.Screen name='Settings' component = {Settings} />
    </Tab.Navigator>
}

export default AppNavigator;