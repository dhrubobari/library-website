import React from 'react';
import './Book.css';

const Book = (props) => {
    const {name, author, price, img} = props.book;
    return (
        <div className="book">
            <img src={img} alt="" />
            <div className="book-info">
            <p className="name-of-book">{name}</p>
            <p>Author: {author}</p>
            <p><small>Price only: ${price}</small></p>
            </div>
        </div>
    );
};

export default Book;