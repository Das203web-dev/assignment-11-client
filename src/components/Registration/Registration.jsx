import { Checkbox, Label, TextInput } from 'flowbite-react';
import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Provider/Provider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa6';
import axios from 'axios';
import { Helmet } from 'react-helmet-async';

const Registration = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const { createUser, googleSignIn } = useContext(AuthProvider);
    const [validatePass, setValidatePass] = useState(null)
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                if (result.user) {
                    console.log(result.user)
                    Swal.fire({
                        title: "Login successful",
                        showClass: {
                            popup: `
                            animate__animated
                            animate__fadeInUp
                            animate__faster
                          `
                        },
                        hideClass: {
                            popup: `
                            animate__animated
                            animate__fadeOutDown
                            animate__faster
                          `
                        }
                    });
                    navigate(location?.state ? location.state : "/")
                }
            })
            .catch(error => {
                console.log(error)
            })
    }
    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const userEmail = form.email.value;
        const userPass = form.password.value;
        const photo = form.photoUrl.value;
        if (userPass.length < 6) {
            return setValidatePass("Password must be greater then 6")
        }
        // console.log(userName, userEmail, userPass)
        createUser(userEmail, userPass)
            .then(result => {
                const user = result.user;
                const newUser = { userEmail }
                console.log(user)
                if (user) {
                    console.log(user)
                    setValidatePass("");
                    axios.post('http://localhost:5000/jwt', newUser, { withCredentials: true })
                        .then(res => {
                            console.log(res.data)
                        })
                    Swal.fire({
                        title: "Registration successful",
                        showClass: {
                            popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                        },
                        hideClass: {
                            popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                        }
                    });
                    navigate(location?.state ? location.state : "/")

                }
            })
            .catch(error => {
                console.log(error.code)
                if (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${error.message}`,
                    });
                }
            })
    }
    return (
        <div className='m-5 text-[#ddcc70]'>
            <Helmet>
                <title>Job Genie - Registration</title>
            </Helmet>
            <h1 className='text-3xl font-bold text-center mb-3'>Register Here</h1>
            <div className='border border-[#ddcc70] md:w-1/3 mx-auto rounded-lg p-5'>
                <form onSubmit={handleCreateUser} className="flex w-full flex-col gap-4">
                    <div>
                        {validatePass}
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" value="Your Name" />
                        </div>
                        <TextInput id="name" type="text" name='name' placeholder="Your Name" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" value="Your email" />
                        </div>
                        <TextInput id="email1" type="email" name='email' placeholder="Your Email" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput id="password1" type="password" name='password' placeholder='Your Password' required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="photourl" value="Your PhotoURL" />
                        </div>
                        <TextInput id="photourl" type="text" name='photoUrl' placeholder='Your Photo URL' required />
                    </div>


                    {/* <Button className='bg-red' type="submit">Login</Button> */}
                    {/* <button type='submit'>Register</button> */}
                    <input className='bg-[#ddcc70] text-black p-[10px] rounded-lg' type="submit" value="Register" />
                    <div className='flex items-center  justify-center relative'>
                        <h1 className='text-center font-bold'>Or</h1>
                    </div>
                </form>
                <div className='space-y-4 mt-4'>
                    <button onClick={handleGoogleSignIn} className='bg-[#ddcc70] flex justify-center items-center gap-2 text-center w-full text-black p-[10px] rounded-lg' type='submit'>Sign In With <FaGoogle></FaGoogle></button>
                    <div className='text-center'>
                        <h1 className='text-black'>Already Have An Account ? Please <Link className='font-bold text-lg text-[#ddcc70]' to={'/login'}>Login</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;