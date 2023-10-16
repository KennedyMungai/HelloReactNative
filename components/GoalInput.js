import { Button, TextInput, View } from 'react-native'

const GoalInput = () => {
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
