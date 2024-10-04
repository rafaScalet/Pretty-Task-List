import { StyleSheet } from 'react-native';

const texts = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
  },
	taskTitle: {
		marginRight: 8,
		fontWeight: 'bold',
		fontSize: 16,
	},
	dueDateText: {
		color: '#777',
		marginRight: 'auto',
	},
});

export const { taskTitle, textButton, title, dueDateText } = texts;