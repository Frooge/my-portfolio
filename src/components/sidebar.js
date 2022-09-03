import React from 'react';
import './sidebar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCode, faBook, faContactCard, faBirthdayCake } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="logo w-100 mb-5 mt-4">
          J
        </div>
        <ul className="nav flex-column mb-auto text-center">
          <li class="nav-item active">
            <FontAwesomeIcon icon={faHouse}/>
          </li>
          <li class="nav-item">
            <FontAwesomeIcon icon={faCode} />
          </li>
          <li class="nav-item">
            <FontAwesomeIcon icon={faBook} />
          </li>
          <li class="nav-item">
            <FontAwesomeIcon icon={faContactCard} />
          </li>
        </ul> 
    </div>
  )
}
