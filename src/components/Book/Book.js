import React from 'react';
import './Book.css';

const Book = (props) => {
    const {name, author, price, img} = props.book;
    return (
        <div className="book">
            <img src={img} alt="" />
        </div>
    );
};

export default Book;