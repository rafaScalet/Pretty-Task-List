import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
		// borderColor: '#a91101',
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  button: {
    borderRadius: 50,
    backgroundColor: '#a91101',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 100,
    margin: 12,
    padding: 10,
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
  },
});