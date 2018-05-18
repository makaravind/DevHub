import React, { Component } from 'react';

function Me ({passedDataToChildMeComp}) {

    return (
        <div>
        <h1>{passedDataToChildMeComp.firstName}</h1>
        {<small>{passedDataToChildMeComp.lastName}</small>}
        <div>
        	{passedDataToChildMeComp.details.map(function(item) {
        		return <li className="list_items"> {item.provider && item.provider } {item.username && item.username} {item.engagement && item.engagement } {item.link && item.link} {item.url && item.url } {item.blog && item.blog} {item.channel && item.channel}</li>
        	})}
        </div>
        </div>
    )
}

export default Me;

/* Paul Note - In the above, I am inside the child component, and will be using the passed-in data that this Me component received from App component by the part - <Me passedDataToChildMeComp={data} />

So in Me component, I will access this data with the variable 'passedDataToChildMeComp' which is also called state

 */