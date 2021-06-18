
import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import TileButton from "../components/TileButton.js";
import paranoiaIcon from "../assets/paranoia.svg";
import neverHaveIEverIcon from "../assets/never-have-i-ever.svg";


class Carousel extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <ScrollView horizontal={true} style={styles.container} pagingEnabled={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.view}><TileButton onPress={this.props.paranoiaButtonPressed} image={paranoiaIcon}/></View>
                    <View style={styles.view}><TileButton onPress={this.props.neverHaveIEverButtonPressed} image={neverHaveIEverIcon}/></View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        flex: 1,
        zIndex: -1,
    },
    view: {
        width: "100vw",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
})

export default Carousel;