import { db } from '@app/firebase.config'
import { doc, updateDoc } from 'firebase/firestore'

export const editTask = async (id, data, navigation) => {
	await updateDoc(doc(db, 'tasks', id), data).then(() => {
		navigation.navigate('Home')
	})
}