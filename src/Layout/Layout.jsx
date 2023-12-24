import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import SiteFooter from '../components/SiteFooter/SiteFooter';
// import Footer from '../components/Footer/Footer';

const Layout = () => {
    return (
        <div>
            <Header></Header>
            <div className='mx-5'>
                <Outlet></Outlet>
            </div>
            <SiteFooter></SiteFooter>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Layout;