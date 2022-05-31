import React from 'react';
import './Header.css'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='header-container'>
           <div>
               <h2>Best Free Books</h2>
           </div>
           <div>
               <nav className='nav-items-container'>
                <CustomLink to='/home'>HOME</CustomLink>
                <CustomLink to="/reviews">REVIEWS</CustomLink>
                <CustomLink to="/dashboard">DASHBOARD</CustomLink>
                <CustomLink to="/blogs">BLOGS</CustomLink>
                <CustomLink to="/about">ABOUT</CustomLink>
               </nav>
           </div>
        </div>
    );
};

export default Header;