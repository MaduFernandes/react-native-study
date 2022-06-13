import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/pages/Login/Login';
import Home from './src/pages/Home/Home';
import Forms from './src/pages/Forms/Forms';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{ headerShown: false}} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: false}} name="Forms" component={Forms} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

