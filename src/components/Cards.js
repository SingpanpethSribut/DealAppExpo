import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { SelectList } from 'react-native-dropdown-select-list'

import { TextInputPicker } from './InputText'

export const SelectDateCard = (props) => {
	const [valueDate, setValueDate] = useState(new Date())

	console.log(valueDate.toString())

	const arrYear = []
	const arrMonth = []
	const arrDate = []

	const genYear = () => {
		const curYear = new Date()
		let minYear = 15
		let maxYear = 80
		for (let i = curYear.getFullYear() - minYear; i > curYear.getFullYear() - maxYear; i--) {
			arrYear.push(i)
		}
	}

	const genMonth = () => {
		for (let i = 1; i < 13; i++) {
			arrMonth.push(i)
		}
	}

	const genDate = () => {
		for (let i = 1; i < 32; i++) {
			arrDate.push(i)
		}
	}

	genYear()
	genMonth()
	genDate()

	// console.log(data)

	onChangeDate = (value, type) => {
		console.log(value, type)
		switch (type) {
			case 'date':
				setValueDate(valueDate.setFullYear(value))
			case 'month':
				setValueDate(valueDate.setMonth(value - 1))
			case 'year':
				setValueDate(valueDate.setFullYear(value))
		}
		console.log(valueDate.toString)
	}

	return (
		<View style={{ ...styles.container, ...props.containerStyle }}>
			<Text style={styles.containerTitle}>{props.title}</Text>
			<View style={styles.selectDateCard}>
				<SelectList
					data={arrYear}
					setSelected={(sel) => {
						console.log('Select Year:', sel)
						setValueDate(new Date(sel, valueDate.getMonth(), valueDate.getDate()))
					}}
					placeholder={valueDate.getFullYear()}
					search={false}
				/>
				<SelectList
					data={arrMonth}
					setSelected={(sel) => {
						console.log('Select Month:', sel)
						setValueDate(
							new Date(valueDate.getFullYear(), sel - 1, valueDate.getDate())
						)
					}}
					placeholder={valueDate.getMonth() + 1}
					search={false}
				/>
				<SelectList
					data={arrDate}
					setSelected={(sel) => {
						console.log('Select Date:', sel)
                        let selDate = new Date(valueDate.getFullYear(), valueDate.getMonth(), sel)
                        console.log(selDate);
						// setValueDate()
					}}
					placeholder={valueDate.getDate()}
					search={false}
				/>
			</View>
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
	selectDateCard: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10,
	},
})
