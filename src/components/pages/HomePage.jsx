import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';

const HomePage = () => {
  const [bookCount, setBookCount] = useState(0);
  const [memberCount, setMemberCount] = useState(0);

  useEffect(() => {
    // Retrieve and count books from local storage
    const books = JSON.parse(localStorage.getItem('books')) || [];
    setBookCount(books.length);

    // Retrieve and count members from local storage
    const members = JSON.parse(localStorage.getItem('members')) || [];
    setMemberCount(members.length);
  }, []);

  return (
    <Container>
    <h1>Library Management System</h1>
    <p>Statistics and details about the library will be shown here.</p>

    {/* Display book and member statistics */}
    <div>
      <h2>Library Statistics</h2>
      <p>Total Books: {bookCount}</p>
      <p>Total Members: {memberCount}</p>
    </div>
  </Container>
  )
};

export default HomePage;
