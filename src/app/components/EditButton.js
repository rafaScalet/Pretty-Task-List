import { Pressable, Image } from 'react-native'
import { addButton } from '@styles'
import { editTask, getAllTasks } from '@functions'

export function EditButton ({ data, id, navigation }) {
	return (
		<Pressable style={[addButton, { backgroundColor: '#7fbf2a' }]} onPress={() => editTask(id, data, navigation)}>
			<Image source={require('@app/assets/edit.svg')}/>
		</Pressable>
	)
}