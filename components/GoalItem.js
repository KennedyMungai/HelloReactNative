const GoalItem = () => {
	return (
		<div>
			<View style={styles.individualGoal}>
				<Text style={{ color: 'white' }}>{itemData.item.text}</Text>
			</View>
		</div>
	)
}

export default GoalItem
