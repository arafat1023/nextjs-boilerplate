import Link from 'next/link';
import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-full">
      <button
        type="button"
        onClick={toggleSidebar}
        className="absolute left-0 top-0 ml-4 mt-4 rounded bg-gray-200 p-2"
      >
        {!isOpen ? 'Open' : 'Close'}
      </button>
      <nav
        className={`fixed left-0 top-0 h-full w-64 bg-gray-800 ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        <ul className="flex flex-col items-start justify-start space-y-4 p-4 text-white">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
          {/* Add more menu items as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
