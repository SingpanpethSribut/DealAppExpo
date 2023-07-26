import { View, Text, StyleSheet } from 'react-native'

export const ContentContainers = (props) => {
	return <View style={{ ...styles.container, ...props.style }}>{...props.children}</View>
}

export const CardContainer = (props) => {
	return <View style={{ ...styles.container, ...props.style }}>{...props.children}</View>
}

export const ModalContainer = (props) => {
	return <View style={{ ...styles.container, ...props.style }}>{...props.children}</View>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})
