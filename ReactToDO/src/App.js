import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ToDOs from './scene/ToDOs';
import ToDO from './scene/ToDO';

const Stack = createStackNavigator();

const App = () => {
    return(
        <NavigationContainer>
             <Stack.Navigator>
                <Stack.Screen name="ToDOs" component={ToDOs} />
                <Stack.Screen name="ToDO" component={ToDO} />
             </Stack.Navigator>
        </NavigationContainer>
    )
}


export default App


