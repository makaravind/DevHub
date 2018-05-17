import React, {Component} from 'react';
import './App.css';

function Me({data}) {

  return (<ul>
    {data.details.map(function(x){
      return <li className="list_items"> {x.provider && x.provider}
      {x.username && x.username} {x.engagement && x.engagement} {x.channel && x.channel} {x.url && x.url}  {x.link && x.link} {x.type && x.type}</li>
    })}
    </ul>
    )
}


export default Me;
