import { Pressable, Text } from 'react-native';
import { addButton, textButton } from '@styles';

export function AddButton () {
	return (
		<Pressable style={addButton}>
			<Text style={[textButton, {fontSize: 20}]}>+</Text>
		</Pressable>
	);
};