import { useState } from 'react';
import styled from 'styled-components';

const Section = styled.section`
  h1 {
    text-align: left;
  }
  ul {
    list-style-type: none;
  }
  form {
    text-align: center;
    margin: 2% auto;
    width: 60%;
    border-radius: 5px;
    border: 2px solid ${(props) => props.theme.textColor};
    box-shadow: 0 0 5px gray;
  }
  span {
    display: block;
  }
  input {
    width: 60%;
    font-size: 1.6rem;
    padding: 1rem;
    margin: 1rem;
    border-radius: 2px;
    font-family: 'Quicksand';
    &:focus {
      box-shadow: 0 0 20px ${(props) => props.theme.themeToggleButton};
    }
  }
  textarea {
    width: 60%;
    height: 200px;
    font-size: 1.6rem;
    padding: 1rem;
    margin: 1rem;
    border-radius: 2px;
    font-family: 'Quicksand';
    &:focus {
      box-shadow: 0 0 20px ${(props) => props.theme.themeToggleButton};
    }
  }
  button {
    display: block;
    width: 20%;
    font-size: 1.6rem;
    padding: 1rem;
    margin: 1rem auto;
    border-radius: 5px;
    color: ${(props) => props.theme.themeToggleButton};
    background: ${(props) => props.theme.buttonBackground};
    border: 2px solid ${(props) => props.theme.buttonBorder};
    &:hover {
      cursor: pointer;
      color: ${(props) => props.theme.textColor};
      background: ${(props) => props.theme.themeToggleButton};
      border: 2px solid ${(props) => props.theme.textColor};
    }
  }
`;

export default function Contact() {
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
        <h1>Contact</h1>
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
}
