import React from 'react';

import {Card} from '../styledComps'

const Prisoner = (props) => {
    return (
        <Card bgColor = 'blue'>
        <h3>{props.prisoners.name}</h3>
        </Card>
    )
}

export default Prisoner