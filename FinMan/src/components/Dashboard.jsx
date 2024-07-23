import React from 'react';

const Dashboard = ({ expenses }) => {
  const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);
  const categorizedExpenses = expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = 0;
    }
    acc[expense.category] += expense.amount;
    return acc;
  }, {});

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg">Total Expenses: ${totalAmount.toFixed(2)}</p>
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Expenses by Category:</h2>
        <ul>
          {Object.keys(categorizedExpenses).map(category => (
            <li key={category} className="mb-2">
              <span className="font-bold">{category}</span>: ${categorizedExpenses[category].toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
