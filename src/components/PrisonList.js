import React from 'react';
import Prison from './Prison'

const PrisonList = (props) => {

    // function routeToPrison(e, prison) {
    //     e.preventDefault();
    //     props.history.push(`/prison-list/${prison.id}`);
    //   }
    return (
        <div className="prisonlist-wrapper">
            {props.prisons.map(prison => (
                <div >
                    <Prison prisons={prison} key={prison.id}/>
                </div>
            ))}
        </div>
    )
}

export default PrisonList

 // onClick={e => routeToPrison(e, prison)}
                    // className="prison-card"
                    // key={prison.id}