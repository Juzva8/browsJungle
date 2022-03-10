import React from 'react';
import { Switch, Route } from 'react-router';
 
export default (
    <Switch>
        <Route path='/' />
        <Route path="/about" exact/>
        <Route path="/service" exact/>
        <Route path="/before-booking" exact/>
        <Route path="/contact" exact/>
        <Route path="/PmuBrows" exact/>
        <Route path="/LipBlush" exact/>
        <Route path="/Pricing" exact/>
        <Route path="/Gallery" exact/>
        <Route />
    </Switch>
);
