import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import AddTransaction from './components/AddTransaction';
import Navbar from './components/Navbar';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [categories] = useState(['Food', 'Transport', 'Rent', 'Utilities', 'Entertainment']);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const editExpense = (updatedExpense) => {
    setExpenses(expenses.map(expense => expense.id === updatedExpense.id ? updatedExpense : expense));
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow bg-gray-100">
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Dashboard expenses={expenses} />} />
              <Route path="/transactions" element={<Transactions expenses={expenses} editExpense={editExpense} deleteExpense={deleteExpense} />} />
              <Route path="/add-transaction" element={<AddTransaction addExpense={addExpense} categories={categories} />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
