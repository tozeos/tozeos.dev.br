import React from "react";
import {Home} from "./Pages/Home"
import {Panel} from "./Pages/Panel"
import {NotFound} from "./Pages/NotFound";
import {BrowserRouter as Router, useRoutes} from "react-router-dom";

const App = () => {
    return useRoutes([
        {path: "/", element: <Home/>},
        {path: "panel", element: <Panel/>},
        {path: "*", element: <NotFound/>},
    ]);
};

export const RouterWrapper = () => {
    return (
        <Router>
            <App/>
        </Router>
    );
};
