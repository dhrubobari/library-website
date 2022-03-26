import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
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
            <button onClick={() => props.addToSelectedBooks(props.book)} className="button-cart">
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Book;