import React, { useState } from 'react';
import axios from 'axios';

const DeleteTransactionForm = () => {
  const [transactionId, setTransactionId] = useState('');
  const [message, setMessage] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete('/delete', {
        data: { id: transactionId }
      });
      setMessage(response.data.message);
      setTransactionId('');
    } catch (error) {
      setMessage('Error deleting transaction');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Delete Transaction</h2>
      <form onSubmit={handleDelete}>
        <input
          type="text"
          placeholder="Enter Transaction ID"
          value={transactionId}
          onChange={(e) => setTransactionId(e.target.value)}
          required
        />
        <button type="submit">Delete</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteTransactionForm;