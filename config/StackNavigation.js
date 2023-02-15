import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/Main';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Home from '../screens/Home';
import SingleProduct from '../screens/SingleProduct';
import Cart from '../screens/Cart';
import Wishlist from '../screens/WishList';
import Order from '../screens/Order';
import OrderForm from '../screens/OrderForm';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Main" component={Main} />
      <Stack.Screen options={{headerShown: false}} name="Signup" component={Signup} />
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen options={{headerShown: false}} name="Wishlist" component={Wishlist} />
      <Stack.Screen options={{headerShown: false}} name="Cart" component={Cart} />
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="SingleProduct" component={SingleProduct} />
        <Stack.Screen options={{headerShown: false}} name="Order" component={Order} />
        <Stack.Screen options={{headerShown: false}} name="OrderForm" component={OrderForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;