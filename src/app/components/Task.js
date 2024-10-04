import { cardContainer, dueDateText, taskTitle, actionButton } from '@styles';
import Checkbox from 'expo-checkbox';
import { useState } from 'react';
import { Image, Pressable, Text, View } from 'react-native'

export function Task () {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<View style={cardContainer}>
			<Checkbox style={{ marginRight: 8 }} value={isChecked} onValueChange={setIsChecked} color={'#a91101'}></Checkbox>
			<Text style={taskTitle}>title</Text>
			<Text style={dueDateText}>date</Text>
			<Pressable style={[actionButton, {backgroundColor: '#e65a49'}]}>
				<Image source={require('@app/assets/delete.svg')}/>
			</Pressable>
			<Pressable style={[actionButton, {backgroundColor: '#7fbf2a'}]}>
				<Image source={require('@app/assets/edit.svg')}/>
			</Pressable>
		</View>
	);
};