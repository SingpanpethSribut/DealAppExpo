import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import AppTheme from '../assets/constants/AppTheme'
import { Ionicons } from '@expo/vector-icons'

export const SolidButton = (props) => (
	<TouchableOpacity
		style={{ ...styles.button, ...styles.btnSolid, ...props.btnStyle }}
		onPress={props.onPress}
	>
		<Text style={{ ...styles.textSolid, ...props.txtStyle }}>{props.value}</Text>
	</TouchableOpacity>
)

export const OutlineButton = (props) => (
	<TouchableOpacity
		style={{ ...styles.button, ...styles.btnLineout, ...props.btnStyle }}
		onPress={props.onPress}
	>
		<Text style={{ ...styles.textLineout, ...props.txtStyle }}>{props.value}</Text>
	</TouchableOpacity>
)

export const TextButton = (props) => (
	<TouchableOpacity
		style={{ ...styles.btnText, ...props.btnStyle }}
		onPress={props.onPress}
	>
		<Text style={{ ...styles.textLineout, ...props.txtStyle }}>{props.value}</Text>
	</TouchableOpacity>
)

export const IconButton = (props) => (
	<TouchableOpacity
		style={{ ...styles.btnText, ...props.btnStyle }}
		onPress={props.onPress}
	>
		<Ionicons
			name={props.name}
			size={props.size || 18}
			color={props.color}
		/>
	</TouchableOpacity>
)

const styles = StyleSheet.create({
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 10,
	},
	btnSolid: {
		padding: 10,
		backgroundColor: AppTheme.colors.primary,
	},
	textSolid: {
		fontWeight: 'bold',
		color: AppTheme.colors.onPrimary,
	},
	btnLineout: {
		padding: 10,
		borderWidth: 1,
		borderColor: AppTheme.colors.primary,
	},
	textLineout: {
		fontWeight: 'normal',
		color: AppTheme.colors.primary,
	},
	btnText: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	textTitle: {
		fontWeight: 'normal',
		color: AppTheme.colors.primary,
	},
})
