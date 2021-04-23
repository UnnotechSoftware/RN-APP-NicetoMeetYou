import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';

import MainScreen from '../screens/MainScreen';
import DetailScreen from '../screens/DetailScreen';
import IncrementScreen from '../screens/IncrementScreen';
import EditScreen from '../screens/EditScreen';
import Store from '../state/Store';

import HeaderButton from '../components/HeaderButton';
import NavigationOptions from '../constants/NavigationOptions';

const Stack = createStackNavigator();

const Navigation = (props) => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='main' 
          options={{
            ...NavigationOptions.mainScreen,
            headerRight: (props) => <HeaderButton {...props} title='New' page='add'/>
          }}
          component={MainScreen}/>

        <Stack.Screen 
          name='detail' 
          options={NavigationOptions.detailScreen}
          component={DetailScreen}/>

        <Stack.Screen 
          name='add' 
          options={NavigationOptions.incrementScreen}
          component={IncrementScreen}/>

        <Stack.Screen 
          name='edit' 
          options={NavigationOptions.editScreen}
          component={EditScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default Navigation;