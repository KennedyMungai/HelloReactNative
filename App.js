import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function App() {
	const [enteredGoalText, setEnteredGoalText] = useState('')

	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText)
	}

	const addGoalHandler = () => {
		console.log(enteredGoalText)
	}

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Your Course Goal'
					style={styles.textInput}
					onChangeText={goalInputHandler}
				/>
				<Button
					title='Add Goal'
					color={'#ff8855'}
					onPress={addGoalHandler}
				/>
			</View>
			<View style={styles.listContainer}>
				<Text>List of goals...</Text>
			</View>
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	appContainer: {
		paddingVertical: 50,
		paddingHorizontal: 16,
		flex: 1
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 5,
		alignItems: 'center',
		paddingBottom: 24,
		borderBottomWidth: 1,
		flex: 1
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#ccc',
		width: '70%',
		padding: 5
	},
	listContainer: {
		flex: 5
	}
})
