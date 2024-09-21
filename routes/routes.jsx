import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import home from '../screens/dashboard/index'
import dataReciever from '../screens/data_reciever/index'
import dataSender from '../screens/data_sender/index'
export default function Routes() {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='dashboard'>
                <Stack.Screen name='dashboard'  component={home} options={{headerShown: false}}/>
                <Stack.Screen name='dataSender' component={dataSender} options={{headerShown: false}}/>
                <Stack.Screen name='dataReciever' component={dataReciever} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}