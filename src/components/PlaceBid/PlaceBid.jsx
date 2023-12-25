import { useLoaderData } from 'react-router-dom';
import { Button, Label, TextInput, Textarea } from 'flowbite-react';
import { useContext, useState } from 'react';
import { AuthProvider } from '../../Provider/Provider';
import axios from 'axios';


const PlaceBid = () => {
    const bidJob = useLoaderData();
    console.log(bidJob);
    const { jobDetails } = bidJob;
    const { category, jobTitle, maximumPrice, minimumPrice, description } = jobDetails;
    const salary = `${'$ ' + (minimumPrice)} to ${'$ ' + (maximumPrice)}`
    const { currentUser } = useContext(AuthProvider);
    const [bidError, setbBidError] = useState(null);

    const handleBid = (e) => {
        e.preventDefault();
        const form = e.target;
        const category = form.category.value;
        const title = form.jobTitle.value;
        const salaryRange = form.salary.value;
        const price = form.price.value;
        const buyerEmail = form.buyerEmail.value;
        const email = form.sellerEmail.value;
        const date = form.date.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        if (date > deadline) {
            return setbBidError('You can not set date that is after deadline')
        }
        const bidInfo = { category, title, salaryRange, price, email, date, deadline, buyerEmail, description };
        console.log(bidInfo);
        axios.post('http://localhost:5000/myBids', bidInfo, { withCredentials: true })
            .then(res => {
                console.log(res.data)
            })
    }

    return (
        <div className='my-20 md:w-2/3 md:mx-auto mx-5'>
            <h1 className='text-[#ddcc70] text-center font-bold text-3xl'>Bid Here</h1>
            <form onSubmit={handleBid} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="category" value="Category" />
                    </div>
                    <TextInput className='block' id="category" value={category} name='category' shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="jobTitle" value="Job Title" />
                    </div>
                    <TextInput className='block capitalize' id="jobTitle" value={jobTitle} name='jobTitle' shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="salary" value="Salary" />
                    </div>
                    <TextInput className='block capitalize' id="salary" value={salary} name='salary' shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="price" value="Price" />
                    </div>
                    <TextInput className='block' id="price" name='price' type="number" placeholder="Your Bidding Price" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Buyer email" />
                    </div>
                    <TextInput name='buyerEmail' value={bidJob?.jobDetails?.email} id="email1" type="email" placeholder="Buyer Email" shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email2" value="Your email" />
                    </div>
                    <TextInput id="email2" name='sellerEmail' value={currentUser?.email} type="email" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="date" value="Your Joining Date" />
                    </div>
                    <TextInput id="date" name='date' type="date" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="deadline" value="Deadline" />
                    </div>
                    <TextInput id="deadline" name='ddeadline' type="date" value={bidJob?.jobDetails?.date} shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="description" value="Description" />
                    </div>
                    <Textarea id="description" name='description' type="text" value={description} shadow />
                </div>
                {bidError}
                <Button className='bg-[#ddcc70] text-black' type="submit">Bid On This Project</Button>
            </form>

        </div>
    );
};

export default PlaceBid;