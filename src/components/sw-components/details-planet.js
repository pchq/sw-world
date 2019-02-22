import React from 'react';
import ItemDetails, { ItemProp } from "../item-details";
import { withSwapiService } from "../hoc";


const DetailPlanet = (props) => {
    return (
        <ItemDetails {...props}>
            <ItemProp field="population" label="Population"/>
            <ItemProp field="rotationPeriod" label="Rotation Period"/>
            <ItemProp field="diameter" label="diameter"/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet
    }
};

export default withSwapiService(mapMethodsToProps)(DetailPlanet);