import { Pressable, Text } from 'react-native';
import { addButton, textButton } from '@styles';

export function AddButton ({ navigation }) {
	return (
		<Pressable style={addButton} onPress={() => navigation.navigate('Add Task')}>
			<Text style={[textButton, {fontSize: 20}]}>+</Text>
		</Pressable>
	);
};