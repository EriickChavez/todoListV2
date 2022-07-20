import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from "../pages/forgot-password/forgot-password";
import LogIn from "../pages/log-in/Login";
import SignUp from "../pages/sign-up/sign-up";
import Home from "../pages/home/index";
import FullScreenTask from "../components/tasks/fullScreen-tasks";

const Stack = createNativeStackNavigator();

function App() {
    const options = { headerShown: false }
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="LogIn"
                    component={LogIn}
                    options={options}
                />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                    options={options}
                />
                <Stack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                // options={options} 
                />
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
        </NavigationContainer>
    );
}

export default App;