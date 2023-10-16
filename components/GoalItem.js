import { Pressable, StyleSheet, Text, View } from 'react-native'

const GoalItem = ({ text }) => {
	const deleteGoal = () => {
		console.log('I have been deleted')
	}

	return (
		<Pressable onPress={deleteGoal}>
			<View style={styles.goalsList}>
				<Text style={styles.individualGoal}>{text}</Text>
			</View>
		</Pressable>
	)
}

export default GoalItem

const styles = StyleSheet.create({
	individualGoal: {
		color: 'white'
	},
	goalsList: {
		padding: 10,
		backgroundColor: '#ff8855',
		borderRadius: 5,
		marginVertical: 2
	}
})
