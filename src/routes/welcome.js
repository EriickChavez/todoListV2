import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ForgotPassword from "../pages/forgot-password/forgot-password";
import LogIn from "../pages/log-in/index";
import SignUp from "../pages/sign-up/index";
import Home from "../pages/home/index";
import FullScreenTask from "../components/tasks/index";

const Stack = createNativeStackNavigator();

function App() {
    const options = { headerShown: false }
    return (
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
                />
            </Stack.Navigator>
    );
}

export default App;