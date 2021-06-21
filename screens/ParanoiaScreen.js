
import React from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BackButton from "../components/BackButton.js";
import HelpButton from "../components/HelpButton.js";


class ParanoiaScreen extends React.Component {

	backButtonPressed = () => {
		this.props.navigation.navigate("GameScreen")
	}

	render() {
		return (
			<LinearGradient style={styles.canvas} colors={["#550576", "#E136D1"]}>
				<BackButton onPress={this.backButtonPressed}/>
				<HelpButton/>
				<Text style={styles.playerLabel}>George</Text>
				<Text style={styles.questionLabel}>ask a question</Text>
				<TextInput style={styles.textInput} value="Hello" onChange={() => console.log("changed")}/>
				<TouchableOpacity style={styles.button}></TouchableOpacity>
			</LinearGradient>
		)
	}
}

const styles = StyleSheet.create({
	canvas: {
		flex: 1,
		display: "flex",
		justifyContent: "space-around",
		alignItems: "center",
	},
	playerLabel: {

	},
	questionLabel: {

	},
	textInput: {

	},
	button: {
		width: "100px",
		height: "50px",
		backgroundColor: "white",
	}
})

export default ParanoiaScreen;