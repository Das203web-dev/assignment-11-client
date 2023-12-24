import { useContext, useState } from 'react';
import { AuthProvider } from '../../Provider/Provider';
import Banner from '../../components/Banner/Banner';
import CategoryTabs from './CategoryTabs/CategoryTabs';
import JobCard from './JobCard/JobCard';

const Home = () => {
    const { datas } = useContext(AuthProvider);
    const [jobs, setJobs] = useState([])
    const handleCategory = (category) => {
        // console.log("category is", category)
        fetch(`http://localhost:5000/category/${category}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }
    console.log(jobs)
    return (
        <div>
            <Banner></Banner>
            <div className='md:w-2/3 md:mx-auto my-20 m-2'>
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
            </div>
        </div>
    );
};

export default Home;