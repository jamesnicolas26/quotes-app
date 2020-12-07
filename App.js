import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import QuoteOfTheDayScreen from './src/screens/QuoteOfTheDayScreen';
import FavoriteQuotesScreen from './src/screens/FavoriteQuotesScreen';
import Login from './src/screens/LoginScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Login" 
                    component={Login} 
                    options={{ 
                    title: 'Login',
                    headerTintColor: 'white',
                    headerTitleStyle: { alignSelf: 'center' },
                    headerStyle: { backgroundColor: '#9f0cfa' }
                   }}
        />
        <Stack.Screen name="Home" component={HomeScreen} 
                  options={{ 
                    title: 'Home',
                    headerTintColor: 'white',
                    headerTitleStyle: { alignSelf: 'center' },
                    headerStyle: { backgroundColor: '#9f0cfa' }
                   }}
        />
        <Stack.Screen name="InspireMe" component={QuoteOfTheDayScreen} 
                  options={{ 
                    title: 'Quote of the Day',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#9f0cfa' }
                   }}
        />
        <Stack.Screen name="FavQuote" component={FavoriteQuotesScreen} 
                  options={{ 
                    title: 'Favorite Quotes',
                    headerTintColor: 'white',
                    headerStyle: { backgroundColor: '#9f0cfa' }
                   }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
