import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import { SolidButton, TextButton, TextInputVaidate, TextInputPassword } from '../components'

const SignupScreen = (props) => {
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [password, setPassword] = useState('')
	const [repassword, setRepassword] = useState('')

	props.navigation.setOptions({ headerShown: true })

	return (
		<View style={styles.container}>
			<ScrollView style={styles.scrollContainer}>
				<TextInputVaidate
					title={'อีเมล์'}
					value={email}
					// onChangeText={EmailValidation}
				/>
				<TextInputVaidate
					title={'เบอร์โทรศัพท์'}
					value={phone}
					// onChangeText={EmailValidation}
				/>
				<TextInputPassword
					title={'พาสเวิร์ด'}
					value={password}
					onChangeText={(pass) => setPassword(pass)}
				/>
				<TextInputPassword
					title={'ใส่พาสเวิร์ดอีกครั้ง'}
					value={repassword}
					onChangeText={(pass) => setRepassword(pass)}
				/>
				<View style={{ borderBottomColor: '#fff', borderBottomWidth: 1, margin: 10 }} />
			</ScrollView>
		</View>
	)
}
export default SignupScreen
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 30,
	},
	scrollContainer: {
		// paddingTop: 20
	},
})
