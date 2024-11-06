// src/components/pages/AddBookPage.jsx
import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BookForm from '../molecules/BookForm';

const AddBookPage = () => {
  const navigate = useNavigate();

  const handleAddBook = (book) => {
    const savedBooks = JSON.parse(localStorage.getItem('books')) || [];
    const updatedBooks = [...savedBooks, book];

    // Save updated books list to localStorage
    localStorage.setItem('books', JSON.stringify(updatedBooks));

    // Redirect back to the books list
    navigate('/books');
  };

  return (
    <Container>
      <h1>Add New Book</h1>
      <BookForm onSubmit={handleAddBook} />
    </Container>
  );
};

export default AddBookPage;
