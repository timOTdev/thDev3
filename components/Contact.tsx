import { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  h2 {
    text-align: left;
  }
  ul {
    list-style-type: none;
  }
  form {
    text-align: center;
    margin: 2rem auto;
    border-radius: 5px;
    border: 2px solid ${({ theme }) => theme.underlineColor};
    box-shadow: 0 0 5px gray;
    @media (min-width: 768px) {
      width: 60%;
    }
    @media (min-width: 1440px) {
      width: 50%;
    }
    @media (min-width: 1440px) {
      width: 40%;
    }
  }
  span {
    display: block;
  }
  input {
    border-radius: 2px;
    font-family: 'Quicksand';
    &:focus {
      outline: none;
      box-shadow: 0 0 20px ${({ theme }) => theme.underlineColor};
    }
    @media (min-width: 320px) {
      width: 90%;
      margin: 0.5rem 0;
      padding: 0.3rem;
    }
  }
  textarea {
    height: 200px;
    border-radius: 2px;
    font-family: 'Quicksand';
    &:focus {
      outline: none;
      box-shadow: 0 0 20px ${({ theme }) => theme.underlineColor};
    }
    @media (min-width: 320px) {
      width: 90%;
      margin: 0.5rem 0;
      padding: 0.3rem;
    }
  }
  button {
    display: block;
    margin: 1rem auto;
    border-radius: 5px;
    color: ${({ theme }) => theme.buttonBackground};
    background: ${({ theme }) => theme.underlineColor};
    border: 2px solid ${({ theme }) => theme.buttonBackground};
    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.underlineColor};
      background: ${({ theme }) => theme.buttonBackground};
      border: 2px solid ${({ theme }) => theme.buttonBorder};
    }
  }
`;

export default () => {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = () => (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });
    fetch('https://getform.io/f/3a4acd80-932b-47a1-b368-0216d35fb9ab', {
      method: 'POST',
      body: formData,
    })
      .then(() => setQuery({ name: '', email: '', message: '' }))
      .then(() => setFormStatus(true));
  };

  if (formStatus) {
    return (
      <Section>
        <h1>Contact</h1>
        <hr />
        <h3>Thanks for your message!</h3>
      </Section>
    );
  } else {
    return (
      <Section>
        <h2>Contact</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name' />
            <input
              type='text'
              name='name'
              required
              placeholder='Name'
              className='form-control'
              value={query.name}
              onChange={handleChange()}
            />
          </div>
          <div>
            <label htmlFor='email' />
            <input
              type='email'
              name='email'
              required
              placeholder='Email'
              className='form-control'
              value={query.email}
              onChange={handleChange()}
            />
          </div>
          <div>
            <label htmlFor='message' />
            <textarea
              name='message'
              required
              placeholder='Message'
              className='form-control'
              value={query.message}
              onChange={handleChange()}
            />
          </div>
          <button type='submit'>Send</button>
        </form>
      </Section>
    );
  }
};
