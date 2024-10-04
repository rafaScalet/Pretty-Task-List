import { Text, TextInput, SafeAreaView, Pressable, Image } from 'react-native';
import { handleSigIn, handleCreateAccount } from '@functions';
import { useState } from 'react';
import { container, input, logInButton, textButton, title } from '@styles'

export function Login({ navigation }) {
	const [email, setEmail] = useState('teste@teste.com');
	const [password, setPassword] = useState('123456');

  return (
    <SafeAreaView style={container}>
			<Image source={require('@app/assets/logo.svg')} />
      <Text style={title}>TaskList</Text>
      <TextInput style={input} placeholder="Enter your email" onChangeText={(inputEmail) => setEmail(inputEmail)} value={email}/>
      <TextInput style={input} placeholder="Enter your password" onChangeText={(inputPassword) => setPassword(inputPassword)} value={password} secureTextEntry={true}/>
      <Pressable style={logInButton} onPress={() => handleSigIn(email, password, navigation)}>
        <Text style={textButton}>Log-in</Text>
      </Pressable>
      <Pressable onPress={() => handleCreateAccount(email, password)}>
        <Text>Create an Account</Text>
      </Pressable>
    </SafeAreaView>
  );
};