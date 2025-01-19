import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../Components/Input/Input';
import { passwordValidator, verifyEmail, verifyPhoneNumber } from '../../lib/utils/utils';
import { useDispatch } from 'react-redux';
import { setUser } from '../../Features/userSlice';

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const defaultFormInputs = {
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
    }
    
    const defaultFormErrors = {
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
    }

    const [formInputs, setFormInputs] = useState(defaultFormInputs);
    const [formErrors, setFormErrors] = useState(defaultFormErrors);
    
    function changeHandler(e) {
        const { name, value } = e.target;
    
        setFormInputs({ ...formInputs, [name]: value });
    }

    function handleRegister() {
        const validationErrors = {}

        if(!formInputs.name) {
            validationErrors.name = 'Required field';
        }

        if(!formInputs.email) {
            validationErrors.email = 'Required field';
        }
        else if(!verifyEmail(formInputs.email)) {
            validationErrors.email = 'Invalid email';
        }

        if(!formInputs.phoneNumber) {
            validationErrors.phoneNumber = 'Required field';
        }
        else if(!verifyPhoneNumber(formInputs.phoneNumber)) {
            validationErrors.phoneNumber = 'Invalid phone number';
        }

        if(!formInputs.password) {
            validationErrors.password = 'Required field';
        }
        else if(!passwordValidator(formInputs.password)) {
            validationErrors.password = 'Invalid password';
        }

        if(Object.keys(validationErrors).length === 0) {
            setFormErrors(defaultFormErrors);

            const users = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = users.some(user => user.email === formInputs.email);

            if (userExists) {
                setFormErrors({
                    ...formErrors,
                    email: 'User already present'
                });
                return;
            }
            else {
                users.push(formInputs);
                localStorage.setItem('users', JSON.stringify(users));
                dispatch(setUser(formInputs));
                navigate('/');
            }
        }
        else {
            setFormErrors(validationErrors);
        }
    }

    return (
        <div className='w-[1536px] max-[1536px]:w-full mx-auto h-screen centered'>
            <div className="flex flex-col items-center gap-4 px-12 py-8 border-2 border-[#000000] w-[500px] max-[500px]:w-full max-[500px]:border-none max-[500px]:px-6 rounded-lg">
                <Input 
                    inputOptions={{
                        placeholder: 'Enter display name',
                        type: 'text',
                        name: 'name',
                        id: 'name',
                        value: formInputs.name,
                        onChange: changeHandler,
                    }} 
                    labelText={'Display Name'} 
                    errorText={formErrors.name} 
                />

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
                        placeholder: 'Enter phone number',
                        type: 'text',
                        name: 'phoneNumber',
                        id: 'phoneNumber',
                        value: formInputs.phoneNumber,
                        onChange: changeHandler,
                    }} 
                    labelText={'Phone Number'} 
                    errorText={formErrors.phoneNumber} 
                />

                <div className="w-full flex flex-col gap-2">
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

                    <p className='text-xs text-[#454545]'>Atleast 1 uppercase, 1 lowercase, 1 special character and 1 number. Min length 8 characters</p>
                </div>

                <div className="flex flex-col items-center gap-2 w-full">
                    <button onClick={handleRegister} className='outline-none hover-transition w-full py-2 border-2 border-[#000000] text-[#000000] rounded-md text-base font-medium hover:bg-[#000000] hover:text-[#FFFFFF]'>Register</button>

                    <p className='text-sm font-normal'>Already have an account? <span className='font-semibold'><Link to='/auth/login'>Login here</Link></span></p>
                </div>
            </div>
        </div>
    );
}

export default Register;
