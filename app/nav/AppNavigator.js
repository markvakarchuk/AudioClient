//import liraries
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import player from '../screens/player';
import App from '../../App';

const Tab = createBottomTabNavigator()

// create a component
const AppNavigator = () => {
    return <Tab.Navigator>
        <Tab.Screen name='Player' component = {player} />
    </Tab.Navigator>
}

export default AppNavigator;