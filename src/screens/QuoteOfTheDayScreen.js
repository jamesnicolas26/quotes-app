import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import QuoteOfTheDay from '../components/Quote';

const QuoteOfTheDayScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
    <QuoteOfTheDay />
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Add to favorites</Text>
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
    marginBottom: 50,
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
    textAlign:'center', 
    fontSize: 15
  }
});

export default QuoteOfTheDayScreen;
