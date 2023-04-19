import { useState } from 'react'
import { Link } from 'react-router-dom'
import { signInWithPopup, signOut } from '@firebase/auth'
import { auth, Providers } from '../config/firebase'


function Navbar() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signOutOnClick = () => {
    signOut(auth)
      .then(() => {
        setIsSignedIn(false);
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  const signInOnClick = async () => {
    try {
      const response = await signInWithPopup(auth, Providers.google);
      setIsSignedIn(true);
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const clicked = () => {
    setIsVisible(false)
    }

  return (
    <div id='navbar' className='shadow-xl'>
        <nav className='flex items-center justify-between flex-wrap bg-black'>
            <div className='flex items-center flex-shrink-0 text-red-800 mr-6'>
                <Link to='/' className='font-semibold text-xl rounded tracking-tight'>
                <img src="../src/assets/nav_logo.jpg" alt="logo" className="w-30 h-40" />
                </Link>
            </div>
            <div>
                <button className='p-3 m-5 bg-black rounded justify-center'>
                    <div>
                        <Link to='/' onClick={ clicked } className='mt-4 lg:inline-block lg:mt-0 
                        text-white hover:text-blue-400 mr-4'>
                            Home
                        </Link>
                    </div>
                </button>
            </div>
            <div>
                <button className='p-3 m-5 bg-black rounded justify-center'>
                    <div>
                        <Link to='/about' onClick={ clicked } className='place-items-center mt-4 lg:inline-block lg:mt-0 
                        text-white hover:text-blue-400 mr-4'>
                            About
                        </Link>
                    </div>
                </button>
            </div>
            <div>
                <button className='p-3 m-5 bg-black justify-center'>
                    <div>
                        <Link to='/dashboard' onClick={ clicked } className='font-minetext-center mt-4 lg:inline-block lg:mt-0 
                        text-white hover:text-blue-400 mr-4'>
                            Your(e) Bazaar
                        </Link>
                    </div>
                </button>
                {
                !auth.currentUser ?

                <button>
                    <div>
                        <Link to="/" onClick={ () => { signInOnClick()}} className='text-white'>
                            Login
                        </Link>
                    </div>
                </button>
                :
                <button>
                    <div>
                        <Link to="/" onClick={ () => { signOutOnClick()}} className='text-white'>
                            Logout
                        </Link>
                    </div>
                </button>

            }
            </div>
            <div className='p-5'>
            </div>
        </nav>
    </div>
  )
}


export default Navbar