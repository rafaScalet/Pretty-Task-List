import { NavButton, Task } from '@components'
import { FlatList, SafeAreaView, ScrollView } from 'react-native';
import { getAllTasks } from '@functions'
import { useEffect, useState } from 'react';

export function Home ({ navigation }) {
	const [tasks, setTasks] = useState([]);

  useEffect(() => {
		getAllTasks().then((data) => {
			setTasks(data);
			console.log(data);
		});
  }, []);

	return (
		<SafeAreaView style={{flex: 1}}>
			<ScrollView>
				<FlatList data={tasks} keyExtractor={({ id }) => id.toString()} renderItem={({ item }) => (
					<Task title={item.title} dueDate={item.dueDate} isChecked={item.isChecked} id={item.id}/>
				)}/>
			</ScrollView>
			<NavButton navigation={navigation} screen={'Add-Task'}/>
		</SafeAreaView>
	);
};