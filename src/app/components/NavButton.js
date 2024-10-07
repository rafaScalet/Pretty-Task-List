import { Pressable, Text } from 'react-native';
import { addButton, textButton } from '@styles';

export function NavButton ({ navigation, screen }) {
	return (
		<Pressable style={[addButton, { marginHorizontal: 24 }]} onPress={() => navigation.navigate(screen)}>
			<Text style={[textButton, {fontSize: 20}]}>+</Text>
		</Pressable>
	);
};