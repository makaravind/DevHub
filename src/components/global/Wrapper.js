import React from 'react';
import NavBar from '../home/NavBar';

function Wrapper({children}) {
    return(
        <div>
            <NavBar/>
            {children}
        </div>
    )
}

export default Wrapper