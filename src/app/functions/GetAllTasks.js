import { db } from '@app/firebase.config'
import { collection, getDocs } from 'firebase/firestore'

export const getAllTasks = async () => {
	var document = [];

	await getDocs(collection(db, 'tasks')).then(data => {
		data.forEach(doc => {
			document.push({...doc.data(), id: doc.id});
		});
	});

	return document;
};