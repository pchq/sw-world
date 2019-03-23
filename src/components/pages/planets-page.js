import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

import Row from '../row';
import { DetailPlanet as Detail, PlanetList as List } from '../sw-components';

const PlanetsPage = ({history, match}) => {

    console.log(history);
    console.log(match);
    
    const {id} = match.params; 
    return(
        <Row
            left={<List onItemSelect={(id) => history.push(id)}/>}
            right={<Detail id={id}/>}
        />
    )
};

export default withRouter(PlanetsPage);