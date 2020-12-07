import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />

    <TouchableOpacity style={styles.button}         
        onPress={() => {
          navigation.navigate('InspireMe')
        }}>
      <Text style={styles.buttonText}>Inspire Me!</Text>
    </TouchableOpacity>

    <TouchableOpacity style={styles.button}         
      onPress={() => {
          navigation.navigate('FavQuote')
      }}>
      <Text style={styles.buttonText}>Favorite Quotes</Text>
    </TouchableOpacity>
    </View>
  );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#524d54'
	},
  button: {
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#9f0cfa',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#524d54',
    width: '60%'
  },
  buttonText: {
    color:'#ffffff',
    backgroundColor:'#9f0cfa',
    borderColor: '#9f0cfa', 
    textAlign:'center', 
    fontSize: 15
  }
});

export default HomeScreen;
