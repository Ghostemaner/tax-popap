import React from "react";
import App from "../App";
import ModalDefault from "./ModalDefault";
import ModalChecked from "./ModalChecked";
import { Route, Link, Switch, Redirect } from 'react-router-dom';

export default function Router() {
    return (
        <Switch>
            <Route path='/' exact component={App} />

            <Route path='/tax-deduction' exact component={ModalDefault}/>
            <Route>
                <p className='route-error'>404: NOT FOUND</p>
            </Route>

        </Switch>
    )
}