// src/components/pages/EditBookPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import BookForm from '../molecules/BookForm';

const EditBookPage = ({ books, onUpdateBook }) => {
  const { isbn } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const bookToEdit = books.find((b) => b.isbn === isbn);
    if (bookToEdit) {
      setBook(bookToEdit);
    }
  }, [isbn, books]);

  const handleUpdateBook = (updatedBook) => {
    onUpdateBook(updatedBook);
    navigate('/books');
  };

  return (
    <Container>
      <h1>Edit Book</h1>
      {book ? (
        <BookForm initialValues={book} onSubmit={handleUpdateBook} />
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default EditBookPage;
