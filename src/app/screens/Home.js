import { Task } from '@components'
import { SafeAreaView } from 'react-native';

export function Home ({ navigation }) {
	return (
		<SafeAreaView>
			<Task/>
			<Task/>
			<Task/>
		</SafeAreaView>
	);
};