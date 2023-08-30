import React from 'react'
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView } from 'react-native'

export const RootContainer = (props) => {
	return (
		<View style={styles.container}>
			<ScrollView style={styles.container} scrollEnabled={props.scrollEnabled}>
				<KeyboardAvoidingView style={styles.container} behavior={'position'}>
					{props.children}
				</KeyboardAvoidingView>
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
