import React from 'react';
import SwapiService from "../../services/swapi-service";
import ItemDetails, { ItemProp } from "../item-details/item-details";
import { withDataDetail } from "../hoc";
import { withSwapiService } from "../hoc";
import { SwapiServiceConsumer } from '../swapi-service-context';

const swapiService = new SwapiService();

const {
    
    getPerson,
    getStarship, 
    getPlanet
} = swapiService;



//
// const DetailPerson = withDataDetail(
//     (<ItemDetails>
//         <ItemProp field="birthYear" label="Birth Year"/>
//         <ItemProp field="gender" label="Gender"/>
//         <ItemProp field="skinColor" label="Skin Color"/>
//     </ItemDetails>), 
//     getPerson);
//
// const DetailPlanet = withDataDetail(ItemDetails, getPlanet);
//
// const DetailStarship = withDataDetail(ItemDetails, getStarship);


const DetailPerson = ({id, swapiService}) => {
    const {getPerson} = swapiService;
    return (
        <ItemDetails
            id={id}
            getData={getPerson}
        >
            <ItemProp field="birthYear" label="Birth Year"/>
            <ItemProp field="gender" label="Gender"/>
            <ItemProp field="skinColor" label="Skin Color"/>
        </ItemDetails>
    )
};

const DetailPlanet = ({id}) => {
    return(

        <SwapiServiceConsumer>
            {
                ({getPlanet}) => {
                    return (
                        <ItemDetails
                            id={id}
                            getData={getPlanet}
                        >
                            <ItemProp field="population" label="Population"/>
                            <ItemProp field="rotationPeriod" label="Rotation Period"/>
                            <ItemProp field="diameter" label="diameter"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};

const DetailStarship = ({id}) => {
    return(
        <SwapiServiceConsumer>
            {
                ({getStarship}) => {
                    return (
                        <ItemDetails
                            id={id}
                            getData={getStarship}
                        >
                            <ItemProp field="class" label="Class"/>
                            <ItemProp field="maxSpeed" label="Max Speed"/>
                            <ItemProp field="cost" label="Cost"/>
                            <ItemProp field="length" label="Length"/>
                            <ItemProp field="manufacturer" label="Manufacturer"/>
                        </ItemDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
};

export {
    DetailPerson,
    DetailPlanet,
    DetailStarship
}