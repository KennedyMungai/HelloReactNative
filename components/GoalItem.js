import { StyleSheet } from 'react-native'

const GoalItem = () => {
	return (
		<View style={styles.goalsList}>
			<Text style={{ color: 'white' }}>{itemData.item.text}</Text>
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
		borderRadius: 5
	}
})
