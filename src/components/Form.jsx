import React, { useState } from 'react';
import { db } from '../firebase_config';
import { collection, addDoc } from '@firebase/firestore';

export const Form = ({ setFaqData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [question, setQuestion] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();

    if (!name || !email || !question) {
      alert('Please fill all the fields');
      return;
    }
    await addDoc(collection(db, 'faq'), {
      name: name,
      email: email,
      question: question,
    })
      .then(() => {
        alert('added succesfully');
        setFaqData((prev) => [
          ...prev,
          {
            name: name,
            email: email,
            question: question,
          },
        ]);
        setName('');
        setEmail('');
        setQuestion('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="formContainer">
      <h2>Contact Form</h2>
      <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
          placeholder="Enter name"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email address</label>
        <input
          placeholder="Enter email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="question">Question</label>
        <textarea
          placeholder="Enter your question here"
          id="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
