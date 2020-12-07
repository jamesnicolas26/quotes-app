import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { favQs } from '../api/FavQsApi';

const QuoteOfTheDay = ({ navigation }) => {
const [quote, setQuote] = useState([]);
const [errMessage, setErrMessage] = useState('');
const favQsApi = async () => {
    try {
        const response = await favQs.get('/qotd', {
            params: {
              limit: 1,
            },
          });
          setQuote(response.data.quote);
          setErrMessage('');
      } catch (err) {
        console.log(err);
        setErrMessage('Please try again!');
      }  
};
useEffect(function(){
    favQsApi();
}, [])
  if (errMessage != ''){
    return (
        <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{color: '#fff'}}>{errMessage}</Text>
        </View>
        </View>
      );
  } else {
    return (
        <View style={styles.container}>
        <StatusBar style="auto" />

          <Text style={{color: "white", fontWeight: "bold", fontSize: 20}}>"{quote.body}"</Text>
          <Text>{"\n"}</Text>
          <Text style={{color: "white", fontWeight: "bold", fontSize: 15}}>- {quote.author}</Text>
          <Text>{"\n"}</Text>
          <Text style={{color: "white", fontSize: 13}}>Tags: {quote.tags + ' '} </Text>
          <Text>{"\n"}</Text>
        </View>
      );
  }
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
    marginBottom: 50,
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

export default QuoteOfTheDay;
