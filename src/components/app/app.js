import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import SwapiService from '../../services/swapi-service';

import Header from '../header';
import RandomPlanet from '../random-planet';
import { SwapiServiceProvider } from "../swapi-service-context";

import './app.css';

import ErrorBoundary from "../error-boundary";
import { PeoplePage, StarshipsPage, PlanetsPage } from "../pages";
import {DetailStarship} from "../sw-components";

export default class App extends Component {
    
    state = {
        swapiService: new SwapiService()
    };
    
    render() {
        
        const { swapiService } = this.state;
        
        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={swapiService}>
                    <Router>
                        <div className="stardb-app">
                            <Header/>
                            <RandomPlanet/>
                            <Switch>
                                <Route path='/' exact render={() => <h2>Welcom to Star Wars World</h2>}/>
                                <Route path='/people' component={PeoplePage}/>
                                <Route path='/planets/:id?' component={PlanetsPage}/>
                                <Route path='/starships' exact component={StarshipsPage}/>
                                <Route path='/starships/:id' 
                                       render={({match}) => {
                                           console.log(match);
                                           const {id} = match.params;
                                           return(<DetailStarship id={id}/>)
                                       }}
                                />
                                
                                <Route render={() => <h2>Page not found</h2>}/>
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        );
    }
}
