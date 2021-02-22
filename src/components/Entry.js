import { StatusBar } from 'expo-status-bar';
import React , {Component} from 'react';
import { StyleSheet, Button,Text, View } from 'react-native';
import styles from '../styles/style';



export default class Entry extends Component {

render(){
  return (
    <View style={styles.border}>
       <Button title= {this.props.item.title } onPress= { () =>this.props.toDetails(this.props.item) } />

    </View>
  );
}
}
