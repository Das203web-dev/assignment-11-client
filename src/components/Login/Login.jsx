import { Checkbox, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthProvider } from '../../Provider/Provider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa6';
import axios from 'axios';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate()
    const { userLogin, googleSignIn } = useContext(AuthProvider);
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                if (result.user) {
                    const loggedUser = result.user.email;
                    axios.post("http://localhost:5000/jwt", loggedUser, { withCredentials: true })
                        .then(res => {
                            console.log(res.data)
                        })
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
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const userEmail = form.email.value;
        const userPass = form.password.value;

        userLogin(userEmail, userPass)
            .then(result => {
                const user = result.user;
                const loggedUser = { userEmail }
                if (user) {
                    axios.post('http://localhost:5000/jwt', loggedUser, { withCredentials: true })
                        .then(res => {
                            if (res.data) {
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


                }
            })
            .catch(error => {
                if (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${error.code}`,
                    });
                }
            })
    }

    return (
        <div className='m-5 text-[#ddcc70]'>
            <h1 className='text-3xl font-bold text-center mb-3'>Login Here</h1>
            <div className='border border-[#ddcc70] md:w-1/3 mx-auto rounded-lg p-5'>
                <form onSubmit={handleLogin} className="flex  w-full flex-col gap-4">
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
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Forget Password</Label>
                    </div>

                    {/* <Button className='bg-red' type="submit">Login</Button> */}
                    <button className='bg-[#ddcc70] text-black p-[10px] rounded-lg' type='submit'>Login</button>
                    <div className='flex items-center  justify-center relative'>
                        <h1 className='text-center font-bold'>Or</h1>
                    </div>

                </form>
                <div className='space-y-4 mt-4'>
                    <button onClick={handleGoogleSignIn} className='bg-[#ddcc70] flex justify-center items-center gap-2 text-center w-full text-black p-[10px] rounded-lg' type='submit'>Sign In With <FaGoogle></FaGoogle></button>
                    <div className='text-center'>
                        <h1 className='text-black'>New Here ? Please <Link className='font-bold text-lg text-[#ddcc70]' to={'/register'}>Register</Link></h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;