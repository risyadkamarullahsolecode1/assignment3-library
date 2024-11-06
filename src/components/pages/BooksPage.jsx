// src/components/pages/BooksPage.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BookList from '../organisms/BookList';

const BooksPage = ({ books }) => {
  return (
    <Container>
      <h1>Books</h1>
      <Link to="/books/add">
        <Button variant="primary" className="mb-3">Add New Book</Button>
      </Link>
      <BookList books={books} />
    </Container>
  );
};

export default BooksPage;
