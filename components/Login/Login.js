import React, {Component} from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View,
	TextInput,
	Image,
	TouchableOpacity,
	Alert,
	AsyncStorage,
	Button
} from 'react-native';
import {Actions} from 'react-native-router-flux';


class Login extends Component{


	constructor(props){
		super(props)
		this.state = {
			username: '',
			password: ''
		}
	}

	onComponentMounted (){
	}

	render(){
		return(
			<View style={styles.container}>
			<Image
				style={{ flex: 0.5,
				    alignSelf: 'stretch',
				    width: undefined,
				    height: undefined,
				    resizeMode: 'contain'}}
				source={require('../../assets/img/test_logo.png')} />
				<View>
					<TextInput
						style={styles.input}
						value={this.state.username}
						onChangeText={(username) => this.setState({username})}
						placeholder="Enter a username..." />
					<TextInput
						secureTextEntry={true}
						style={[styles.input, styles.password]}
						value={this.state.password}
						onChangeText={(password) => this.setState({password})}
						placeholder="Enter a password..." />
					<TouchableOpacity style={styles.button} onPress={this.signIn}>
						<Text style={styles.btnText} >Sign In</Text>
					</TouchableOpacity>
					<Button color="white" title="Register" onPress={this.openRegister}/>
				</View>
			</View>
		)
	}

	signIn =  async () => {
		if(this.state.username == 'Angus' && this.state.password == 'qwerty'){
			await AsyncStorage.setItem('username', this.state.username)
			Actions.home({username: this.state.username});
		}
	}

	openRegister = () => {
		Actions.register();
	}


}

const styles = StyleSheet.create({
	container: {
	    justifyContent: 'space-evenly',
	    padding: 20,
	    backgroundColor: '#5E43A9',
	    flex: 1,
  	},
	input: {
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: '#fff',
		color: '#000',
		fontSize: 20,
		borderRadius: 5,
		padding:10,
		alignSelf: 'stretch'
	},
	password: {
		marginTop: 20
	},
	button: {
		alignSelf: 'stretch',
		backgroundColor: '#ffffff',
		marginTop: 20,
		borderRadius: 2,
		marginBottom: 10
	},
	btnText: {
		fontSize: 20,
		textAlign: 'center',
		padding: 10,
	}
})

export default Login;