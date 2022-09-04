import React, {useMemo} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logged from './logged'
import Welcome from './welcome'


const Stack = createNativeStackNavigator();

function App(props) {
    const isLogged = useMemo(() => !!props.user.userLogged, [props.user.userLogged])
    const options = { headerShown: false }

    console.log("[isLogged]",isLogged);

    return (
        <NavigationContainer>
            <Stack.Navigator >
                {
                !isLogged ? <Stack.Screen
                    name="Welcome"
                    options={options}
                    component={Welcome}
                />
                :
                <Stack.Screen
                    name="Logged"
                    component={Logged}
                    options={options}
                />
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;