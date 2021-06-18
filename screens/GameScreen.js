
import React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Animated, Modal } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import BackButton from "../components/BackButton.js";
import HelpButton from "../components/HelpButton.js";
import Carousel from "../components/Carousel.js";
import PageIndicator from "../components/PageIndicator.js";

class GameScreen extends React.Component {

	backButtonPressed = () => {
		this.props.navigation.navigate("HomeScreen")
	}

	helpButtonPressed = () => {
		this.props.navigation.navigate("Modal");
	}

	paranoiaButtonPressed = () => {
		this.props.navigation.navigate("ParanoiaScreen")
	}

	neverHaveIEverButtonPressed = () => {
		this.props.navigation.navigate("NeverHaveIEverScreen");
	}

	render() {
		return (
			<LinearGradient colors={["#550576", "#E136D1"]} style={styles.background}>
				<Text style={styles.title}>Game Mode</Text>
				<BackButton onPress={this.backButtonPressed} />
				<HelpButton onPress={this.helpButtonPressed} />
				<Carousel paranoiaButtonPressed={this.paranoiaButtonPressed} neverHaveIEverButtonPressed={this.neverHaveIEverButtonPressed}/>
				<PageIndicator number={6}/>
			</LinearGradient>
		)
	}
}

const styles = StyleSheet.create({
	background: {
		backgroundColor: "blue",
		flex: 1,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		color: "white",
		top: "20px",
		position: "absolute",
		height: "12vw",
		fontFamily: "Avenir Black",
		fontSize: "8vw",
	}
})

export default GameScreen;