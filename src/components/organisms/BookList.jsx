import React from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>ISBN</th>
          <th>Title</th>
          <th>Author</th>
          <th>Publication Year</th>
          <th>Category</th>
          <th>Availability</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <tr key={book.isbn}>
            <td>{book.isbn}</td>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.year}</td>
            <td>{book.category}</td>
            <td>{book.available ? 'Yes' : 'No'}</td>
            <td>
              <Link to={`/books/${book.isbn}`}>
                <Button variant="info" size="sm">View</Button>
              </Link>
              <Link to={`/books/edit/${book.isbn}`} className="ms-2">
                <Button variant="warning" size="sm">Edit</Button>
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default BookList;
