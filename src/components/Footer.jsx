import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        

        <div className="text-center text-gray-500 mt-6">
          <p>&copy; 2024 MovieFlix. All Rights Reserved.</p>
          <FontAwesomeIcon icon="fa-brands fa-twitter" className='text-white w-[40px] h-[40px]'/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
