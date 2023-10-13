"use client"
const { Provider } = require("react-redux");
import { store } from "./store";

export  function Providers({children}){
    return (
    <Provider store={store}>
        {children}
    </Provider>
    )

}