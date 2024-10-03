import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.config'

export const handleCreateAccount = async (email, password) => {
	await createUserWithEmailAndPassword(auth, email, password).then(userCredential => {
		const { email } = userCredential.user;
		console.log(`Created account with email: ${email}`);
	});
};