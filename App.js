import React from 'react'
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import Router from './src/router/Router'

export default App = () => (
	<KeyboardAvoidingView
		behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
		style={styles.container}
	>
		<Router />
		<StatusBar style={'auto'} />
	</KeyboardAvoidingView>
)

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	content: {
		flex: 1,
	},
})
