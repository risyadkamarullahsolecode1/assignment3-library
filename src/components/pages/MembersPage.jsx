// src/components/pages/BooksPage.jsx
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MemberList from '../organisms/MemberList';

const BooksPage = ({ members }) => {
  return (
    <Container>
      <h1>Members</h1>
      <Link to="/members/add">
        <Button variant="primary" className="mb-3">Add New Member</Button>
      </Link>
      <MemberList members={members} />
    </Container>
  );
};

export default BooksPage;
