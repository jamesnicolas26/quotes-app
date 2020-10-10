import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, TextInput, Image, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <ScrollView>
    <View style={styles.buttonx}>
        <TouchableOpacity>
      <Button
        title="Inspire Me!"
        onPress={() => {
          navigation.navigate('QuoteOfTheDayScreen.js');
        }}
      />
      </TouchableOpacity>
        </View>
        <View style={styles.buttony}>
      <TouchableOpacity>
        <Button
        title="Favorite Quotes"
        onPress={() => {
          navigation.navigate('FavoriteQuoteScreen.js');
        }}
      />
      </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#800080',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonx: {
    marginTop:100,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:10,
    marginRight:10,
    alignItems: 'center',
    backgroundColor:'blue',
    borderRadius:200,
    borderWidth: 1,
    borderColor: '#fff',
    width:100,
  },
  buttony: {
    marginTop:100,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:10,
    marginRight:10,
    alignItems: 'center',
    backgroundColor:'blue',
    borderRadius:200,
    borderWidth: 1,
    borderColor: '#fff',
    width:100,
  },
});

export default HomeScreen;
