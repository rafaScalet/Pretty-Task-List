import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.config'

export const handleSigIn = async (email, password) => {
	await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
		const { email } = userCredential.user;
		console.log(email);
	})

}