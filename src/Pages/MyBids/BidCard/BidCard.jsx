import axios from 'axios';
import { Checkbox, Table } from 'flowbite-react';
import { useState } from 'react';
// import React, { useState } from 'react';
import Swal from 'sweetalert2';

const BidCard = ({ bid }) => {
    const { title, email, deadline, status, _id } = bid;
    console.log("from mybid compo", status)
    const [recentStatus, setRecentStatus] = useState(status);
    // const [visible, setVisible] = useState('In Progress')
    const handleComplete = () => {
        // const oldStatus = result.status;
        const updatedStatus = { ...bid, status: "Complete" }
        axios.put(`http://localhost:5000/bidRequest/${_id}`, updatedStatus)
            .then(res => {
                if (res.data) {
                    setRecentStatus("Complete")
                    Swal.fire({
                        title: "Are You Sure?",
                        text: "The Task Is Complete",
                        icon: "success"
                    });
                }
            })
    }
    console.log(recentStatus)
    return (
        // <div>
        //     <Card href="#" className="w-full text-wrap hover:bg-transparent hover:shadow-xl">
        //         <h5 className="text-2xl capitalize font-bold tracking-tight text-gray-900 dark:text-white">
        //             {category}
        //         </h5>
        //         <h5 className="text-xl capitalize font-semibold tracking-tight text-gray-900 dark:text-white">
        //             {title}
        //         </h5>
        //         <p className="font-normal text-gray-700 dark:text-gray-400">
        //             Salary Range : {salaryRange}
        //         </p>
        //         <p className="font-normal text-gray-700 dark:text-gray-400">
        //             Your Bid Amount : {price}
        //         </p>
        //         <p className="font-normal text-gray-700 flex flex-wrap">
        //             Your Email : {email}
        //         </p>
        //         <p className="font-normal text-gray-700 dark:text-gray-400">
        //             Buyer Email : {buyerEmail}
        //         </p>
        //         <p className="font-normal text-gray-700 dark:text-gray-400">
        //             Your Joining Date : {date}
        //         </p>
        //         <p className="font-normal text-gray-700 dark:text-gray-400">
        //             Application Deadline : {deadline}
        //         </p>
        //         <p className="font-normal text-gray-700 dark:text-gray-400">
        //             Description : {description}
        //         </p>
        //     </Card>
        // </div>
        <div className="overflow-x-auto">
            <Table hoverable>
                <Table.Head>
                    <Table.HeadCell className="p-4">
                        <Checkbox />
                    </Table.HeadCell>
                    <Table.HeadCell>Job Title</Table.HeadCell>
                    <Table.HeadCell>Applicant Email</Table.HeadCell>
                    <Table.HeadCell>Application Deadline</Table.HeadCell>
                    <Table.HeadCell>Status</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                            {/* <Checkbox /> */}
                        </Table.Cell>
                        {/* <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {'Apple MacBook Pro 17"'}
                        </Table.Cell> */}
                        <Table.Cell>{title}</Table.Cell>
                        <Table.Cell>{email}</Table.Cell>
                        <Table.Cell>{deadline}</Table.Cell>
                        <Table.Cell className='flex flex-col gap-3'>
                            <a href="#" className="font-medium p-[10px] text-cyan-600 hover:underline dark:text-cyan-500">
                                <button>{status}</button>
                            </a>
                            {
                                recentStatus === "In Progress" && <button onClick={handleComplete} className='p-[10px] text-black rounded-lg bg-[#ddcc70]'>Complete</button>
                            }
                        </Table.Cell>
                    </Table.Row>

                </Table.Body>
            </Table>
        </div>
    );
};

export default BidCard;