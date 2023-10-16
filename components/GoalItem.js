import { StyleSheet, Text, View } from 'react-native'

const GoalItem = (itemData) => {
	return (
		<View style={styles.goalsList}>
			<Text style={{ color: 'white' }}>{itemData.item}</Text>
		</View>
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
