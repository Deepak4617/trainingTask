import React, { useState } from 'react';

const TeamNotes = () => {
  const [notes, setNotes] = useState('');
  const [teamMessages, setTeamMessages] = useState([]);

  const handleInputChange = (event) => {
    setNotes(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (notes.trim() !== '') {
      const newMessage = {
        id: new Date().getTime(),
        message: notes
      };
      setTeamMessages([...teamMessages, newMessage]);
      setNotes('');
    }
  };

  return (
    <div>
      <h2>Team Notes</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={notes}
          onChange={handleInputChange}
          placeholder="Write your message here..."
          rows={4}
          cols={50}
        />
        <br />
        <button type="submit">Add Note</button>
      </form>
      <h3>Messages:</h3>
      <ul>
        {teamMessages.map((message,index) => (
          <li key={index}>{message.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamNotes;
