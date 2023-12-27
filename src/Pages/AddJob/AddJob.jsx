import { Button, Checkbox, Datepicker, Label, Select, TextInput, Textarea } from 'flowbite-react';
import React, { useContext } from 'react';
import { AuthProvider } from '../../Provider/Provider';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const AddJob = () => {
    const { currentUser, datas } = useContext(AuthProvider);
    const handlePostJob = (e) => {
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
        console.log(jobDetails)
        axios.post('http://localhost:5000/myPostedJob', { jobDetails })
            .then(result => {
                if (result.data) {
                    Swal.fire({
                        title: "Job",
                        text: "Added Sucessfully",
                        icon: "success"
                    });
                }
            })
            .catch(error => {
                if (error) {
                    Swal.fire({
                        title: "Oops",
                        text: "Can not Add Job",
                        icon: "error"
                    });
                }
            })
    }
    return (
        <div className='m-5 text-[#ddcc70]'>
            <Helmet>
                <title>Job Genie - Add Job</title>
            </Helmet>
            <h1 className='font-bold text-3xl text-center text-[#ddcc70] mb-10'>Add job here</h1>
            <form onSubmit={handlePostJob} className="border  border-[#ddcc70] md:w-2/3 mx-auto rounded-lg p-5">
                <div className='md:grid md:grid-cols-2 gap-5'>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput name="email" value={currentUser?.email} id="email1" type="email" placeholder={currentUser?.email} required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="jobTitle" value="Job Title" />
                        </div>
                        <TextInput name="jobTitle" id="jobTitle" type="text" required />
                    </div>
                    <div className="max-w-md">
                        <div className="mb-2 block">
                            <Label htmlFor="category" value="Select Category" />
                        </div>
                        <Select id="category" name='categories' required>
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

                        <TextInput name="date" id="deadline" type="date" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="minimumPrice" value="Minimum price" />
                        </div>
                        <TextInput name="minimumPrice" id="minimumPrice" type="number" placeholder='Minimum Price' required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="maximumPrice" value="Maximum Price" />
                        </div>
                        <TextInput name="maximumPrice" id="maximumPrice" type="number" placeholder='Maximum Price' required />
                    </div>
                    <div className='col-span-2'>
                        <div className="mb-2 block">
                            <Label htmlFor="description" value="Description" />
                        </div>
                        <Textarea name='description' id="description" placeholder="Description" required rows={3} />
                    </div>
                </div>

                <button className='bg-[#ddcc70] mt-4 text-black p-[10px] w-full rounded-lg' type='submit'>Add Job</button>
            </form>
        </div>
    );
};

export default AddJob;