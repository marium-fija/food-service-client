import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import AuthContext from '../provider/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser, singInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [nameError, setNameError] = useState("");



    // Normal Email/Password Registration
    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const phone = form.phone.value;

        if(name.length < 3){
    setNameError("Name must be at least 3 characters long");
    return;
}

        // Password Validation
        const passwordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/;
        if (!passwordValid.test(password)) {
            Swal.fire({
                icon: "error",
                title: "Invalid Password",
                text: "Password must be at least 8 characters long and include 1 uppercase, 1 lowercase, and 1 special character."
            });
            return;
        }

        setLoading(true);
        createUser(email, password)
            .then(result => {
                // Update Firebase profile
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photo
                }).then(() => {
      const userProfile = {
    email: result.user?.email || "",
    name: result.user?.displayName || name || "",
    photo: result.user?.photoURL || photo || "",
    phone: phone || "",
    creationTime: result.user?.metadata?.creationTime || new Date().toISOString(),
    lastSignInTime: result.user?.metadata?.lastSignInTime || new Date().toISOString()
};

                   
                    axios.post("https://food-service-server-nq3l8fsbw-mariums-projects-1a2166bf.vercel.app/users", userProfile)
                        .then(res => {
                            Swal.fire({
                                icon: "success",
                                title: "Account Created Successfully!",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate("/");
                        })
                        .catch(err => {
                            console.error(err);
                            Swal.fire("Error!", "Backend save failed!", "error");
                        });
                });
            })
            .catch(err => {
                console.error(err);
                Swal.fire("Error!", "Firebase registration failed!", "error");
            })
            .finally(() => setLoading(false));
    };

    // Google Registration
    const handleGoogleRegister = () => {
        setLoading(true);
        singInWithGoogle()
            .then(result => {
                const userProfile = {
                    email: result.user?.email,
                    name: result.user?.displayName,
                    photo: result.user?.photoURL,
                    creationTime: result.user?.metadata?.creationTime,
                    lastSignInTime: result.user?.metadata?.lastSignInTime
                };

                axios.post("https://food-service-server-nq3l8fsbw-mariums-projects-1a2166bf.vercel.app/users", userProfile)
                    .then(res => {
                        Swal.fire({
                            icon: "success",
                            title: "Account Created with Google",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate("/");
                    })
                    .catch(err => {
                        console.error(err);
                        Swal.fire("Error!", "Backend save failed!", "error");
                    });
            })
            .catch(err => {
                console.error(err);
                Swal.fire("Error!", "Google login failed!", "error");
            })
            .finally(() => setLoading(false));
    };
    
if (loading) 
    return <p className='text-7xl text-center'>loading</p>

    return (
        <div className='mb-5'>
            <div className="flex justify-center min-h-screen items-center">
                <div className="card bg-base-100 w-full max-w-lg border border-cyan-800 shadow-2xl shadow-cyan-100 shrink-0 py-5">
                    <h2 className="font-semibold text-2xl text-center">
                        Register your account
                    </h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset text-xl">
                            {/* Name  */}
                            <label className="label">Name</label>
                            <input
                                name="name"
                                type="text"
                                className="input w-full"
                                placeholder="Name"
                                required
                            />

                            {nameError && <p className="text-xs text-error">{nameError}</p>}

                            {/* Photo URl  */}
                            <label className="label">Photo URl </label>
                            <input
                                name="photo"
                                type="text"
                                className="input w-full"
                                placeholder="Photo URl"
                                required
                            />

                            {/* phone */}
                            <label className="label">Phone
                            </label>
                            <input type="text" name="phone" className="input w-full" placeholder="Phone NUmber" />

                            {/* email  */}
                            <label className="label">Email</label>
                            <input
                                name="email"
                                type="email"
                                className="input w-full"
                                placeholder="Email"
                                required
                            />

                            {/* password  */}
                            <label className="label">Password</label>
                            <input
                                name="password"
                                type="password"
                                className="input w-full"
                                placeholder="Password"
                                required
                            />
                            <button type="submit" className="btn bg-indigo-400 text-white mt-4">
                                Register
                            </button>
                            <button
                            type="button"
                             onClick={handleGoogleRegister} 
                            className="btn bg-white text-black border-gray-800 mt-5">
                                <FcGoogle size={25}/>
                                Register with Google
                            </button>
                            <p className="font-semibold text-center pt-5">
                                Allready Have An Account ?{" "}
                                <Link className="text-secondary" to="/auth/login">
                                    Login
                                </Link>
                            </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;