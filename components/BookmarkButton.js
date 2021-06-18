
import React from "react";
import {TouchableOpacity, StyleSheet, Image} from "react-native";

class BookmarkButton extends React.Component {

	constructor() {
		super();
		this.state = {
			height: 23,
		}
	}

	render() {
		return (
			<TouchableOpacity style={styles.button}><Image style={{height: this.state.height, width: (this.state.height * this.props.aspectRatio)}} source={this.props.image}></Image></TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	button: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "10vw",
		width: "20vw",
		backgroundColor: "white",
		borderBottomRightRadius: "1000px",
		borderTopRightRadius: "1000px",
		margin: "5px",
		marginLeft: "0px",
	},
})

export default BookmarkButton;