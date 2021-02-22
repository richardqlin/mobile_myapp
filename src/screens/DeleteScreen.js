import React , {Component} from 'react';

import styles from '../styles/style';
import Entry from '../components/Entry';
import { View, FlatList,StyleSheet,Button,ImageBackground } from 'react-native';
import FontAwesome from "react-native-vector-icons/FontAwesome";

class DeleteScreen extends Component {
constructor () {

super();
this.handleDelete = this.handleDelete.bind(this);
}




handleDelete() {
fetch('https://protected-spire-82809.herokuapp.com/delete', {
method: 'DELETE'
}).then(response => {
    this.props.navigation.navigate('Feed');
});

}


render(){

return (
<ImageBackground source={require('../images/water.png')} style ={styles.container} >



<Button title='CONFIRM'
color='red'
onPress = {() => this.handleDelete()} />


  <FontAwesome name='trash-o' onPress = {() => this.handleDelete()}  color ='red' size ={25}/>


</ImageBackground>

);

}
}

export default DeleteScreen