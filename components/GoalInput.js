import { useState } from 'react'
import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native'

const GoalInput = ({ onAddGoal, isVisible, isNotVisible }) => {
	const [enteredGoalText, setEnteredGoalText] = useState('')

	const goalInputHandler = (enteredText) => {
		setEnteredGoalText(enteredText)
	}

	const addGoalHandler = () => {
		onAddGoal(enteredGoalText)
		setEnteredGoalText('')
		isNotVisible()
	}

	return (
		<Modal animationType='slide' visible={isVisible}>
			<View style={styles.inputContainer}>
				<Image
					source={require('../assets/images/some_image.jpg')}
					style={styles.image}
					resizeMode='stretch'
				/>
				<TextInput
					placeholder='Your Course Goal'
					style={styles.textInput}
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				<View style={{ flexDirection: 'row', gap: 10 }}>
					<Button
						title='Add Goal'
						color={'#ff8855'}
						onPress={addGoalHandler}
					/>
					<Button
						title='Cancel'
						color={'#dd8855'}
						onPress={isNotVisible}
					/>
				</View>
			</View>
		</Modal>
	)
}

export default GoalInput

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'column',
		justifyContent: 'center',
		padding: 5,
		alignItems: 'center',
		paddingBottom: 24,
		borderBottomWidth: 1,
		flex: 1,
		backgroundColor: '#fa0'
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#ccc',
		width: '70%',
		padding: 10,
		margin: 10,
		borderRadius: 5,
		backgroundColor: '#fff'
	},
	image: {
		height: 400,
		width: 400
	}
})
