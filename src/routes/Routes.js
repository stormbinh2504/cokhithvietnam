
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { injectStyle } from "react-toastify/dist/inject-style";
import PrivateRouterLogin from './../containers/customRouter/PrivateRouterLogin';

function Routes() {
    const { auth } = useSelector((state) => state);

    return (
        <Switch>
            {/* <Route exact path="/dashboard" component={DashBoard} /> */}
        </Switch>
    );
}

export default Routes;
