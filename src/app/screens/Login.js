import { Text, TextInput, SafeAreaView, Pressable, Image } from 'react-native';
import { styles } from '../Style';
import { handleSigIn } from './../functions';
import { useState } from 'react';

export function Login() {
	const [email, setEmail] = useState('teste@teste.com');
	const [password, setPassword] = useState('123456');

  return (
    <SafeAreaView style={styles.container}>
			<Image source={require('./../../Assets/logo.svg')} />
      <Text style={styles.title}>TaskList</Text>
      <TextInput style={styles.input} placeholder="Enter your email" onChangeText={(inputEmail) => setEmail(inputEmail)} value={email}/>
      <TextInput style={styles.input} placeholder="Enter your password" onChangeText={(inputPassword) => setPassword(inputPassword)} value={password} secureTextEntry={true}/>
      <Pressable style={styles.button} onPress={() => handleSigIn(email, password)}>
        <Text style={styles.textButton}>Log-in</Text>
      </Pressable>
      <Pressable>
        <Text>Create an Account</Text>
      </Pressable>
    </SafeAreaView>
  );
};