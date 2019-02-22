import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { StarshipList as List } from '../sw-components';

const StarshipsPage = ({history}) =>{
    
        return(
            <List onItemSelect={(id) => {
                history.push(`/starships/${id}`)
            }}/>
        )
};

export default withRouter(StarshipsPage);