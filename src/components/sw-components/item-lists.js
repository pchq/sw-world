import React from 'react';
import { withData, withSwapiService, withChildFunction, compose } from "../hoc";
import ItemList from "../item-list";


const renderName = ({name}) => (<span>{name}</span>);
const renderNamePerson = ({name,gender,birthYear}) => (<span>{name}<small> ({gender}, {birthYear})</small></span>);


const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPersons
    };
};
const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};
const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};


const PersonList = compose(
    withSwapiService(mapPersonMethodsToProps),
    withData,
    withChildFunction(renderNamePerson)
)(ItemList);

const PlanetList = compose(
    withSwapiService(mapPlanetMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
    withSwapiService(mapStarshipMethodsToProps),
    withData,
    withChildFunction(renderName)
)(ItemList);


export {
    PersonList,
    PlanetList,
    StarshipList,
}