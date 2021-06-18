
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'

class TileButton extends React.Component {
	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress} style={styles.button}><Image style={styles.image} source={this.props.image}/></TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	button: {
		height: "42vw",
		width: "42vw",
		backgroundColor: "white",
		borderRadius: "3vw",
	},
	image: {
		width: "100%",
		height: "100%",
	},
})

export default TileButton;