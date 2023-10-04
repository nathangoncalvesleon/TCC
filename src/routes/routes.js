import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/home/home';
import Calendar from '../pages/calendar/calendar';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();



export function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false
      }}>
        <Tab.Screen name="Home" component={Home}  />
        <Tab.Screen name="Settings" component={Calendar} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}