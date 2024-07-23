import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-gray-300">Dashboard</Link></li>
        <li><Link to="/transactions" className="hover:text-gray-300">Transactions</Link></li>
        <li><Link to="/add-transaction" className="hover:text-gray-300">Add Transaction</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
