import { Card } from 'flowbite-react';
import React from 'react';

const BidCard = ({ bid }) => {
    const { category, title, salaryRange, price, email, date, deadline, buyerEmail, description } = bid;
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
                    <Table.HeadCell>Product name</Table.HeadCell>
                    <Table.HeadCell>Color</Table.HeadCell>
                    <Table.HeadCell>Category</Table.HeadCell>
                    <Table.HeadCell>Price</Table.HeadCell>
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            {'Apple MacBook Pro 17"'}
                        </Table.Cell>
                        <Table.Cell>Sliver</Table.Cell>
                        <Table.Cell>Laptop</Table.Cell>
                        <Table.Cell>$2999</Table.Cell>
                        <Table.Cell>
                            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                Edit
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                            Microsoft Surface Pro
                        </Table.Cell>
                        <Table.Cell>White</Table.Cell>
                        <Table.Cell>Laptop PC</Table.Cell>
                        <Table.Cell>$1999</Table.Cell>
                        <Table.Cell>
                            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                Edit
                            </a>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <Table.Cell className="p-4">
                            <Checkbox />
                        </Table.Cell>
                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">Magic Mouse 2</Table.Cell>
                        <Table.Cell>Black</Table.Cell>
                        <Table.Cell>Accessories</Table.Cell>
                        <Table.Cell>$99</Table.Cell>
                        <Table.Cell>
                            <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                Edit
                            </a>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </div>
    );
};

export default BidCard;