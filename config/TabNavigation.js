import  React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WishList from '../screens/WishList';
import Cart from '../screens/Cart';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
        <Tab.Screen options={{headerShown: false}} name="Cart" component={Cart} />
        <Tab.Screen options={{headerShown: false}} name="Wishlist" component={WishList} /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
}