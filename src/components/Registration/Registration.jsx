import { Checkbox, Label, TextInput } from 'flowbite-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthProvider } from '../../Provider/Provider';
import Swal from 'sweetalert2';

const Registration = () => {
    const { createUser } = useContext(AuthProvider);
    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const userName = form.name.value;
        const userEmail = form.email.value;
        const userPass = form.password.value;
        console.log(userName, userEmail, userPass)
        createUser(userEmail, userPass)
            .then(result => {
                if (result.user) {
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
    return (
        <div className='m-5 text-[#ddcc70]'>
            <h1 className='text-3xl font-bold text-center mb-2'>Register Here</h1>
            <form onSubmit={handleCreateUser} className="flex md:w-1/3 w-full mx-auto flex-col gap-4">
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
                <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember">Forget Password</Label>
                </div>
                <div className='text-center'>
                    <h1 className='text-black'>Already Have An Account ? Please <Link className='font-bold text-lg text-[#ddcc70]' to={'/login'}>Login</Link></h1>
                </div>
                {/* <Button className='bg-red' type="submit">Login</Button> */}
                {/* <button type='submit'>Register</button> */}
                <input className='bg-[#ddcc70] text-black p-[10px] rounded-lg' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Registration;