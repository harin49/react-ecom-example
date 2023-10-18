import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Catalog from "./components/catalog";
import BookDetails from "./components/details";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import { CartPreview } from "./components/cart";
import { BookCartContext } from "./contexts/context";
import { getBooks } from "./clients/books.api";
import {Home} from "./components/Home/Home";

function App() {
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const data = await getBooks();
      setBooks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const addBookToCart = (book) => {
    setCart([...cart, book]);
  };

  const showCart = () => {
    setIsCartVisible(true);
  };

  const hideCart = () => {
    setIsCartVisible(false)
  };

  return (
    <Router>
      <div className="App">
          <CartPreview isVisible={isCartVisible} onCartCloseClick={hideCart} items={cart} />
          <Header onCartClick={showCart} />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/books" element={<Catalog items={books} />} />
            <Route path="/books/:isbn" element={<BookDetails onAddToCart={addBookToCart} />} />
          </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
