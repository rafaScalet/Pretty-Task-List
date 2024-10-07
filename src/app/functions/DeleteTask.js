import { db } from '@app/firebase.config'
import { deleteDoc, doc } from 'firebase/firestore'

export const deleteTask =  async (id) => {
	await deleteDoc(doc(db, 'tasks', id))
}