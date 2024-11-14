import React from 'react'
import PropType from 'prop-types'

const Header = ({onSearch}) => {
  return (
    <div className='p-4 bg-black flex justify-between items-end'>
      <div className='flex items-center space-x-4'>
        <h1 className='text-[30px] uppercase text-red-600 font-bold'>Movie</h1>
        <nav className='flex items-center space-x-4'>
            <a href="#" className='text-white'>Home</a>
            <a href="#" className='text-white'>About</a>
            <a href="#" className='text-white'>Contact</a>
        </nav>
      </div>

      <div className='flex items-center space-x-4'>
        <input type="text" placeholder='Tim kiem' 
        className='p-3 px-3 py-2 text-black rounded-md'
        />
        <button className='p-2 text-white bg-red-600 rounded-md hover:bg-red-800 transition-all duration-500 ease-in-out'
        onClick={() => onSearch('venom')}>Search</button>
      </div>
    </div>
  );
}
Header.propTypes = {
  onSearch: PropType.func,
}

export default Header;
