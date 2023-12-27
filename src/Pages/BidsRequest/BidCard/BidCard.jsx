import axios from 'axios';
import { Checkbox, Table } from 'flowbite-react';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
// import './BidCard.css'


const BidCard = ({ result }) => {
    // console.log(result.status);
    const [currentStatus, setCurrentStatus] = useState(result.status);
    let progress = 0;
    if (currentStatus === "In Progress") {
        progress = 50;
    } else if (currentStatus === "Complete") {
        progress = 100;
    }
    const handleReject = () => {
        const updatedStatus = { ...result, status: "Canceled" }
        axios.put(`https://job-genie-u1ji.onrender.com/bidRequest/${result._id}`, updatedStatus)
            .then(res => {
                if (res.data) {
                    setCurrentStatus("Canceled");
                    Swal.fire({
                        title: "Rejected!",
                        text: "Confirm Reject.",
                        icon: "question"
                    });
                }
            })

        // const oldStatus = result.status;

    }
    const handleAccept = () => {
        // const oldStatus = result.status;
        const updatedStatus = { ...result, status: "In Progress" }
        axios.put(`https://job-genie-u1ji.onrender.com/bidRequest/${result._id}`, updatedStatus)
            .then(res => {
                if (res.data) {
                    setCurrentStatus("In Progress")
                    Swal.fire({
                        title: "Offer Accepted",
                        text: "Confirm",
                        icon: "success"
                    });
                }
            })
    }
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
                <Checkbox />
            </Table.Cell>
            <Table.Cell className=" max-w-fit capitalize font-medium text-gray-900 dark:text-white">
                {result.title}
            </Table.Cell>
            <Table.Cell>{result.email}</Table.Cell>
            <Table.Cell>{result.deadline}</Table.Cell>
            <Table.Cell>{result.price}</Table.Cell>
            <Table.Cell>
                {
                    currentStatus === "Pending" ? (<div className='flex flex-col gap-2'><button onClick={handleAccept} href="#" className="font-medium text-black bg-[#ddcc70] p-[10px] rounded-lg  hover:cursor-pointer dark:text-cyan-500">
                        Accept
                    </button>
                        <button onClick={handleReject} href="#" className="font-medium bg-red-800 text-white p-[10px] rounded-lg  hover:cursor-pointer dark:text-cyan-500">
                            Reject
                        </button></div>) : currentStatus === "In Progress" ? (
                            <div>
                                <ProgressBar
                                    percent={progress}
                                    unfilledBackground
                                    filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                                >
                                    <Step transition="scale">
                                        {({ accomplished }) => (
                                            // <img
                                            //     style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                                            //     width="30"
                                            //     src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/9d/Pichu.png/revision/latest?cb=20170407222851"
                                            // />
                                            <p className='whitespace-normal' style={{ filter: `grayscale(${accomplished ? 0 : 10}%)` }}>{currentStatus}</p>

                                        )}
                                    </Step>
                                    <Step transition="scale">
                                        {({ accomplished }) => (
                                            // <img
                                            //     style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}
                                            //     width="30"
                                            //     src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
                                            // />
                                            <p style={{ filter: `grayscale(${accomplished ? 0 : 100}%)` }}>{"Step-2"}</p>
                                        )}
                                    </Step>
                                </ProgressBar>
                            </div>) : ""
                }

            </Table.Cell>

        </Table.Row>
    );
};

export default BidCard;