// src/components/pages/MembersPage.jsx
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomButton from '../atoms/Button';

const MembersPage = () => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const savedMembers = JSON.parse(localStorage.getItem('members')) || [];
    setMembers(savedMembers);
  }, []);

  const handleDelete = (id) => {
    const updatedMembers = members.filter((member) => member.id !== id);
    setMembers(updatedMembers);
    localStorage.setItem('members', JSON.stringify(updatedMembers));
  };

  return (
    <div>
      <h1>Members</h1>
      <Table responsive striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Member ID</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => (
            <tr key={member.id}>
              <td>{member.id}</td>
              <td>{member.name}</td>
              <td>{member.email}</td>
              <td>{member.phone}</td>
              <td>
                <Link to={`/members/${member.id}`}>
                  <CustomButton variant="info" size="sm">View</CustomButton>
                </Link>
                <Link to={`/members/edit/${member.id}`} className="ms-2">
                  <CustomButton variant="warning" size="sm">Edit</CustomButton>
                </Link>
                <CustomButton variant="danger" size="sm" onClick={() => handleDelete(member.id)}>
                  Delete
                </CustomButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MembersPage;
