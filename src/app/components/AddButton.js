import { Text, Pressable } from 'react-native'
import { addButton, textButton } from '@styles'
import { addTask } from '@functions'

export function AddButton ({ data, navigation }) {
	return (
		<Pressable style={addButton} onPress={() => addTask(data, navigation)}>
			<Text style={[textButton, {fontSize: 20}]}>+</Text>
		</Pressable>
	)
}