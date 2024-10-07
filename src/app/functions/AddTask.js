import { db } from '@app/firebase.config';
import { addDoc, collection } from 'firebase/firestore'

export const addTask = async ({title, dueDate, description}) => {
	await addDoc(collection(db, 'tasks'), { title, dueDate, description }).then(data => console.log(data.path))
};