import React, { useContext } from 'react';
import loginimg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Signup = () => {

    const { createUser } = useContext(AuthContext)

    const handleSignup = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                result.user && updateProfile(result.user, {
                    displayName: name
                })
                    .then(() => console.log('profile updated'))
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }

    return (
        <div className='container'>
            <div className="hero">
                <div className="hero-content flex flex-col lg:flex-row justify-between w-full gap-10">
                    <div className="flex-shrink-0 text-center lg:text-left">
                        <img className='w-[90%]' src={loginimg} alt="" />
                    </div>
                    <div className="flex-shrink card w-full border h-full rounded-none">
                        <h2 className='text-center text-3 font-semibold text-4xl py-5 pt-10'>Sign Up</h2>
                        <form onSubmit={handleSignup} className="card-body pt-0">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password"
                                    placeholder="confirm password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn border-none bg-[#FF3811]">Sign Up</button>
                            </div>
                        </form>
                        <p className='px-10'>Already have an account? <Link className='text-blue-700 font-semibold' to='/login'>Sign in</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;