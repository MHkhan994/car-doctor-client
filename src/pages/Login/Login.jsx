import React, { useContext } from 'react';
import loginimg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const { signIn } = useContext(AuthContext)

    const handleLogin = e => {
        e.preventDefault()
        console.log('wroking');
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.log(error))
    }


    return (
        <div className='container'>
            <div className="hero">
                <div className="hero-content flex flex-col lg:flex-row justify-between items-start w-full gap-10">
                    <div className="flex-shrink-0 text-center lg:text-left">
                        <img className='w-[90%]' src={loginimg} alt="" />
                    </div>
                    <div className="flex-shrink card w-full border h-full rounded-none">
                        <h2 className='text-center text-3 font-semibold text-4xl py-5 pt-10'>Sign In</h2>
                        <form onSubmit={handleLogin} className="card-body pt-0">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn border-none bg-[#FF3811]">Login</button>
                            </div>
                        </form>
                        <p className='px-10'>New to Car Doctor? <Link className='text-blue-700 font-semibold' to='/signup'>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;