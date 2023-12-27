import { Label, Select, TextInput, Textarea } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthProvider } from '../../Provider/Provider';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Update = () => {
    const { datas, currentUser } = useContext(AuthProvider);
    const productData = useLoaderData();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location);
    console.log(navigate)
    console.log(productData._id)
    const handleUpdateJob = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const jobTitle = form.jobTitle.value;
        const category = form.category.value;
        const date = form.date.value;
        const minimumPrice = form.minimumPrice.value;
        const maximumPrice = form.maximumPrice.value;
        const description = form.description.value;
        const jobDetails = { email, jobTitle, category, date, minimumPrice, maximumPrice, description };
        // console.log(jobDetails)
        axios.put(`http://localhost:5000/myPostedJob/${productData._id}`, { jobDetails })
            .then(result => {
                if (result.data.modifiedCount > 0) {
                    Swal.fire({
                        title: "The Job",
                        text: "Updated Successfully",
                        icon: "success"
                    });
                    // setTimeout(()=>{
                    //     navigate(location?. ? location.state)
                    // },2000)
                }
                else {
                    Swal.fire({
                        title: "The Job",
                        text: "Details Remain Same",
                        icon: "question"
                    });
                }
            })
            .catch(error => {
                if (error) {
                    Swal.fire({
                        title: "Oops",
                        text: `${error.message}`,
                        icon: "error"
                    });
                }
            })
    }
    return (
        <div className='mx-5'>
            <form onSubmit={handleUpdateJob} className="border  border-[#ddcc70] w-full md:w-2/3 md:mx-auto my-20 rounded-lg p-5">
                <div className='md:grid md:grid-cols-2 gap-5'>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput name="email" defaultValue={currentUser?.email} id="email1" type="email" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="jobTitle" value="Job Title" />
                        </div>
                        <TextInput name="jobTitle" defaultValue={productData.jobDetails.jobTitle} id="jobTitle" type="text" required />
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="category" value="Select Category" />
                        </div>
                        <Select id="category" defaultValue={productData.jobDetails.category} name='categories' required>
                            {
                                datas.map(data => (<option key={data.id}>{data.category}</option>))
                            }

                        </Select>
                    </div>
                    <div className='w-full'>
                        <div className="mb-2 block">
                            <Label htmlFor="deadline" value="Deadline" />
                        </div>
                        {/* <Datepicker title="Job Genie" /> */}

                        <TextInput name="date" defaultValue={productData.jobDetails.date} id="deadline" type="date" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="minimumPrice" value="Minimum price" />
                        </div>
                        <TextInput name="minimumPrice" defaultValue={productData.jobDetails.minimumPrice} id="minimumPrice" type="number" placeholder='Minimum Price' required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="maximumPrice" value="Maximum Price" />
                        </div>
                        <TextInput name="maximumPrice" defaultValue={productData.jobDetails.maximumPrice} id="maximumPrice" type="number" placeholder='Maximum Price' required />
                    </div>
                    <div className='col-span-2'>
                        <div className="mb-2 block">
                            <Label htmlFor="description" value="Description" />
                        </div>
                        <Textarea defaultValue={productData.jobDetails.description} name='description' id="description" placeholder="Description" required rows={3} />
                    </div>
                </div>

                <button className='bg-[#ddcc70] mt-4 text-black p-[10px] w-full rounded-lg' type='submit'>Update Job</button>
            </form>
        </div>
    );
};

export default Update;