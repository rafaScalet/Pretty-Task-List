import { FormTask } from '@components';
import { addTaskContainer } from '@styles';
import { SafeAreaView } from 'react-native';

export function AddTask ({ navigation }) {
	return (
		<SafeAreaView style={addTaskContainer}>
			<FormTask/>
		</SafeAreaView>
	);
};