import React from 'react';

import Prisoner from './Prisoner';

const PrisonerList = (props) => {
    return (
        <div className="prisoner-wrapper">
        {console.log(props)}
            {props.prisoners.map(prisoner => (
                <div >
                    <Prisoner prisoners={prisoner} key={prisoner.id_number}/>
                </div>
            ))}
        </div>
    )
}

export default PrisonerList;