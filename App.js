import { StatusBar } from 'expo-status-bar';
import React , {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Entry from './src/components/Entry'
import styles from './src/styles/style';
import HomeScreen from './src/screens/HomeScreen';
import  DetailsScreen from './src/screens/DetailsScreen';

import DeleteScreen from './src/screens/DeleteScreen'
import TabScreen from './src/screens/TabScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import FontAwesome from "react-native-vector-icons/FontAwesome";

class  App extends Component  {

render(){
  return (
    <MainScreenNavigator
       onNavigationStateChange={ () => this.setState({})}
        screenProps = {this.state}
        />
  );
}
}


const StackScreen = createStackNavigator ({
Home: {
screen: HomeScreen
},

Details: {
screen: DetailsScreen,

navigationOptions: ( {navigation}) => ({title: navigation.state.params.title,
                                          })

}

});

const AppContainer= createAppContainer(StackScreen)

const MainScreenNavigator = createAppContainer(createBottomTabNavigator ({

Home: {
screen: AppContainer,

navigationOptions: {
title : 'Feed',
tabBarIcon: ( {focused, tintColor} ) => (
    <FontAwesome name= 'reorder' color = {tintColor} size = {25} />
),
},
},


Post: {
screen: TabScreen,
navigationOptions: {

tabBarIcon: ( { focused , tintColor} ) => (
    <FontAwesome name = 'file-text-o' color = {tintColor} size = {25}  />
),

},
},

Delete: {
screen: DeleteScreen,

navigationOptions: {
tabBarIcon: ({tintColor}) => (
<FontAwesome name='trash-o' color = {tintColor} size ={25} />
),
},
},


}));



export default App;