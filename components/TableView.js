
import React from "react";
import { View, StyleSheet, ActivityIndicator, ScrollView, Text } from "react-native";

class TableView extends React.Component {

	render() {
		return (
			<View style={styles.container}>
				<ScrollView contentContainerStyle={styles.scrollView}>
					{this.props.players.map((item, index) => (
						<View key={index} style={[styles.userItem, (index == 0) ? {borderTopWidth: 1} : {}]}>
							<Text numberOfLines={1} style={styles.name}>{item}</Text>
						</View>
					))}
				</ScrollView>
			</View>
		)
	}

};


const styles = StyleSheet.create({

	container: {
		height: "21vh",
		width: "50vw",
		borderColor: "white",
	},

	scollView: {
		flex: 1,
	},

	userItem: {
		borderColor: "white",
		borderBottomWidth: 1,
		width: "100%",
		height: "7vh",
		display: "flex",
		justifyContent: "center",
		paddingLeft: "5px",
	},
	name: {
		color: 'white',
		fontSize: "5vw",
		fontFamily: "Avenir Black",
	},
});



export default TableView;