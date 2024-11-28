"use client"

import axios from 'axios';
import { useForm } from 'react-hook-form';


interface FormData {
  name:string,
  surname:string,
  login:string,
  password:string

};




const Home = () => {
  const {register,handleSubmit,formState:{errors}, setError, reset} = useForm<FormData>()

  const onSubmit = async (data:FormData)=> {
    try{
      const response = await axios.post('/api/users', data)
      reset()
    }catch(error:any) {
      const serverErrorMessage = error.response.data.message;
      if(serverErrorMessage === "Login is busy"){
        setError("login",{message:serverErrorMessage})
      }else{
        setError("root", {message: serverErrorMessage || "Internal server error"})
      }
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="w-full max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
        
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>

          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
            {errors.name && <p className='bg-red-400 p-2 my-s'>{errors.name.message}</p>}
            <input
            {...register("name", {required: "Name is Required field"})}
              type="text"
              name="name"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="surname" className="block text-sm font-medium mb-1">Surname</label>
            {errors.surname && <p className='bg-red-400 p-2 my-s'>{errors.surname.message}</p>}
            <input
              {...register("surname",{required: "Surname is required field"})}
              type="text"
              name="surname"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter your surname"
            />
          </div>
          <div>
            <label htmlFor="login" className="block text-sm font-medium mb-1">Login</label>
            {errors.login && <p className='bg-red-400 p-2 my-s'>{errors.login.message}</p>}
            <input
            {...register("login",{required:"Login is required field"})}
              type="text"
              name="login"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Enter your login"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            {errors.password && <p className='bg-red-400 p-2 my-s'>{errors.password.message}</p>}
            <input
            {...register("password",{required:"Password is required field", minLength:{value:6,message:"Password must be least 6 items"}})}
              type="password"
              name="password"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 focus:outline-none focus:ring-4 focus:ring-pink-300"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{' '}
          <a href="#" className="text-pink-400 hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};
export default Home;

