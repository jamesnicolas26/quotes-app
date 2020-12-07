import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';

const FavoriteQuotesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />



      <Text style={styles.buttonText}>Inspire Me!</Text>
  

 
      <Text style={styles.buttonText}>Favorite Quotes</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000'
	},
  button: {
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#9f0cfa',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#000000',
    width: '60%'
  },
  buttonText: {
    color:'#ffffff', 
    textAlign:'center', 
    fontSize: 15
  }
});

export default FavoriteQuotesScreen;
