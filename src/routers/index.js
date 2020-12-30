import React from 'react';
import {
    Route,
    Switch,
} from "react-router-dom";
import RenderRouters from './routes'
const Root = function () {
    return (
        <Switch>
            {RenderRouters()}
            <Route component={() => (<h1 style={{justifyContent:"center", display:"flex"}}>Not Found 404</h1>)} />                       
        </Switch>
    )
}

export default Root;