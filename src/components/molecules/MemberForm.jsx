// src/components/molecules/MemberForm.jsx
import React, { useState, useEffect } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import CustomButton from '../atoms/Button';
import { toast } from 'react-toastify';

const MemberForm = ({ onSubmit, initialData = {} }) => {
  const [name, setName] = useState(initialData.name || '');
  const [email, setEmail] = useState(initialData.email || '');
  const [gender, setGender] = useState(initialData.gender || '');
  const [phone, setPhone] = useState(initialData.phone || '');
  const [address, setAddress] = useState(initialData.address || '');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) newErrors.name = 'Full Name is required';
    if (!email || !emailRegex.test(email)) newErrors.email = 'Invalid email format';
    if (!address || address.length > 200) newErrors.address = 'Address is required and must be under 200 characters';
    if (!gender) newErrors.gender = 'Gender is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit({ name, email, gender, phone, address });
      toast.success('Member saved successfully!');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          isInvalid={!!errors.name}
        />
        <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          isInvalid={!!errors.email}
        />
        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="gender">
        <Form.Label>Gender</Form.Label>
        <Row>
          <Col>
            <Form.Check
              type="radio"
              label="Male"
              name="gender"
              value="Male"
              checked={gender === 'Male'}
              onChange={(e) => setGender(e.target.value)}
              isInvalid={!!errors.gender}
            />
          </Col>
          <Col>
            <Form.Check
              type="radio"
              label="Female"
              name="gender"
              value="Female"
              checked={gender === 'Female'}
              onChange={(e) => setGender(e.target.value)}
              isInvalid={!!errors.gender}
            />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group controlId="phone">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          isInvalid={!!errors.phone}
        />
        <Form.Control.Feedback type="invalid">{errors.phone}</Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          isInvalid={!!errors.address}
          maxLength={200}
        />
        <Form.Control.Feedback type="invalid">{errors.address}</Form.Control.Feedback>
      </Form.Group>

      <CustomButton type="submit" variant="primary">
        Save Member
      </CustomButton>
    </Form>
  );
};

export default MemberForm;
