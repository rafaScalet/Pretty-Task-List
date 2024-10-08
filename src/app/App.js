import { registerRootComponent } from 'expo'
import { Login, Home, AddTask, EditTask } from '@screens'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

registerRootComponent(App)

export default function App() {
	const Drawer = createDrawerNavigator();

	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName='Log-Out'>
				<Drawer.Screen name='Home' component={Home}/>
				<Drawer.Screen name='Add-Task' component={AddTask}/>
				<Drawer.Screen name='Log-Out' component={Login} options={{headerShown: false}}/>
				<Drawer.Screen name='editar' component={EditTask} options={{title: ''}}/>
			</Drawer.Navigator>
		</NavigationContainer>
  );
};