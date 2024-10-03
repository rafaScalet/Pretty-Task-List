import { registerRootComponent } from 'expo'
import { Login } from './screens'

registerRootComponent(App)

export default function App() {
	return (
		<Login></Login>
  );
};