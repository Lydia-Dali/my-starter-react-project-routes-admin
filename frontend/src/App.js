import React, { Component } from "react";
import { Provider } from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./store";

import './App.css';
import PublicRouter from "./Components/Routeur";
import AdminRouter from "./Components/AdminRouteur";


class App extends Component {
    render() {
        console.log("default state :", store.getState())
        return (
            <BrowserRouter>
                <Provider store={store  }>
                    <div>
                        {
                            !window.location.href.includes('admin') &&
                            <PublicRouter />
                        }
                        {
                            window.location.href.includes('admin') &&
                            <AdminRouter />
                        }
                    </div>
                </Provider>
            </BrowserRouter>
        );
    }
}

export default App;