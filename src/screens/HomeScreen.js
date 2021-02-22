import React , {Component} from 'react';

import styles from '../styles/style';
import Entry from '../components/Entry';
import { View, Text,FlatList,StyleSheet,Button, ImageBackground, Image } from 'react-native';

class HomeScreen extends Component {
constructor () {
super();
this.state = {
entries: [],
};
this.toDetails = this.toDetails.bind(this);

}

toDetails(item) {
this.props.navigation.navigate('Details',item);
}

componentDidMount(){
fetch ('https://protected-spire-82809.herokuapp.com/entries').then(response => response.json()).then(jsonResponse => this.setState( { entries: jsonResponse}));
}


handleDelete() {
fetch ('https://protected-spire-82809.herokuapp.com/delete',{
method: 'DELETE'
}
).then(response => {
    this.props.navigation.navigate('Feed');
}
);
}


componentWillReceiveProps() {
    this.componentDidMount();
}

render(){
return (

<ImageBackground source ={ require ('../images/water.png')} style ={styles.container} >

  { (this.state.entries.length > 0)?

<FlatList
data = {this.state.entries}
renderItem = { ({item}) => <Entry item = {item} toDetails={this.toDetails} />}
keyExtractor = {item => item['_id']}
/>
 :



 <Image source ={ require ('../images/nodata.png')} style ={styles.stretch} />

}


</ImageBackground>

);

}
}

export default HomeScreen;