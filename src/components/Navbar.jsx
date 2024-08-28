import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-700 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <span className="text-white p-2 rounded hover:bg-gray-600 cursor-pointer">
            Home
          </span>
        </li>
        <li>
          <span className="text-white p-2 rounded hover:bg-gray-600 cursor-pointer">
            Contato
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
