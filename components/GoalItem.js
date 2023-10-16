import { StyleSheet } from 'react-native'

const GoalItem = () => {
	return (
		<View style={styles.individualGoal}>
			<Text style={{ color: 'white' }}>{itemData.item.text}</Text>
		</View>
	)
}

export default GoalItem

const styles = StyleSheet.create({
	individualGoal: {
		color: 'white'
	}
})
