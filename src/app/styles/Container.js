import { StyleSheet } from 'react-native'

const containers = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	cardContainer: {
		alignItems: 'center',
		flexDirection: 'row',
    padding: 16,
    borderRadius: 12,
    marginHorizontal: 24,
		marginVertical: 5,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
	addTaskContainer: {
		flex: 1,
		justifyContent: 'center',
	},
});

export const { container, cardContainer, addTaskContainer } = containers;