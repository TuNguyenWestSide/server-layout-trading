import React from 'react';
import {RoutesController, renderRouters} from './helper'

import TabConfig from '../scenes/tab-config/index';
import {Link} from 'react-router-dom';
const routes = new RoutesController()

// đăng ký đường dân mới
routes.registerRoute("/","ROOT", <h1>hello <Link to="/testádsad">Go to test</Link></h1>, [], true)
routes.registerRoute("/a","ROOT", <h1>hello <Link to="/testádsad">Go to testa</Link></h1>)
routes.registerRoute("/tab-config","TabConfig",TabConfig,[],true)

export default ()=> {
    console.log(renderRouters(routes.ROUTES))
    return renderRouters(routes.ROUTES);
}