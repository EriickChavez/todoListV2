
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../pages/home/index";
import FullScreenTask from "../components/tasks/index";

const Stack = createNativeStackNavigator();

function App() {
    const options = { headerShown: false }
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={options}
            />
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Screen
                    name="FullScreenTask"
                    component={FullScreenTask}
                    options={options}
                />
            </Stack.Group>
        </Stack.Navigator>
    );
}

export default App;