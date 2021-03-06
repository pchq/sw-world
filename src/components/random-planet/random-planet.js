import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './random-planet.css';

export default class RandomPlanet extends Component {

    swapiService = new SwapiService();

    static defaultProps = {
        updateInterval: 10000
    };

    static propTypes = {
        updateInterval: PropTypes.number
    };

    state = {
        planet: {},
        loading: true,
        error: false
    };
    
    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        })
    };
    
    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        })
    };
    
    updatePlanet = () =>{
        const id = Math.floor(Math.random()*30);

        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    };
    
   
    componentDidMount(){
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet, this.props.updateInterval);
    }
    
    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render() {
        const { planet, loading, error } = this.state;

        const hasContent = !error && !loading;
        
        const errorBlock = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = hasContent ? <PlanetView planet={planet}/> : null;
        
        return (
            <div className="random-planet jumbotron rounded">
                {spinner}
                {content}
                {errorBlock}
            </div>
        )
    }
}

const PlanetView = ({planet}) => {
    const {id, name, population, rotationPeriod, diameter} = planet;
    return(
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                 alt="planet"/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
};
