import { Text, Pressable, Image } from 'react-native'
import { addButton, textButton } from '@styles'
import { addTask } from '@functions'

export function AddButton ({ isEditing = false, data, navigation }) {
	return (
		<Pressable style={isEditing ? [addButton, { backgroundColor: '#7fbf2a' }] : addButton} onPress={() => addTask(data, navigation)}>
			<Text style={[textButton, {fontSize: 20}]}>
				{isEditing ? <Image source={require('@app/assets/edit.svg')}/> : '+'}
			</Text>
		</Pressable>
	)
}