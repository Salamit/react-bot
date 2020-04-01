import React from 'react';
import {withCurrentUser, registerComponent, Components} from 'meteor/vulcan:core';
import { Link } from 'react-router-dom';



const Header = ({currentUser}) => {
    return (
        <nav>
            <div className="nav-wrapper">
                <Link to={'/'} className='brand-logo'>IT courses</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to={'/shop'}>Shop</Link></li>
                    <li><Link to={'/about'}>About us</Link></li>
                </ul>

            </div>

        </nav>
    )


}
    
     

registerComponent({name: 'Header', component: Header, hocs: [withCurrentUser]});