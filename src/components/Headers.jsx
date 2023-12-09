import React from 'react'
import { Link } from 'react-router-dom'
import {FaSearch} from 'react-icons/fa'

const Headers = () => {
  return (
    <div>
      <header className='bg-red-400 p-3 max-w-6xl mx-auto'>
        <nav className='flex justify-between'>
          <div className='font-bold'>
            <Link to='/'><p>Sahand Estate</p></Link>
          </div>

          <div className='bg-slate-300 p-1'>
            <form>
              <input type="text" name="" id="" placeholder='search...' className='bg-slate-300 focus:outline-none' />
              <button><FaSearch/></button>
            </form>
          </div>

          <div className='flex gap-1 font-bold'>
            <Link to='/' className='hover:underline'>Home</Link>
            <Link to='/About' className='hover:underline'>About</Link>
            <Link to='/Signin' className='hover:underline'>Signin</Link>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Headers
