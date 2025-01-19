import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../Components/Input/Input';
import { verifyEmail } from '../../lib/utils/utils';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Features/userSlice';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const defaultFormInputs = {
        email: '',
        password: '',
    }

    const defaultFormErrors = {
        email: '',
        password: '',
    }

    const [formInputs, setFormInputs] = useState(defaultFormInputs);
    const [formErrors, setFormErrors] = useState(defaultFormErrors);

    function changeHandler(e) {
        const { name, value } = e.target;

        setFormInputs({ ...formInputs, [name]: value });
    }

    function handleLogin() {
        const validationErrors = {}

        if(!formInputs.email) {
            validationErrors.email = 'Required field';
        }
        else if(!verifyEmail(formInputs.email)) {
            validationErrors.email = 'Invalid email';
        }

        if(!formInputs.password) {
            validationErrors.password = 'Required field';
        }

        if(Object.keys(validationErrors).length === 0) {
            setFormErrors(defaultFormErrors);

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const user = users.find(user => user.email === formInputs.email);

            if (user) {
                if (user.password === formInputs.password) {
                    dispatch(setUser(user));
                    navigate('/');
                }
                else {
                    setFormErrors({
                        ...formErrors,
                        password: 'Wrong password'
                    });
                    return;
                }
            }
            else {
                setFormErrors({
                    password: '',
                    email: 'User not present'
                });
                return;
            }
        }
        else {
            setFormErrors(validationErrors);
        }
    }

    return (
        <div className='w-[1536px] max-[1536px]:w-full mx-auto h-screen centered'>
            <div className="flex flex-col items-center gap-4 p-8 border-2 border-[#000000] w-[500px] max-[500px]:w-full max-[500px]:border-none max-[500px]:px-6 rounded-lg">
                <Input 
                    inputOptions={{
                        placeholder: 'Enter email',
                        type: 'email',
                        name: 'email',
                        id: 'email',
                        value: formInputs.email,
                        onChange: changeHandler,
                    }} 
                    labelText={'Email'} 
                    errorText={formErrors.email} 
                />

                <Input 
                    inputOptions={{
                        placeholder: 'Enter password',
                        type: 'password',
                        name: 'password',
                        id: 'password',
                        value: formInputs.password,
                        onChange: changeHandler,
                    }} 
                    labelText={'Password'} 
                    errorText={formErrors.password} 
                />

                <div className="flex flex-col items-center gap-2 w-full">
                    <button onClick={handleLogin} className='outline-none hover-transition w-full py-2 border-2 border-[#000000] text-[#000000] rounded-md text-base font-medium hover:bg-[#000000] hover:text-[#FFFFFF]'>Login</button>

                    <p className='text-sm font-normal'>Don't have an account? <span className='font-semibold'><Link to='/auth/register'>Register here</Link></span></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
