import React from 'react';
import Mytrip from '../screens/MyTrip-WishList-Profile/Mytrip';
import WishList from '../screens/MyTrip-WishList-Profile/WishList';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home-Detail/Home';
import Profile from '../screens/MyTrip-WishList-Profile/Profile';
type ProfileProps={}
type HomeStack = {}
type MytripProps = {}
type WishListProps = {}

export type TabNavigator = {
    Mytrip: MytripProps | undefined;
    Profile: ProfileProps | undefined;
    WishList: WishListProps | undefined;
    Home: HomeStack|undefined;
}

const Tab = createBottomTabNavigator<TabNavigator>();

const _TabNavigator = () => {
    return(
        <Tab.Navigator 
        screenOptions={{
            headerShown: false,
        }}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Mytrip" component={Mytrip} />
        <Tab.Screen name="WishList" component={WishList} />
      </Tab.Navigator>
    );
}

export const TabNavigator = React.memo(_TabNavigator);

