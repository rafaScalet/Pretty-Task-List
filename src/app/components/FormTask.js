import { View, TextInput } from 'react-native';
import { input } from '@styles'
import { useEffect, useState } from 'react';
import { getTask } from '@functions';
import { AddButton, EditButton } from '@components'

export function FormTask ({ navigation, id, isEditing = false }) {
	const [data, setData] = useState({
		title: '',
		dueDate: '',
		description: ''
	})

	useEffect(() => {
		if (id) {
			getTask(id).then(docData => {
				setData(docData)
			})
		}
	}, [])

	return (
		<View style={{marginHorizontal: 12}}>
			<TextInput placeholder='Title of the task' style={input} value={data.title} onChangeText={title => setData({ ...data, title })}/>
			<TextInput placeholder='Final date of the task' style={input} value={data.dueDate} onChangeText={dueDate => setData({ ...data, dueDate })}/>
			<TextInput placeholder='Description of the task' style={input} value={data.description} onChangeText={description => setData({ ...data, description })} numberOfLines={5} multiline/>
			{
				isEditing ?
				<EditButton data={data} navigation={navigation} id={id}/> :
				<AddButton data={data} navigation={navigation}/>
			}
		</View>
	);
};