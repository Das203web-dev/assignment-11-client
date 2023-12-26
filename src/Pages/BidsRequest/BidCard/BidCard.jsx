import axios from 'axios';
import { Table } from 'flowbite-react';
import React from 'react';

const BidCard = ({ result }) => {
    console.log(result.status);
    const handleReject = () => {
        // const oldStatus = result.status;
        const updatedStatus = { ...result, status: "Canceled" }
        axios.put(`http://localhost:5000/bidRequest/${result._id}`, updatedStatus)
            .then(res => {
                console.log(res.data)
            })
    }
    const handleAccept = () => {
        // const oldStatus = result.status;
        const updatedStatus = { ...result, status: "In Progress" }
        axios.put(`http://localhost:5000/bidRequest/${result._id}`, updatedStatus)
            .then(res => {
                console.log(res.data)
            })
    }
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap capitalize font-medium text-gray-900 dark:text-white">
                {result.title}
            </Table.Cell>
            <Table.Cell>{result.email}</Table.Cell>
            <Table.Cell>{result.deadline}</Table.Cell>
            <Table.Cell>{result.price}</Table.Cell>
            <Table.Cell className='flex flex-col gap-2'>
                <button onClick={handleAccept} href="#" className="font-medium text-black bg-[#ddcc70] p-[10px] rounded-lg  hover:cursor-pointer dark:text-cyan-500">
                    Accept
                </button>
                <button onClick={handleReject} href="#" className="font-medium bg-red-800 text-white p-[10px] rounded-lg  hover:cursor-pointer dark:text-cyan-500">
                    Reject
                </button>
            </Table.Cell>

        </Table.Row>
    );
};

export default BidCard;