const GoalItem = () => {
	return (
		<View style={styles.individualGoal}>
			<Text style={{ color: 'white' }}>{itemData.item.text}</Text>
		</View>
	)
}

export default GoalItem
