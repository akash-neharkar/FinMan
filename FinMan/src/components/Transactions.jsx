import React, { useState } from 'react';

const Transactions = ({ expenses, editExpense, deleteExpense }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentExpense, setCurrentExpense] = useState(null);

  const startEdit = (expense) => {
    setIsEditing(true);
    setCurrentExpense(expense);
  };

  const saveEdit = () => {
    editExpense(currentExpense);
    setIsEditing(false);
    setCurrentExpense(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Transactions</h1>
      {isEditing ? (
        <form onSubmit={(e) => { e.preventDefault(); saveEdit(); }}>
          <div className="mb-4">
            <label className="block text-gray-700">Amount:</label>
            <input
              type="number"
              value={currentExpense.amount}
              onChange={(e) => setCurrentExpense({ ...currentExpense, amount: parseFloat(e.target.value) })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description:</label>
            <input
              type="text"
              value={currentExpense.description}
              onChange={(e) => setCurrentExpense({ ...currentExpense, description: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Category:</label>
            <input
              type="text"
              value={currentExpense.category}
              onChange={(e) => setCurrentExpense({ ...currentExpense, category: e.target.value })}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Save</button>
        </form>
      ) : (
        <ul>
          {expenses.map(expense => (
            <li key={expense.id} className="flex justify-between items-center mb-2 p-2 border-b border-gray-300">
              <div>
                <span className="font-bold">{expense.description}</span> - ${expense.amount} - <span className="italic">{expense.category}</span>
              </div>
              <div>
                <button
                  onClick={() => startEdit(expense)}
                  className="bg-yellow-500 text-white px-3 py-1 rounded-md mr-2 hover:bg-yellow-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteExpense(expense.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Transactions;
