import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import OpeningScreen from './screens/OpeningScreen'; 
import HomeScreen from './screens/HomeScreen'; 
import LoginScreen from './screens/LoginScreen'; 
import TeamRegisterScreen from './screens/TeamRegisterScreen'
import PerfilScreen from './screens/PerfilScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import AnswersScreen from './screens/AnswersScreen';
import EditPerfilScreen from './screens/EditPerfilScreen';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Opening" component={OpeningScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TeamRegister" component={TeamRegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Perfil" component={PerfilScreen} options={{ headerShown:false }} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown:false }} />
        <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown:false }} />
        <Stack.Screen name="Answers" component={AnswersScreen} options={{ headerShown:false }} />
        <Stack.Screen name="EditPerfil" component={EditPerfilScreen} options={{ headerShown: false }} />    
      </Stack.Navigator>
    </NavigationContainer>
  );
}