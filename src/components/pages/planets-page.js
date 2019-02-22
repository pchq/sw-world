import React, { Component } from 'react';

import Row from '../row';
import { DetailPlanet as Detail, PlanetList as List } from '../sw-components';

export default class PlanetsPage extends Component{
    
    state = {
        selectedItem: null,
    };

    onItemSelect = (selectedItem) => {
        this.setState({
            selectedItem
        })
    };
    
    render(){
        const {selectedItem} = this.state; 
        return(
            <Row
                left={<List onItemSelect={this.onItemSelect}/>}
                right={<Detail id={selectedItem}/>}
            />
        )
    }
}