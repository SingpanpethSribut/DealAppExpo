import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import MainScreen from '../screens/MainScreens'

const Stack = createNativeStackNavigator()

const Router = (props) => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Main">
				<Stack.Screen
					name={'Login'}
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen
					name={'Signup'}
					component={SignupScreen}
				/>
				<Stack.Screen
					name={'Main'}
					component={MainScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
export default Router
const styles = StyleSheet.create({})
