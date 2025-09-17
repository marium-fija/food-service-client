import React from 'react';
import errorImg from '../assets/404.png';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
             <div className='max-w-7xl'>
            <div className='m-32 flex items-center justify-center gap-20'>
                {/* img */}
                <div>
                   <img className='w-96 sm:flex-cols lg:flex-row' src={errorImg} alt="" />
                </div>
                {/* text */}
                <div>
                    <h3 className='text-2xl font-semibold text-blue-400'>Opps.... </h3>
                    <h1 className='text-8xl font-bold text-blue-900'>404</h1>
                    <p className='text-xl text-red-950 font-semibold'>This page is missing or you assmbled the link incorrecty</p>

                    <Link className='btn btn-outline hover:bg-indigo-400 border-2 text-cyan-800 rounded-full mt-20 ' to="/">Go Home</Link>
                </div>
                
            </div>

            
        </div>
        </div>
    );
};

export default ErrorPage;