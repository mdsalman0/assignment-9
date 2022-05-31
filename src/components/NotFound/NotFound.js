import React from 'react';

const NotFound = () => {
    return (
        <div style={{display:'flex',alignItems:'center',padding:'10px 40px'}}>
            <div>
            <p> Error 404 </p>
            <h2>Oops! The page you're looking for isn't here.</h2>
            <p> You might have the wrong address, or the page may hav moved.</p>
            </div>
            <div>
            <img width={500} src='https://thumbs.dreamstime.com/b/%C3%B0%C2%BF%C3%B0%C2%B5%C3%B1%E2%80%A1%C3%B0%C2%B0%C3%B1%E2%80%9A%C3%B1%C5%93-134036857.jpg'
              alt=''></img>
            </div>  
        </div>
    );
};

export default NotFound;