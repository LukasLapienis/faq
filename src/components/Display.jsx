import React from 'react';

export const Display = ({ faqData }) => {
  return (
    <div className="displayContainer">
      <table className="displayTable">
        <thead>
          <tr>
            <th style={{ width: '20vw' }}>Client Name</th>
            <th style={{ width: '60vw' }}>Client Question</th>
          </tr>
        </thead>
        <tbody>
          {faqData?.map((el, i) => (
            <tr key={i}>
              <td>{el.name}</td>
              <td>{el.question}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
