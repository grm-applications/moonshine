
import React from "react";
import {TouchableOpacity, View, StyleSheet, Animated} from "react-native";

class PageIndicator extends React.Component {

	constructor() {
		super();
		this.state = {
			number: 5
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Animated.View style={{height: "3vw", width: "3vw", backgroundColor: "white", margin: 8, borderRadius: "1000px"}}/>
				<Animated.View style={{height: "3vw", width: "3vw", backgroundColor: "#595959", margin: 8, borderRadius: "1000px"}}/>
				<Animated.View style={{height: "3vw", width: "3vw", backgroundColor: "#595959", margin: 8, borderRadius: "1000px"}}/>
				<Animated.View style={{height: "3vw", width: "3vw", backgroundColor: "#595959", margin: 8, borderRadius: "1000px"}}/>
				<Animated.View style={{height: "3vw", width: "3vw", backgroundColor: "#595959", margin: 8, borderRadius: "1000px"}}/>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: "30px",
		flexDirection: "row",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	}
})

export default PageIndicator;