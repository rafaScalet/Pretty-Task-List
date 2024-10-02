import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, SafeAreaView, Pressable, Image } from 'react-native';
import { styles } from '../Style'

export function Login() {
  return (
    <SafeAreaView style={styles.container}>
			<Image source={require('./../../Assets/logo.svg')} />
      <Text style={styles.title}>TaskList</Text>
      <TextInput style={styles.input} placeholder="Enter your name"/>
      <TextInput style={styles.input} placeholder="Enter your password"/>
      <Pressable style={styles.button}>
        <Text style={styles.textButton}>Log-in</Text>
      </Pressable>
    </SafeAreaView>
  );
};