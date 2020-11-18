import store from "./redux/redux-store"
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from "./StoreContext"
import {BrowserRouter} from "react-router-dom"


let rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                {/*<React.StrictMode>*/}
                <App/>
                {/*</React.StrictMode>*/}
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    )
}
rerenderEntireTree(store.getState())

store.subscribe(() => {
    rerenderEntireTree(store.getState())
})