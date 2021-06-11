import React from "react";
import HomeScreen from '../../screens/HomeScreen';
import TikkunHaklali from '../../screens/TikkunHaklali';
import PsaumesScreen from '../../screens/PsaumesScreen';
import { Switch, Route } from 'react-router-dom';


const MainRoute = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/tikkoun-haklali' component={TikkunHaklali} />
            <Route exact path='/psaumes' component={PsaumesScreen} />
            <Route component={NotFound} />
        </Switch>
    );
}

const NotFound = () => (
    <div style={{ marginTop: 70 }}>
    <h1>404.. This page is not found!</h1>
    </div>
);




export {
    MainRoute
}