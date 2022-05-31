import React from 'react';
import './Header.css'
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='header-container'>
           <div>
               <h2>The Best Book</h2>
           </div>
           <div className='nav-items-container'>
               <nav className=''>
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