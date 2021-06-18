
import React from "react";
import { View, StyleSheet } from "react-native";
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
	}
})

export default ParanoiaScreen;