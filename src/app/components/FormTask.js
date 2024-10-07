import { View, TextInput } from 'react-native';
import { input } from '@styles'
import { useState } from 'react';
import { AddButton } from './addButton';

export function FormTask () {
	const [title, setTitle] = useState('');
	const [dueDate, setDueDate] = useState('');
	const [description, setDescription] = useState('');

	return (
		<View style={{marginHorizontal: 12}}>
			<TextInput placeholder='Title of the task' style={input} value={title} onChangeText={text => setTitle(text)}/>
			<TextInput placeholder='Final date of the task' style={input} value={dueDate} onChangeText={text => setDueDate(text)}/>
			<TextInput placeholder='Description of the task' style={input} value={description} onChangeText={text => setDescription(text)} numberOfLines={5} multiline/>
			<AddButton/>
		</View>
	);
};