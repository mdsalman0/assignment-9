import React from 'react';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
            <div className='not-page'>
            <h5 style={{color:'lightcyan'}}> Error 404 </h5><hr />
            <h2>Oops! The page you're looking for isn't here.</h2>
            <p>You might have the wrong address,</p>
            <p>or the page may hav moved.</p>
            </div>
            <div>
            <img width={500} src='https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg'
              alt=''></img>
            </div>  
        </div>
    );
};

export default NotFound;