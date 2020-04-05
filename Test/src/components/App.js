import React from "react";
import { Route, Switch } from 'react-router-dom';
import { withLastLocation } from 'react-router-last-location';
import TrackerTable from "./TrackerTable";
import { ActionButton } from "./TrackerModal";

const App = (props) => (
  <div>
    <h2>Wallet Tracker</h2>
    <ActionButton size={'small'} type ='button' onClick={() => {
      props.history.push('/add-wallet')
    }}>{'ADD EXPENSE'}</ActionButton>
      <Switch>
        <Route path="/*" exact={true} component={TrackerTable} />
      </Switch>
  </div>
);

export default withLastLocation(App);
