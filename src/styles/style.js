import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Dimensions, Text, View } from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  border: {
      width: Dimensions.get('window').width * 0.9,
      margin: 10,
     padding: 10,
      borderWidth:2,

      borderColor: '#0f0',
  },

   contain: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

 contain: {
     color:'#f0f',
     fontSize: 25,
    alignItems: 'center',
    justifyContent: 'center',

  },

  stretch:{
  width:100,
  height:50,
  resizeMode:'stretch',
  }


});


export default styles;