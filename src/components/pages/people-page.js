import React, { Component } from 'react';

import Row from '../row';
import { DetailPerson, PersonList } from '../sw-components';

export default class PeoplePage extends Component{
    
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
                left={<PersonList onItemSelect={this.onItemSelect}/>}
                right={<DetailPerson id={selectedItem}/>}
            />
        )
    }
}