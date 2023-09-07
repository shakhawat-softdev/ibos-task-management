import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';


export default function Login() {
   const { loginWithEmailAndPass, logout } = useAuth();
   const { register, handleSubmit, formState: { errors } } = useForm();

   const onSubmit = data => {
      console.log(data)
      loginWithEmailAndPass(data.email, data.password)
         .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            toast('Login Successful!')
         })
         .catch(error => console.log(error.message))
   }
   return (
      <div className="hero min-h-screen bg-base-200 container mx-auto">
         <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
               <h1 className="text-5xl font-bold">Login Now!</h1>
               <p className="py-6">Provident cupiditate voluptatem et in.</p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
               <form onSubmit={handleSubmit(onSubmit)} className="card-body">

                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input type="text" placeholder="email" className="input input-bordered" {...register("email", { required: true, maxLength: 80 })} />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Password</span>
                     </label>
                     <input type="text" placeholder="password" className="input input-bordered" {...register("password", { required: true, maxLength: 80 })} />
                  </div>

                  <div className="form-control mt-6">
                     <button type='submit' className="btn btn-primary">Login</button>
                  </div>
               </form>
            </div>
         </div>
         <Toaster />
      </div>
   )
}