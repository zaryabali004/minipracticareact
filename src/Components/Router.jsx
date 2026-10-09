import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "./HomeComponent"
import  DoctoresEspecialidad from "./DoctoresEspecialidad"
import MenuRutas from "./MenuRutas";
export default class Router extends Component {

    render() {

        return (

            <BrowserRouter>
            <MenuRutas />
                <Routes>
                    <Route
                        path="/"
                        element={<HomeComponent />}
                    />

                    <Route
                        path="/DoctoresEspecialidad"
                        element={<DoctoresEspecialidad />}
                    />


                </Routes>

            </BrowserRouter>

        );

    }

}