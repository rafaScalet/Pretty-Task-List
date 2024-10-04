import { AddButton, Task } from '@components'
import { SafeAreaView, ScrollView } from 'react-native';

export function Home ({ navigation }) {
	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView>
				<Task/>
				<Task/>
				<Task/>
			</ScrollView>
			<AddButton navigation={navigation}/>
		</SafeAreaView>
	);
};