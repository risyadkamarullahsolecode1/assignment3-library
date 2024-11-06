// src/components/pages/MemberDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const MemberDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);

  useEffect(() => {
    const savedMembers = JSON.parse(localStorage.getItem('members')) || [];
    const existingMember = savedMembers.find((member) => member.id === id);

    if (existingMember) {
      setMember(existingMember);
    } else {
      navigate('/members'); // Redirect to members list if member not found
    }
  }, [id, navigate]);

  return (
    <div>
      {member ? (
        <Card>
          <Card.Header as="h5">Member Details</Card.Header>
          <Card.Body>
            <Card.Title>{member.name}</Card.Title>
            <Card.Text>
              <strong>Email:</strong> {member.email}
            </Card.Text>
            <Card.Text>
              <strong>Phone:</strong> {member.phone}
            </Card.Text>
            <Card.Text>
              <strong>Gender:</strong> {member.gender}
            </Card.Text>
            <Card.Text>
              <strong>Address:</strong> {member.address}
            </Card.Text>
            <Button variant="primary" onClick={() => navigate('/members')}>
              Back to Members List
            </Button>
          </Card.Body>
        </Card>
      ) : (
        <p>Loading member details...</p>
      )}
    </div>
  );
};

export default MemberDetailPage;
