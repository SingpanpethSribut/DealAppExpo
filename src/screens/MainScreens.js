import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, SafeAreaView, Button, View } from 'react-native'

import { DateModals, OutlineButton, SelectDateCard } from '../components'

const MainScreens = (props) => {
	return (
		<View style={styles.container}>
			<SelectDateCard />
		</View>
	)
}
export default MainScreens

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// paddingTop: 50,
		// alignItems: 'center',
		// justifyContent: 'center',
	},
})
