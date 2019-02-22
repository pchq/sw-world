import React from 'react';
import ItemDetails, { ItemProp } from "../item-details/item-details";
import { withSwapiService } from "../hoc";


const DetailPerson = (props) => {
    return (
        <ItemDetails {...props}>
            <ItemProp field="birthYear" label="Birth Year"/>
            <ItemProp field="gender" label="Gender"/>
            <ItemProp field="skinColor" label="Skin Color"/>
        </ItemDetails>
    )
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson
    }
};

export default withSwapiService(mapMethodsToProps)(DetailPerson);