import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h3>1.what is context api</h3>
            <p>The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.</p>
            <h3>2.what is semantic tag</h3>
            <p>The HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages. This article will focus on ‘What is Semantics in HTML’.</p>
            <h3>3.difference between inline and inline-block</h3>
            <p>Compared to display: inline , the major difference is that display: inline-block allows to set a width and height on the element. Also, with display: inline-block , the top and bottom margins/paddings are respected, but with display: inline they are not.</p>
        </div>
    );
};

export default Blogs;