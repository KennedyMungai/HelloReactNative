import { StatusBar } from 'expo-status-bar'
import { useState } from 'react'
import { FlatList, StyleSheet, View, Button } from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {
	const [courseGoals, setCourseGoals] = useState([])
	const [modalIsVisible, setModalIsVisible] = useState(false)

	const addGoalHandler = (enteredGoalText) => {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredGoalText, key: Math.random().toString() }
		])
	}

	const deleteGoalHandler = (id) => {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal) => goal.id !== id)
		})
	}

	const startAddGoalHandler = () => {
		setModalIsVisible(true)
	}

	return (
		<View style={styles.appContainer}>
			<Button
				title='Add a new goal'
				color={'#ff5588'}
				onPress={startAddGoalHandler}
			/>
			<GoalInput onAddGoal={addGoalHandler} isVisible={modalIsVisible} />
			<View style={styles.listContainer}>
				<FlatList
					data={courseGoals}
					renderItem={(itemData) => {
						return (
							<GoalItem
								text={itemData.item.text}
								onDeleteItem={deleteGoalHandler}
								id={itemData.item.id}
							/>
						)
					}}
					keyExtractor={(item, index) => {
						return index
					}}
					alwaysBounceVertical={true}
				/>
			</View>

			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	appContainer: {
		paddingVertical: 50,
		paddingHorizontal: 16,
		flex: 1
	},
	listContainer: {
		flex: 5,
		flexDirection: 'column',
		gap: 10,
		marginTop: 10
	}
})
