import React, {Component} from 'react';

import SwapiService from '../../services/swapi-service';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PersonPage from "../person-page";
import ErrorIndicator from "../error-indicator";
import { SwapiServiceProvider } from "../swapi-service-context";


import ItemList from "../item-list";

import './app.css';
import ItemDetails, { ItemProp } from "../item-details/item-details";

import Row from "../row";
import {DetailStarship} from "../sw-components/details";

export default class App extends Component {
    
    swapiService = new SwapiService();
    
    state = {
        showRandomPlanet: false,
        hasError: false
    };
    
    componentDidCatch(){
        this.setState({
            hasError: true
        });
    };
    
    
    render() {
        if(this.state.hasError)
            return <ErrorIndicator/>;
            
        const randomPlanet = this.state.showRandomPlanet ? <RandomPlanet/> : null;
        
        return (
            <SwapiServiceProvider value={this.swapiService}>
                <div className="stardb-app">
                    <Header/>
                    {randomPlanet}
                    <PersonPage/>
    
                    <DetailStarship id={10}/>
                    {/*<Row left={detailPerson} right={detailStarship}/>*/}
                </div>
            </SwapiServiceProvider>
        );
    }
}
