import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import './Library.css'

const Library = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    return (
        <div className="library-container">
            <div className="books-container">
                {
                    books.map(book => <Book 
                        key={book.id}
                        book={book}
                        ></Book>)
                }
            </div>
            <div className="cart-container">
                <h3>Order summary</h3>
            </div>
        </div>
    );
};

export default Library;