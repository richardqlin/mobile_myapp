import React ,{Component} from 'react'

import styles from '../styles/style';
import FontAwesome from "react-native-vector-icons/FontAwesome";

import { StyleSheet, Button, View, Text,TextInput,ImageBackground, Image} from 'react-native';

class Form extends Component {
constructor (){
super();

    this.state = {
    title: "",
    post: "",
    };
}


handleSubmit() {
   this.props.submit(this.state.title, this.state.post);
    this.setState({title:'title',post:'post'});
}


render() {
return (
<ImageBackground source ={ require('../images/water.png')} style = {styles.container} >
 <Image source ={ require ('../images/google-logo.jpg')} style ={styles.stretch} />
<Text> Title: </Text>
<TextInput style = {[styles.border, {height: 40}]}
value = {this.state.title}

onChangeText = {(title) => this.setState( {title: title })}
/>

<Text> Post: </Text>
<TextInput style ={[ styles.border, {height:100}]}
value = {this.state.post}
onChangeText = {(post) => this.setState({ post:post})}
/>

<Button style ={styles.container } title='Submit'
color='green'
onPress = {() => this.handleSubmit()} />

<FontAwesome.Button  name='send'
color = 'green'

onPress = {()=> this.handleSubmit()} />


</ImageBackground>
)
}
}

export default Form;
