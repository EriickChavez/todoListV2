import React from 'react'
import Application from './src/routes/index'
import { store } from './src/redux/store/store'
import { Provider } from 'react-redux'

export type Props = { };

const App = (props:Props) => (
    <Provider store={store}>
        <Application />
    </Provider>
)


export default App;


