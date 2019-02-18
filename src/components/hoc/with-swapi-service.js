import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context' 

const withSwapiService = (Wrapped, mapMethodsToProps) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {(swapiService) => {
                    const swapiProps = mapMethodsToProps(swapiService);
                    return (
                        <Wrapped {...props} {...swapiProps}/>
                    )
                }}
            </SwapiServiceConsumer>
        )
    }
};

export default withSwapiService;