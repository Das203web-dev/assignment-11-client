import { useLoaderData } from 'react-router-dom';
import { Button, Label, TextInput } from 'flowbite-react';
import { useContext, useState } from 'react';
import { AuthProvider } from '../../Provider/Provider';


const PlaceBid = () => {
    const bidJob = useLoaderData();
    const { currentUser } = useContext(AuthProvider);
    const [bidError, setbBidError] = useState(null);

    const handleBid = (e) => {
        e.preventDefault();
        const form = e.target;
        const price = form.price.value;
        const buyerEmail = form.buyerEmail.value;
        const sellerEmail = form.sellerEmail.value;
        const date = form.date.value;
        const deadline = form.deadline.value;
        if (date > deadline) {
            return setbBidError('You can not set date that is after deadline')
        }
        const bidInfo = { price, buyerEmail, sellerEmail, date, deadline };
        console.log(bidInfo)
    }

    console.log(bidJob)
    return (
        <div className='my-20'>
            <h1 className='text-[#ddcc70] text-center font-bold text-3xl'>Bid Here</h1>
            <form onSubmit={handleBid} className="flex w-full flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="price" value="Price" />
                    </div>
                    <TextInput id="price" name='price' type="number" placeholder="Your Bidding Price" required shadow />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Buyer email" />
                    </div>
                    <TextInput name='buyerEmail' value={bidJob?.jobDetails?.email} id="email1" type="email" placeholder="Buyer Email" required shadow />
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
                    <TextInput id="deadline" name='ddeadline' type="date" value={bidJob?.jobDetails?.date} required shadow />
                </div>
                {bidError}
                <Button className='bg-[#ddcc70] text-black' type="submit">Bid On This Project</Button>
            </form>

        </div>
    );
};

export default PlaceBid;