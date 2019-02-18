import React from 'react';
import SwapiService from "../../services/swapi-service";
import { withData } from "../hoc";
import ItemList from "../item-list";


const swapiService = new SwapiService();

const {
    getAllPersons,
    getAllStarships,
    getAllPlanets
} = swapiService;

const withChildFunction = (Wrapper, fn) => {
    return (props) => {
        return (
            <Wrapper {...props}>
                {fn}
            </Wrapper>
        )
    }
};

const PersonList = withData(withChildFunction(
    ItemList,
    ({name,gender,birthYear}) => (<span>{name}<small> ({gender}, {birthYear})</small></span>)
), getAllPersons);

const PlanetList = withData(withChildFunction(
    ItemList,
    ({name}) => (<span>{name}</span>)
), getAllPlanets);

const StarshipList = withData(withChildFunction(
    ItemList,
    ({name}) => (<span>{name}</span>)
), getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList,
}