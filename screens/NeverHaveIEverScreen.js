

import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BackButton from "../components/BackButton.js";
import HelpButton from "../components/HelpButton.js";


class NeverHaveIEverScreen extends React.Component {

	constructor() {
		super();
		this.state = {
			
		}
	}

	backButtonPressed = () => {
		this.props.navigation.navigate("GameScreen")
	}

	nextButtonPressed = () => {

	}
 
	render() {
		return (
			<LinearGradient style={styles.canvas} colors={["#550576", "#E136D1"]}>
				<BackButton onPress={this.backButtonPressed}/>
				<HelpButton/>
				<TouchableOpacity onPress={this.nextButtonPressed} style={styles.button}></TouchableOpacity>
				<
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
		flex: 1,
		height: "100%",
		width: "100%",
		backgroundColor: "transparent",
		zIndex: -1,
	}
})

export default NeverHaveIEverScreen;