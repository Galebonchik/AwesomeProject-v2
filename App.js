import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';

import LoginScreen from './src/Screens/LoginScreen';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import Home from './src/Screens/Home';
import CreatePostsScreen from './src/Screens/CreatePostsScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import CommentsScreen from './src/Screens/CommentsScreen';
import MapScreen from './src/Screens/MapScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    RobotoBold: require('./src/Fonts/Roboto-Bold.ttf'), 
    RobotoRegular: require('./src/Fonts/Roboto-Regular.ttf'), 
    RobotoMedium: require('./src/Fonts/Roboto-Medium.ttf'), 
  });

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
        />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
        <Stack.Screen name="CommentsScreen" component={CommentsScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}