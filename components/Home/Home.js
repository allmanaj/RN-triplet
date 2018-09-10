import React, {Component} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	AsyncStorage,
	TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';


class Home extends Component{


	constructor(props){
		super(props)
	}
	render(){
		return(
			<View style={styles.container}>
			<Text style={{color: '#ffffff', fontSize: 20, textAlign: 'center'}}>Home Page!</Text>
			<TouchableOpacity style={styles.button} onPress={this.signOut}>
				<Text style={styles.btnText} >Sign Out</Text>
			</TouchableOpacity>
			</View>
		)
	}

	signOut = async () => {
		await AsyncStorage.removeItem('username');
		Actions.login();
	}



}

const styles = StyleSheet.create({
	container: {
	    justifyContent: 'space-evenly',
	    padding: 20,
	    backgroundColor: '#5E43A9',
	    flex: 1,
  	},
  	button: {
		alignSelf: 'stretch',
		backgroundColor: '#ffffff',
		marginTop: 20,
		borderRadius: 2
	},
	btnText: {
		fontSize: 20,
		textAlign: 'center',
		padding: 10,
	}
})

export default Home;