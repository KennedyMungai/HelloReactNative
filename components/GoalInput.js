import { useState } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

const GoalInput = ({ onAddGoal }) => {
	const [enteredGoalText, setEnteredGoalText] = useState('')

	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText)
	}

	const addGoalHandler = () => {
		onAddGoal(enteredGoalText)
		setEnteredGoalText('')
	}

	return (
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
	)
}

export default GoalInput

const styles = StyleSheet.create({
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
	}
})
