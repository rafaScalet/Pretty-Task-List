import { View, TextInput } from 'react-native';
import { input } from '@styles'
import { useState } from 'react';
import { AddButton } from './addButton';

export function FormTask () {
	const [title, setTitle] = useState('title');
	const [dueDate, setDueDate] = useState('10/10');
	const [description, setDescription] = useState('description');

	const data = {title, dueDate, description};

	return (
		<View style={{marginHorizontal: 12}}>
			<TextInput placeholder='Title of the task' style={input} value={title} onChangeText={text => setTitle(text)}/>
			<TextInput placeholder='Final date of the task' style={input} value={dueDate} onChangeText={text => setDueDate(text)}/>
			<TextInput placeholder='Description of the task' style={input} value={description} onChangeText={text => setDescription(text)} numberOfLines={5} multiline/>
			<AddButton data={data}/>
		</View>
	);
};