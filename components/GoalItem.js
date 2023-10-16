import { Pressable, StyleSheet, Text, View } from 'react-native'

const GoalItem = ({ text, onDeleteItem, id }) => {
	return (
		<View style={styles.goalsList}>
			<Pressable
				android_ripple={{ color: '#DDD' }}
				onPress={onDeleteItem.bind(this, id)}
			>
				<Text style={styles.individualGoal}>{text}</Text>
			</Pressable>
		</View>
	)
}

export default GoalItem

const styles = StyleSheet.create({
	individualGoal: {
		color: 'white',
		padding: 10
	},
	goalsList: {
		backgroundColor: '#ff8855',
		borderRadius: 5,
		marginVertical: 2
	}
})
