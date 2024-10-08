import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@app/firebase.config';

export const handleSigIn = async (email, password, navigation) => {
	await signInWithEmailAndPassword(auth, email, password).then(userCredential => {
		const { email } = userCredential.user;
		console.log(`SigIn with email: ${email}`);
		navigation.navigate('Home');
	});
};