import { Checkbox, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../Provider/Provider';
import Swal from 'sweetalert2';

const Login = () => {
    const { userLogin, googleSignIn } = useContext(AuthProvider);
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const userEmail = form.email.value;
        const userPass = form.password.value;
        userLogin(userEmail, userPass)
            .then(result => {
                if (result.user) {
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
                }
            })
            .catch(error => {
                if (error) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: `${error.message}`,
                    });
                }
            })
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div className='m-5 text-[#ddcc70]'>
            <h1 className='text-3xl font-bold text-center mb-2'>Login Here</h1>
            <form onSubmit={handleLogin} className="flex md:w-1/3 w-full mx-auto flex-col gap-4">
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
                <div className='text-center'>
                    <h1 className='text-black'>New Here ? Please <Link className='font-bold text-lg text-[#ddcc70]' to={'/register'}>Register</Link></h1>
                </div>
                {/* <Button className='bg-red' type="submit">Login</Button> */}
                <button className='bg-[#ddcc70] text-black p-[10px] rounded-lg' type='submit'>Login</button>
                <div className='flex items-center  justify-center relative'>
                    <hr className='bg-red h-4 w-full absolute top-1/2 left-0 -translate-y-1/2' /><h1 className='text-center font-bold'>Or</h1><hr className='bg-red h-4 w-full absolute top-1/2 right-0 -translate-y-1/2' />
                </div>
                <button onClick={handleGoogleSignIn} className='bg-[#ddcc70] text-black p-[10px] rounded-lg' type='submit'>Sign In With google</button>
            </form>
        </div>
    );
};

export default Login;