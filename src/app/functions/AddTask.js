import { db } from '@app/firebase.config';
import { addDoc, collection } from 'firebase/firestore'

export const addTask = async (data, navigation) => {
	await addDoc(collection(db, 'tasks'), data).then(doc => {
		console.log(doc.path)
		navigation.navigate('Home')
	})
};