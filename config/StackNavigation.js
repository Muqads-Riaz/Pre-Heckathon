import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Main from '../screens/Main';
import Signup from '../screens/Signup';
import Login from '../screens/Login';
import Home from '../screens/Home';
import GoogleMap from '../screens/Map';
import LiveLocation from '../screens/LiveLocation';
import Pending from '../screens/Pending';
import Requests from '../screens/Requests';


const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Main" component={Main} />
      <Stack.Screen options={{headerShown: false}} name="Requests" component={Requests}/>
      <Stack.Screen options={{headerShown: false}} name="Pending" component={Pending}/>
      <Stack.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Stack.Screen options={{headerShown: false}} name="LiveLocation" component={LiveLocation} />
      <Stack.Screen options={{headerShown: false}} name="GoogleMap" component={GoogleMap} />
      <Stack.Screen options={{headerShown: false}} name="Signup" component={Signup} />
      <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
  
        
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;