import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../pages/home/Home';
import Cart from '../../pages/card/Cart'

const Stack = createNativeStackNavigator();


export const Navigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={Home} options={{ title: 'Home' }} />
                <Stack.Screen name='Cart' component={Cart} options={{ title: 'Cart' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )

}