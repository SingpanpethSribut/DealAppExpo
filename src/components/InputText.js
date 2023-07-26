import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import AppTheme from '../assets/constants/AppTheme'
import { Ionicons } from '@expo/vector-icons'
import { SelectList } from 'react-native-dropdown-select-list'

import { TextButton, IconButton } from './Buttons'

export const TextInputVaidate = (props) => {
	const [isFocused, setIsFocused] = useState(false)
	return (
		<View style={{ ...styles.container, ...props.containerStyle }}>
			<Text style={styles.containerTitle}>{props.title}</Text>
			<View style={isFocused ? styles.containerActive : styles.containerInactive}>
				<TextInput
					style={isFocused ? styles.inputActive : styles.inputInactive}
					placeholder={props.title}
					value={props.value}
					onChangeText={props.onChangeText}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				/>
			</View>
			{props.result && <Text style={styles.txtResult}>{props.result}</Text>}
		</View>
	)
}

export const TextInputPassword = (props) => {
	const [isFocused, setIsFocused] = useState(false)
	const [hidePass, setHidePass] = useState(true)
	return (
		<View style={{ ...styles.container, ...props.containerStyle }}>
			<View style={styles.containerTitle}>
				<Text>{props.title}</Text>
				<TextButton
					onPress={props.optionOnPress}
					value={props.optionTitle}
				/>
			</View>
			<View style={isFocused ? styles.containerActive : styles.containerInactive}>
				<TextInput
					secureTextEntry={hidePass}
					style={isFocused ? styles.inputActive : styles.inputInactive}
					placeholder={props.title}
					value={props.value}
					onChangeText={props.onChangeText}
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
				/>
				<IconButton
					name={hidePass ? 'eye' : 'eye-off'}
					color={isFocused ? AppTheme.colors.primary : AppTheme.colors.onSurfaceVariant}
					size={props.iconSize}
					onPress={() => setHidePass(!hidePass)}
				/>
			</View>
			{props.result && <Text style={styles.txtResult}>{props.result}</Text>}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 20,
	},
	containerTitle: {
		marginBottom: 5,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	containerInactive: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
		borderRadius: 10,
		borderColor: AppTheme.colors.onSurfaceVariant,
		borderWidth: 1,
	},
	containerActive: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 10,
		borderRadius: 10,
		borderColor: AppTheme.colors.primary,
		borderWidth: 2,
	},
	inputActive: {
		flex: 1,
		fontWeight: 'bold',
		color: AppTheme.colors.primary,
	},
	inputInactive: {
		// flex: 1,
		color: AppTheme.colors.onSurfaceVariant,
	},
	txtResult: {
		fontSize: 10,
		color: AppTheme.colors.error,
	},
})
