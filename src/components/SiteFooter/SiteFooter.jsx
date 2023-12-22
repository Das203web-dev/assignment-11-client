import { Footer } from 'flowbite-react';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const SiteFooter = () => {
    return (
        <Footer>
            <div className="w-full bg-black text-[#ddcc70] py-4">
                <div className='flex items-center justify-center'>
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Job</span>
                    <img src="https://i.ibb.co/6bcvd9B/attachment-117444264-removebg-preview.png" className=" w-auto h-20 sm:h-12" alt="Job genie Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Genie</span>
                </div>
                <div className="grid w-full justify-center  sm:flex sm:justify-between md:flex md:grid-cols-1">

                    <div className="grid grid-cols-1 gap-8 mx-auto  sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title className='text-[#ddcc70] text-center font-bold' title="about" />
                            <Footer.LinkGroup className='text-[#ddcc70] text-center' col>
                                <Link to={"#"}>Job Genie</Link>
                                <Link to={"#"}>Tailwind CSS</Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-[#ddcc70] text-center font-bold' title="Follow us" />
                            <Footer.LinkGroup className='text-[#ddcc70] text-center' col>
                                <Link to={"#"}>Github</Link>
                                <Link to={"#"}>Discord</Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title className='text-[#ddcc70] text-center font-bold' title="Legal" />
                            <Footer.LinkGroup className='text-[#ddcc70] text-center' col>
                                <Link to={"#"}>Privacy Policy</Link>
                                <Link to={"#"}>Terms &amp; Conditions</Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full flex sm:items-center flex-col-reverse gap-5">
                    <Footer.Copyright className='text-[#ddcc70] text-center text-xl' href="#" by="Job Genie" year={2023} />
                    <div className="mt-4 flex text-center space-x-6 sm:mt-0 justify-center text-2xl">
                        <Link target='_blank' to={"https://www.facebook.com/DeveloperShuvojit/"} className='p-2 bg-[#ddcc70] hover:text-[#ddcc70] hover:bg-transparent rounded-full'>
                            <div className='p-1 bg-white rounded-full'>
                                <FaFacebook></FaFacebook>
                            </div>
                        </Link>
                        <Link to={"#"} className='p-2 bg-[#ddcc70] hover:text-[#ddcc70] hover:bg-transparent rounded-full'>
                            <div className='p-1 bg-white rounded-full'>
                                <FaInstagram></FaInstagram>
                            </div>
                        </Link>
                        <Link to={"#"} className='p-2 bg-[#ddcc70] hover:text-[#ddcc70] hover:bg-transparent rounded-full'>
                            <div className='p-1 bg-white rounded-full'>
                                <FaTwitter></FaTwitter>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </Footer>
    );
};

export default SiteFooter;