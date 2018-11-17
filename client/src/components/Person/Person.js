import React from 'react';
// import moment from 'moment';
import { ListItem } from '../List'

//Adds dates to page using moment.js (it's BACK!)


export const Person = props => (
  <div className="list-group">

        <h5 className="mb-1">{props.fullName}</h5>

    <ListItem  className="list-group-item">

        <h5 className="mb-1">{props.review}</h5>

      <div className="btn-group" role="group" aria-label="Person example">
        {/* <a rel="noopener noreferrer"href={props.url} target='_blank'><button type="button" className="btn btn-info">Read</button></a> */}
        <button type="button" className="btn btn-primary" onClick={props.onClick}>{props.type}</button>
      </div>
    </ListItem>
  </div>
)
