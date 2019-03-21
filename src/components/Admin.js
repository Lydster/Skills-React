import React from 'react';

import PrisonList from './PrisonList';
import PrisonForm from './PrisonForm';


const Admin = (props) => {
    return (
        <>
        <PrisonForm />
        <PrisonList {...props} prisons={props.prisons}/>
        </>
    )
}

export default Admin;