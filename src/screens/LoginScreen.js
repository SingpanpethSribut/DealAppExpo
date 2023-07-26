import React, { useState } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

import { SolidButton, TextButton, TextInputVaidate, TextInputPassword } from '../components'

const LoginScreen = (props) => {
	const [username, setUsername] = useState('')
	const [validEmail, setValidEmail] = useState('')
	const [password, setPassword] = useState('')

	EmailValidation = (text) => {
		setUsername(text)
		let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
		if (reg.test(text) === false) {
			setValidEmail('Email is Not Correct')
		} else {
			setValidEmail('')
		}
	}

	ForgetPassword = () => {
		console.log('Forget password?')
	}

	RegisterNewUser = () => {
		console.log('Register new user')
		props.navigation.navigate('Signup')
	}

	SummitLogin = () => {
		console.log('Login!')
	}

	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					style={styles.imageSize}
					resizeMode="contain"
					source={require('../assets/images/logo_deals_full_text.png')}
				/>
			</View>
			<View style={styles.inputContainer}>
				<TextInputVaidate
					title={'ชื่อผู้ใช้งาน'}
					value={username}
					onChangeText={EmailValidation}
					result={setUsername}
				/>
				<TextInputPassword
					title={'พาสเวิร์ด'}
					value={password}
					onChangeText={(pass) => setPassword(pass)}
					optionTitle={'ลืมรหัสผ่าน?'}
					optionOnPress={ForgetPassword}
				/>
			</View>
			<View style={styles.buttonContainer}>
				<SolidButton
					value={'เข้าสู่ระบบ'}
					onPress={SummitLogin}
				/>
				<View style={styles.registerContent}>
					<Text>ยังไม่มีบัญชีผู้ใช้? </Text>
					<TextButton
						value={'สมัครบัญชีใหม่'}
						onPress={RegisterNewUser}
					/>
				</View>
			</View>
		</View>
	)
}
export default LoginScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 30,
	},
	imageContainer: {
		flex: 2,
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputContainer: {
		flex: 1,
		justifyContent: 'center',
	},
	buttonContainer: {
		flex: 1,
		justifyContent: 'center',
		// paddingTop: Platform.OS === 'ios' ? 0 : 30,
	},
	imageSize: {
		width: 200,
		height: 200,
	},
	registerContent: {
		marginVertical: 20,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
})
