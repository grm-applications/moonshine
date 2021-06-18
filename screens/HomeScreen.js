
import React from "react";
import { View, StyleSheet, TouchableOpacity, TextInput, Text, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import TableView from "../components/TableView.js";
import BookmarkButton from "../components/BookmarkButton.js";

class HomeScreen extends React.Component {

	constructor() {
		super();
		this.state = {
			players: ["", "", ""],
			inputValue: ""
		}
	}

	inputChanged = (event) => {
		this.setState({inputValue: event.target.value})
	}

	addButtonPressed = () => {
		var playersList = this.state.players;
		var index = playersList.indexOf("")
		if (index !== -1) {
			playersList[index] = this.state.inputValue;
		} else {
			playersList.unshift(this.state.inputValue)
		}
		this.setState({
			players: playersList,
			inputValue: ""
		})

	}

	playButtonPressed = () => {
		this.props.navigation.navigate("GameScreen")
	}

	render() {
		return (
			<LinearGradient style={styles.background} colors={["#550576", "#E136D1"]}>
				<View style={styles.header}>
					<View style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "0px"}}>
						<BookmarkButton image={require("../assets/email.svg")} aspectRatio={26/17}/>
						<BookmarkButton image={require("../assets/help.svg")} aspectRatio={17/26}/>
					</View>
					<Image style={styles.banner} source={require("../assets/banner.svg")} resizeMode="contain"></Image>
				</View>
				<View style={{width: "75%", padding: "0px", display: "flex", flexDirection: "column", alignItems: "center"}}>
					<TextInput style={styles.textInput} value={this.state.inputValue} onChange={(event) => {this.inputChanged(event)}} placeholder="Add players here"/>
					<TouchableOpacity onPress={this.addButtonPressed} style={styles.addButton}><Text style={styles.addButtonText}>+</Text></TouchableOpacity>
				</View>
				<TableView players={this.state.players}/>
				<TouchableOpacity onPress={this.playButtonPressed} style={styles.playButton}>PLAY</TouchableOpacity>
			</LinearGradient>
		)
	}
}

const styles = StyleSheet.create({
	background: {
		flex: "1",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		maxHeight: "100vh",
		overflow: "hidden",
		padding: "0px",
	},
	header: {
		height: "25vh",
		width: "100%",
		overflow: "hidden",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginTop: "30px",
	},
	banner: {
		flex: 1, 
		width: null,
		height: null,
		backgroundColor: "white",
	},
	addButton: {
		backgroundColor: "white",
		fontSize: "50px",
		padding: "0px",
		margin: "0px",
		width: "12vw",
		height: "12vw",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		color: "#A200A2",
		borderRadius: "1000px",
		marginTop: "10px",
	},
	addButtonText: {
		padding: "0px",
		margin: "0px",
		fontSize: "13vw",
		fontFamily: "Avenir",
		color: "#A200A2",
	},
	playButton: {
		backgroundColor: "white",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		fontSize: "8vw",
		borderRadius: "2vw",
		fontFamily: "Avenir Black",
		color: "#E700CD",
		padding: "2vw",
		paddingLeft: "10vw",
		paddingRight: "10vw",
		marginBottom: "20px",
	},
	textInput: {
		backgroundColor: "white",
		fontSize: "6vw",
		padding: "7px",
		borderRadius: "100px",
		paddingLeft: "20px",
		width: "100%",
		fontFamily: "Avenir",
		color: "#9B009F",
	}

})

export default HomeScreen;