// src/components/pages/BookDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const BookDetailPage = ({ books }) => {
  const { id } = useParams();
  const book = books.find((book) => book.isbn === id);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <Card>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{book.author}</Card.Subtitle>
        <Card.Text>
          <strong>ISBN:</strong> {book.isbn}<br />
          <strong>Publication Year:</strong> {book.year}<br />
          <strong>Category:</strong> {book.category}<br />
          <strong>Availability:</strong> {book.available ? 'Available' : 'Not Available'}
        </Card.Text>
        <Link to={`/books/edit/${book.isbn}`}>
          <Button variant="warning">Edit</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default BookDetailPage;
