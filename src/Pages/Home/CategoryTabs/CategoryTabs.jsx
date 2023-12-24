import { Tabs } from 'flowbite-react';
// import 'react-tabs/style/react-tabs.css';

const CategoryTabs = ({ data, handleCategory }) => {
    // const [activeTab, setActiveTab] = useState(0);
    // console.log(jobs)
    return (
        <div>
            <Tabs onClick={() => handleCategory(data.category)} className='md:whitespace-nowrap'>
                <Tabs.Item title={data.category}>

                </Tabs.Item>

            </Tabs>
        </div>
    );
};

export default CategoryTabs;