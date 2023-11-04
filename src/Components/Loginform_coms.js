import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'
//added Icon
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid'


const apiUrl = 'http://localhost:3001/api/login'; 

const LoginForm = () => {
  const [responseData, setResponseData] = useState('');
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const data_body = {
        Username: user,
        Password: password,
  }
  const login = async () => {
    try {
      const response = await axios.post(apiUrl, data_body);
      setResponseData(response.data.data);
      if (user !== '' && password !== '') {
        sessionStorage.setItem('Username', user);
        sessionStorage.setItem('Password', password);
        Swal.fire({
          position: 'mid',
          icon: 'success',
          title: 'Login succeeded',
          showConfirmButton: false,
          timer: 1000
        })
        setTimeout(() => {window.location.href = '/main';}, 1500);
         
       }
      
    } catch (error) {
      console.error('Error fetching data:', error);
      Swal.fire({
        icon: 'error',
        title: 'Login failed.',
        text: 'Please check your credentials and try again.',
      })
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login();
    
    
  };

  return (
    <>
        <div className="relative overflow-hidden bg-gray-100 pb-20 pt-24 lg:pb-24 h-screen w-screen">
          <div className="mx-auto max-w-full lg:max-w-none">
          <div className="mx-auto lg:ml-[39.5rem] lg:items-center">
          <div className="relative z-10 -mx-4 shadow-xl ring-1 ring-slate-900/10 sm:mx-0 sm:rounded-3xl lg:w-1/2 lg:flex-none">
            <div className="relative bg-white px-4 py-10 sm:rounded-3xl sm:px-10">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                  className="mx-auto h-10 w-auto"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Sign in to your account
                </h2>
              </div>

              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSubmit}>

                  <div>
                    <label htmlFor="user" className="block text-sm font-medium leading-6 text-gray-900">
                      User name
                    </label>
                    <div className="relative mt-2">
                      <input
                        id="user"
                        name="user"
                        type="text"
                        placeholder="enter a username"
                        required
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        className="pl-9 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                        <div class="absolute inset-y-0 left-0 pl-3  
                          flex items-center pointer-events-none 
                          "> 
                          <UserIcon className=" h-5 w-5 text-black"/>
                        </div> 
                    </div>
                  </div>

                  <div>
                    <label htmlFor="Password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="relative mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="enter a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-9 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <div class="absolute inset-y-0 left-0 pl-3  
                          flex items-center pointer-events-none 
                          "> 
                          <LockClosedIcon className=" h-5 w-5 text-black"/>
                        </div> 
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in
                    </button>
                  </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                  Not a member?{' '}
                  <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                    Sign up here
                  </a>
                </p>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
          
        </div>
      </>
  );
};

export default LoginForm;
