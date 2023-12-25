import { useContext, useState } from 'react';
import { AuthProvider } from '../../Provider/Provider';
import Banner from '../../components/Banner/Banner';
import CategoryTabs from './CategoryTabs/CategoryTabs';
import JobCard from './JobCard/JobCard';
import { Accordion, Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';

const Home = () => {
    const { datas } = useContext(AuthProvider);
    const [jobs, setJobs] = useState([])
    const handleCategory = (category) => {
        // console.log("category is", category)
        fetch(`http://localhost:5000/category/${category}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }
    // console.log(jobs)
    return (
        <div>
            <Banner></Banner>
            <div className='md:w-2/3 md:mx-auto my-20 m-5'>
                <h1 className='font-bold text-3xl text-center mb-10'>Browse Job By Category</h1>
                <div className='grid grid-cols-3 justify-between items-center'>
                    {
                        datas.map(data => <CategoryTabs handleCategory={handleCategory} key={data.id} data={data}></CategoryTabs>)
                    }

                </div>
                <div className='grid md:grid-cols-3 grid-cols-1 md:gap-5'>
                    {
                        jobs.map(job => <JobCard key={job._id} job={job}></JobCard>)
                    }
                </div>
                <div className='flex md:flex-row flex-col justify-between items-center my-20 gap-5'>
                    <img className='md:w-1/2 w-full' src="https://i.ibb.co/NVXDfcF/g-premium.jpg" alt="" />
                    <div className='md:w-1/2 w-full'>
                        <Accordion>
                            <Accordion.Panel>
                                <Accordion.Title>What is Job Genie?</Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons,
                                        dropdowns, modals, navbars, and more.
                                    </p>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Check out this guide to learn how to&nbsp;
                                        <a
                                            href="https://flowbite.com/docs/getting-started/introduction/"
                                            className="text-cyan-600 hover:underline dark:text-cyan-500"
                                        >
                                            get started&nbsp;
                                        </a>
                                        and start developing websites even faster with components on top of Tailwind CSS.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title>Is there any other site like job genie?</Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        Flowbite is first conceptualized and designed using the Figma software so everything you see in the library
                                        has a design equivalent in our Figma file.
                                    </p>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Check out the
                                        <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                            Figma design system
                                        </a>
                                        based on the utility classes from Tailwind CSS and components from Flowbite.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                            <Accordion.Panel>
                                <Accordion.Title>What are the differences between other website &amp; Job Genie?</Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        The main difference is that the core components from Flowbite are open source under the MIT license, whereas
                                        Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone
                                        components, whereas Tailwind UI offers sections of pages.
                                    </p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">
                                        However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                                        technical reason stopping you from using the best of two worlds.
                                    </p>
                                    <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                                    <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
                                        <li>
                                            <a href="https://flowbite.com/pro/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                                Flowbite Pro
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="https://tailwindui.com/"
                                                rel="nofollow"
                                                className="text-cyan-600 hover:underline dark:text-cyan-500"
                                            >
                                                Tailwind UI
                                            </a>
                                        </li>
                                    </ul>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </div>
                </div>
                <div>
                    <form className="flex max-w-md flex-col gap-4 mx-auto">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email1" value="Your email" />
                            </div>
                            <TextInput id="email1" type="email" placeholder="Your Email" required />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password1" value="Your password" />
                            </div>
                            <TextInput id="password1" type="password" required />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="remember" />
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <button className='bg-[#ddcc70] p-[10px] rounded-lg' type="submit">Contact Us</button>
                    </form>
                </div>

            </div>

        </div>
    );
};

export default Home;