import React from "react";
import {Home} from "./pages/Home"
import {Panel} from "./pages/Panel"
import {NotFound} from "./pages/NotFound";
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
