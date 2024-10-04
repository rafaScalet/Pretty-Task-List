import { FormTask, AddButton } from '@components';
import { addTaskContainer } from '@styles';
import { SafeAreaView } from 'react-native';

export function AddTask ({ navigation }) {
	return (
		<SafeAreaView style={addTaskContainer}>
			<FormTask/>
			<AddButton/>
		</SafeAreaView>
	);
};