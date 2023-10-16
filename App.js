import { StatusBar } from 'expo-status-bar'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

export default function App() {
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					placeholder='Your Course Goal'
					style={styles.textInput}
				/>
				<Button title='Add Goal' />
			</View>
			<View>
				<Text>List of goals...</Text>
			</View>
			<StatusBar style='auto' />
		</View>
	)
}

const styles = StyleSheet.create({
	appContainer: {
		paddingVertical: 50,
		paddingHorizontal: 16
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 5,
		alignItems: 'center'
	},
	textInput: {
		borderWidth: 1,
		borderColor: '#ccc',
		width: '70%'
	}
})
