import React, {Component} from 'react';
import 'react-native-gesture-handler';
import Screen_1 from "./Screens/Screen_1";
import Screen_2 from './Screens/Screen_2';
import {
  View,
  Text,

} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

 class App extends Component{

  render () {

    return (
  
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Pantalla 1" component={Screen_1}/>
          <Drawer.Screen name="Pantalla 2" component={Screen_2} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }




}
export default App;
