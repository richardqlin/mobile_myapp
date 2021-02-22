import React, { Component } from'react';
import styles from '../styles/style';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';


class DetailsScreen extends Component {
render()
{
return (
<ImageBackground source = { require('../images/water.png')} style={styles.container} >
<Text style={styles.contain} >Title: {this.props.navigation.state.params.title} </Text>
<Text style={styles.contain} >Post: {this.props.navigation.state.params.post} </Text>
<Text style={styles.contain} >Time: {this.props.navigation.state.params.time} </Text>
<Text style={styles.contain} >Date: {this.props.navigation.state.params.date} </Text>
</ImageBackground>
)
}
}

export default DetailsScreen;