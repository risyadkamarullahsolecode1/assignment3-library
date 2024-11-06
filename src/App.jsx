import React, { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import BooksPage from './components/pages/BooksPage';
import AddBookPages from './components/pages/AddBookPages';
import BookDetailPage from './components/pages/BookDetailPage';
import Header from './components/organisms/Header';
import MembersPage from './components/pages/MembersPage';
import AddMemberPage from './components/pages/AddMemberPage';
import MemberDetailPage from './components/pages/MemberDetailPage';

const App = () => {
  const [books, setBooks] = useState([
    // Initial book data for testing
    { isbn: '9781234567897', title: 'Sample Book 1', author: 'Author 1', year: 2021, category: 'Fiction', available: true },
    { isbn: '9781234567898', title: 'Sample Book 2', author: 'Author 2', year: 2022, category: 'Non-Fiction', available: false },
    // Add more books as needed
  ]);

  const [members, setMembers] = useState([
    // Sample member data for testing
    { id: '1', name: 'John Doe', email: 'john@example.com', gender: 'Male', phone: '+62123456789', address: '123 Main St' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', gender: 'Female', phone: '+62198765432', address: '456 Side St' },
  ]);

  useEffect(() => {
    const books = JSON.parse(localStorage.getItem('books'));
    if (books) {
     setBooks(books);
    }
  }, []);

  useEffect(() => {
    const members = JSON.parse(localStorage.getItem('members'));
    if (members) {
     setMembers(members);
    }
  }, []);


  const handleAddBook = (book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  const handleUpdateBook = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.isbn === updatedBook.isbn ? updatedBook : book))
    );
  };

  const handleAddMember = (member) => {
    setMembers((prevMembers) => [...prevMembers, member]);
  };

  const handleUpdateMember = (updatedMember) => {
    setMembers((prevMembers) =>
      prevMembers.map((member) => (member.id === updatedMember.id ? updatedMember : member))
    );
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage books={books} />} />
        <Route path="/books/add" element={<AddBookPages onAddBook={handleAddBook} />} />
        <Route path="/books/:id" element={<BookDetailPage books={books} />} />
        <Route path="/members" element={<MembersPage members={members} />} />
        <Route path="/members/add" element={<AddMemberPage onAddMember={handleAddMember} />} />
        <Route path="/members/:id" element={<MemberDetailPage members={members} />} />
      </Routes>
    </Router>
  );
};


export default App
