import { Text, Pressable, Image } from 'react-native'
import { addButton, textButton } from '@styles'

export function AddButton ({ isEditing = false }) {
	return (
		<Pressable style={isEditing ? [addButton, { backgroundColor: '#7fbf2a' }] : addButton}>
			<Text style={[textButton, {fontSize: 20}]}>
				{isEditing ? <Image source={require('@app/assets/edit.svg')}/> : '+'}
			</Text>
		</Pressable>
	)
}