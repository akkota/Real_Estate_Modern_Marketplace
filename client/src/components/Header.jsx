import {FaSearch} from 'react-icons/fa'; 
import { Link } from 'react-router-dom'; 
import {useSelector} from 'react-redux';

export default function Header() {
  const currentUser = useSelector(state => state.user);
  return (
    <header className='bg-teal-200 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
        <Link to='/'>
            <h1 className='font-bold text-base sm:text-xl text-blue-700 flex flex-wrap'>
                <span className='text-teal-500'>AYA</span>
                <span className='text-blue-800'>Estate</span>
            </h1>
        </Link>
        <form className="bg-blue-100 p-3 rounded-lg flex items-center">
            <input type="text" placeholder="Search..." className="bg-transparent px-2 py-1 rounded border focus:outline-none focus:ring focus-border-blue-300 w-24 sm:w-64" />
            <FaSearch className='text-blue-500' />
        </form>
        <ul className='flex gap-4'>
            <Link to='/home'>
                <li className='hidden sm:inline text-blue-700 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
                <li className='hidden sm:inline text-blue-700 hover:underline'>About</li>
            </Link>
            <Link to='/profile'>
            {currentUser ? (
              <img
                className='rounded-full h-7 w-7 object-cover'
                src={currentUser.avatar}
                alt='profile'
              />
            ) : (
              <li className=' text-slate-700 hover:underline'> Sign in</li>
            )}
          </Link>
        </ul>
    </div>
    </header>
  )
}
