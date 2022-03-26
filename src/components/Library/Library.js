import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import Cart from '../Cart/Cart';
import './Library.css'

const Library = () => {
    const [books, setBooks] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])

    const addToSelectedBooks = (book) => {
        console.log(book)
        const newCart = [...cart, book];
        setCart(newCart);
    }

    return (
        <div className="library-container">
            <div className="books-container">
                {
                    books.map(book => <Book 
                        key={book.id}
                        book={book}
                        addToSelectedBooks={addToSelectedBooks}
                        ></Book>)
                }
            </div>
            <div className="cart-container">
                <h2>Selected Books</h2>
                <Cart cart={cart}></Cart>
                <button className="button-cart1">Choose 1 For Me</button>
                <br />
                <button className="button-cart2">CHOOSE AGAIN</button>
            </div>
        </div>
    );
};

export default Library;