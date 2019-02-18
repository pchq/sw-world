import React, {Component} from 'react';

import SwapiService from '../../services/swapi-service';

import ItemList from '../item-list';
import ItemDetails, {ItemProp} from "../item-details/item-details";
import Row from '../row';
import ErrorBoundary from '../error-boundary';

import './person-page.css';


import {DetailPerson, PersonList} from '../sw-components'

export default class PersonPage extends Component {

    swapiService = new SwapiService();

    state = {
        selectedPerson: null,
    };

    onPersonSelect = (id) => {
        this.setState({
            selectedPerson: id,
        });
    };
    
    render() {
        const itemList = (
            <ErrorBoundary>
                <PersonList/>
            </ErrorBoundary>
        );
        
        const personDetail = (
            <ErrorBoundary>
                {/*<DetailPerson id={this.state.selectedPerson}/>*/}
                <DetailPerson id={11}/>
            </ErrorBoundary>
        );
        
        return (
            <Row left={itemList} right={personDetail}/>
        )
    }
}
