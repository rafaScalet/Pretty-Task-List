import { View, TextInput } from 'react-native';
import { input } from '@styles'

export function FormTask () {
	return (
		<View style={{marginHorizontal: 12}}>
			<TextInput placeholder='Title of the task' style={input}/>
			<TextInput placeholder='Final date of the task' style={input}/>
			<TextInput placeholder='Description of the task' style={input} numberOfLines={5} multiline/>
		</View>
	);
};