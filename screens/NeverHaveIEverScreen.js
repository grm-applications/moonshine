

import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BackButton from "../components/BackButton.js";
import HelpButton from "../components/HelpButton.js";


class NeverHaveIEverScreen extends React.Component {

	constructor() {
		super();
		this.state = {
			animating: false,
			iterator: 0,
			statements: ["eaten a biscuit", "eaten a cake", "eaten a meal", "eaten some food", "eaten some drink"]
		}
	}

	backButtonPressed = () => {
		this.props.navigation.navigate("GameScreen")
	}

	nextButtonPressed = () => {
		if (this.state.iterator >= (this.state.statements.length - 1)) { this.props.navigation.navigate("GameScreen")}
		this.setState({iterator: this.state.iterator + 1})
	}
 
	render() {
		return (
			<LinearGradient style={styles.canvas} colors={["#550576", "#E136D1"]}>
				<BackButton onPress={this.backButtonPressed}/>
				<HelpButton/>
				<TouchableOpacity onPress={this.nextButtonPressed} style={styles.button}></TouchableOpacity>
				<Text style={styles.text}>{`Never have I ever ${this.state.statements[this.state.iterator]}`}</Text>
			</LinearGradient>
		)
	}
}

const styles = StyleSheet.create({
	canvas: {
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	button: {
		position: "absolute",
		flex: 1,
		height: "100%",
		width: "100%",
		backgroundColor: "transparent",
		zIndex: -1,
	},
	text: {
		position: "absolute",
		fontFamily: "Avenir",
		color: "white",
		fontSize: "6vw",
		width: "80%",
		textAlign: "center",
		zIndex: -2,
	}
})

export default NeverHaveIEverScreen;