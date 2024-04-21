import './App.css';
import { Display } from './components/Display';
import { Form } from './components/Form';
import { useState, useEffect } from 'react';
import { db } from './firebase_config.js';
import { getDocs, collection } from '@firebase/firestore';

function App() {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const docsSnap = await getDocs(collection(db, 'faq'));
      const docArray = [];
      docsSnap.forEach((el) => docArray.push(el.data()));
      setFaqData(docArray);
    };
    getAll();
  }, []);

  return (
    <div className="App">
      <Form setFaqData={setFaqData} />
      <Display faqData={faqData} />
    </div>
  );
}

export default App;
