import {
    Route,
    Redirect
} from "react-router-dom";
import React from 'react';

export function renderRouters(routes = []) {
    const listRoutes = routes.map(route => {
        if (route.auth) {
            var user_token = localStorage.getItem("token")
            return (<Route key={route.key} path={route.path} exact={route.exact}
                component={(props) => {
                    return user_token ? route.Component(props) : (
                        <Redirect
                            to={{
                                pathname: "/login",                              
                            }}
                        />
                    )
                }} />)
        }
        return (<Route key={route.key} path={route.path} exact={route.exact}
            component={(props) => {
                return route.Component(props)
            }} />)
    }
    )
    return listRoutes;
}

export class RoutesController {
    ROUTES = [];    
    registerRoute = (path, key, Component, childRoutes = [], exact = false, auth = false) => {

        this.ROUTES.push({
            path: path,
            key: key,
            exact,
            childRoutes,
            Component: (props) => <Component {...props} />,
            auth
        })
    }
}