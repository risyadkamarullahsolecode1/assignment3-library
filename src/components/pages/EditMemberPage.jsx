// src/components/pages/EditMemberPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MemberForm from '../molecules/MemberForm';

const EditMemberPage = ({ members, onUpdateMember }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [member, setMember] = useState(null);

  useEffect(() => {
    const memberToEdit = members.find((m) => m.id === id);
    if (memberToEdit) {
      setMember(memberToEdit);
    }
  }, [id, members]);

  const handleUpdateMember = (updatedMember) => {
    onUpdateMember(updatedMember);
    navigate('/members');
  };

  return (
    <div>
      <h1>Edit Member</h1>
      {member ? (
        <MemberForm initialValues={member} onSubmit={handleUpdateMember} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EditMemberPage;
