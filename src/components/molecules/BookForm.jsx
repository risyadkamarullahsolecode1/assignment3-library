import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import InputField from '../atoms/InputField';
import CustomButton from '../atoms/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';

const BookForm = ({ books, onSubmit }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const bookToEdit = id ? books.find((book) => book.isbn === id) : null;

  const [isbn, setIsbn] = useState(bookToEdit ? bookToEdit.isbn : '');
  const [title, setTitle] = useState(bookToEdit ? bookToEdit.title : '');
  const [author, setAuthor] = useState(bookToEdit ? bookToEdit.author : '');
  const [year, setYear] = useState(bookToEdit ? bookToEdit.year : '');
  const [category, setCategory] = useState(bookToEdit ? bookToEdit.category : '');
  const [availability, setAvailability] = useState(bookToEdit ? bookToEdit.available : false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title || title.length < 3) newErrors.title = "Title must be at least 3 characters.";
    if (!author) newErrors.author = "Author is required.";
    if (!year || year > new Date().getFullYear()) newErrors.year = "Invalid publication year.";
    if (!category) newErrors.category = "Category is required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      onSubmit({
        isbn,
        title,
        author,
        year,
        category,
        available: availability,
      });
      toast.success("Book saved successfully!");
      navigate('/books');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputField label="ISBN" type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} error={errors.isbn} />
      <InputField label="Title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} error={errors.title} />
      <InputField label="Author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} error={errors.author} />
      <InputField label="Publication Year" type="number" value={year} onChange={(e) => setYear(e.target.value)} error={errors.year} />
      <Form.Group controlId="category">
        <Form.Label>Category</Form.Label>
        <Form.Select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select...</option>
          <option value="Fiction">Fiction</option>
          <option value="Non-Fiction">Non-Fiction</option>
          <option value="Science">Science</option>
          <option value="History">History</option>
        </Form.Select>
        {errors.category && <div className="text-danger">{errors.category}</div>}
      </Form.Group>
      <Form.Check 
        type="checkbox" 
        label="Available" 
        checked={availability} 
        onChange={(e) => setAvailability(e.target.checked)} 
      />
      <CustomButton type="submit">{bookToEdit ? 'Update Book' : 'Add Book'}</CustomButton>
      <ToastContainer />
    </Form>
  );
};

export default BookForm;
