import React from 'react';
import ItemDetails, { ItemProp } from "../item-details";
import { withSwapiService } from "../hoc";


const DetailStarship = (props) => {
    return (
        <ItemDetails {...props}>
            <ItemProp field="class" label="Class"/>
            <ItemProp field="maxSpeed" label="Max Speed"/>
            <ItemProp field="cost" label="Cost"/>
            <ItemProp field="length" label="Length"/>
            <ItemProp field="manufacturer" label="Manufacturer"/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getStarship
    }
};

export default withSwapiService(mapMethodsToProps)(DetailStarship);