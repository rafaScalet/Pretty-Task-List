import { db } from '@app/firebase.config'
import { doc, getDoc } from 'firebase/firestore'

export const getTask = async (id) => {
	let data = {}

	await getDoc(doc(db, 'tasks', id)).then(doc => {
		data = doc.data()
	})

	return data
}