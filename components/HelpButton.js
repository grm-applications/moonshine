
import React from "react";
import { View, StyleSheet, TouchableOpacity, TextInput, Text } from "react-native";

class HelpButton extends React.Component {
	render() {
		return (
			<TouchableOpacity style={styles.button} onPress={this.props.onPress}>?</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	button: {
		width: "12vw",
		height: "12vw",
		position: "absolute",
		backgroundColor: "white",
		top: "20px",
		right: "20px",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: "1000px",
		padding: "0px",
		fontSize: "8vw",
		color: "#690080",
		fontFamily: "Arial Rounded MT Bold",
	},

})

export default HelpButton;