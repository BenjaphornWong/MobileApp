import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from './src/screens/SearchScreen'
import ShowResultScreen from './src/screens/ShowResultScreen'

const Stack = createStackNavigator()

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search"> 
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="ShowResult" component={ShowResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App