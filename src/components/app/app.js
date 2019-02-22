import React, {Component} from 'react';

import SwapiService from '../../services/swapi-service';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorIndicator from "../error-indicator";
import { SwapiServiceProvider } from "../swapi-service-context";

import './app.css';

import ErrorBoundary from "../error-boundary/error-boundary";
import PeoplePage from "../pages/people-page";

export default class App extends Component {
    
    state = {
        swapiService: new SwapiService()
    };
    
    render() {
        
        const { swapiService } = this.state;
        
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={swapiService}>
                    <div className="stardb-app">
                        <Header/>
                        <RandomPlanet/>
                        <PeoplePage/>
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}
