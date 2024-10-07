import { FormTask } from '@components';
import { addTaskContainer } from '@styles';
import { SafeAreaView } from 'react-native';

export function EditTask ({ navigation, route }) {
	const id = route.params.id

	return (
		<SafeAreaView style={addTaskContainer}>
			<FormTask navigation={navigation} id={id} isEditing/>
		</SafeAreaView>
	);
};