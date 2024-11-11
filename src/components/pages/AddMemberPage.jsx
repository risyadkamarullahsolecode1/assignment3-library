// src/components/pages/AddMemberPage.jsx
import React, { useEffect } from 'react';
import MemberForm from '../molecules/MemberForm';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Container } from 'react-bootstrap';

const AddMemberPage = () => {
  const navigate = useNavigate();

  const handleAddMember = (member) => {
    const newMember = {
      id: uuidv4(), // Auto-generate a unique ID for the member
      ...member,
    };

    const savedMembers = JSON.parse(localStorage.getItem('members')) || [];
    const updatedMembers = [...savedMembers, newMember];

    localStorage.setItem('members', JSON.stringify(updatedMembers));
    navigate('/members'); // Redirect back to the members list after adding
  };

  return (
    <Container>
      <h1>Add New Member</h1>
      <MemberForm onSubmit={handleAddMember} />
    </Container>
  );
};

export default AddMemberPage;
