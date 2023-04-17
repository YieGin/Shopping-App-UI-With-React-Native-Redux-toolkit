import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MainMen from '../screens/Men/MainMen';
import MainWomen from '../screens/Women/MainWomen';
import SalonListDetails from '../screens/ListDetails/SalonListDetails';
import Cart from '../screens/ListDetails/Cart';
import BottomSheet from '../screens/ListDetails/BottomSheet';

const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={MainMen} />
        <Stack.Screen name="Settings" component={MainWomen} />
        <Stack.Screen name="SalonListDetails" component={SalonListDetails} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="Test" component={BottomSheet} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
