import { StyleSheet } from 'react-native';

const buttons = StyleSheet.create({
	logInButton: {
		borderRadius: 50,
    backgroundColor: '#a91101',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 100,
    margin: 12,
    padding: 10,
	},
	actionButton: {
    padding: 2,
		borderRadius: 5,
		marginLeft: 10,
	},
	addButton: {
		alignItems: 'center',
    padding: 8,
    borderRadius: 8,
    marginHorizontal: 24,
		marginVertical: 24,
    backgroundColor: '#3a8dff',
	},
});

export const { logInButton, actionButton, addButton } = buttons;