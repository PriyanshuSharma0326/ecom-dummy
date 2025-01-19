import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../../Features/userSlice';

function Header() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user.user);

    function handleLogout() {
        dispatch(setUser(null));
    }

    return (
        <div className='w-full h-[76px] px-[50px] max-[1200px]:px-[35px] max-[800px]:px-4 py-4 flex items-center shadow-[0_0_8px_0_#00000045]'>
            <div className="">
                <h1 className='font-bold text-xl'>E-com store</h1>
            </div>

            {
                user ? 
                <div className="flex items-center gap-2 ml-auto">
                    <Link to='/products' className='outline-none px-4 py-2 font-semibold text-base'>Products</Link>

                    <Link to='/cart' className='outline-none px-4 py-2 font-semibold text-base'>Cart</Link>

                    <button onClick={handleLogout} className='outline-none px-4 py-2 font-semibold text-base rounded-md border-2 border-[#000000]'>Logout</button>
                </div> : 
                <div className="flex items-center gap-6 ml-auto">
                    <Link to='/auth/login' className='hover-transition px-4 py-2 rounded-md font-semibold text-base border-2 border-[#000000] text-[#000000] hover:bg-[#000000] hover:text-[#FFFFFF]'>Login</Link>

                    <Link to='/auth/register' className='hover-transition px-4 py-2 rounded-md font-semibold text-base text-[#FFFFFF] bg-[#000000] border-2 border-[#000000]'>Register</Link>
                </div>
            }
        </div>
    );
}

export default Header;
