import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'

import AllTaskTabScreen from '../screens/AllTaskTabScreen'
import MyTaskTabScreen from '../screens/MyTaskTabScreen'
import SettingTabScreen from '../screens/SettingTabScreen'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

export default Router = (props) => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen
					name={'Login'}
					component={LoginScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name={'Signup'} component={SignupScreen} />
				<Stack.Screen
					name={'MainTab'}
					component={MainTab}
					options={{ headerShown: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const MainTab = (props) => {
	return (
		<Tab.Navigator>
			<Tab.Screen name={'AllTaskTab'} component={AllTaskTabScreen} />
			<Tab.Screen name={'MyTaskTab'} component={MyTaskTabScreen} />
			<Tab.Screen name={'SettingTab'} component={SettingTabScreen} />
		</Tab.Navigator>
	)
}

const styles = StyleSheet.create({})
