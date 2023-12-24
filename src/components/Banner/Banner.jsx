import { Carousel } from 'flowbite-react';

const Banner = () => {
    return (
        <div className="lg:h-[500px] h-80">
            <Carousel className='rounded-none'>
                <img className='h-full w-full' src="https://i.ibb.co/4NdSMbC/g-standard.jpg" alt="..." />
                <img className='h-full w-full' src="https://i.ibb.co/NVXDfcF/g-premium.jpg" alt="..." />
                <img className='h-full w-full' src="https://i.ibb.co/qMbPj8V/istockphoto-1437821111-170667a.webp" alt="..." />

            </Carousel>
        </div>
    );
};

export default Banner;