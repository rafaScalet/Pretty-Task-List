import { registerRootComponent } from 'expo'
import { Login, Home } from '@screens'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

registerRootComponent(App)

export default function App() {
	const Drawer = createDrawerNavigator();

	return (
		<NavigationContainer>
			<Drawer.Navigator initialRouteName='Home'>
				<Drawer.Screen name='Login' component={Login}/>
				<Drawer.Screen name='Home' component={Home}/>
			</Drawer.Navigator>
		</NavigationContainer>
  );
};