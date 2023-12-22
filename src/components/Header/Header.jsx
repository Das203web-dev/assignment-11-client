import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthProvider } from "../../Provider/Provider";

const Header = () => {
    const { currentUser, logout } = useContext(AuthProvider);
    console.log(currentUser)
    const menuLinks = [
        { name: "Home", id: 1, path: "/" },
        { name: "Add Job", id: 2, path: "/addJob" },
        { name: "My posted jobs", id: 3, path: "/myPostedJob" },
        { name: "My Bids", id: 4, path: "/myBids" },
        { name: "Bid Request", id: 5, path: "/bidRequest" },
    ]
    return (
        <Navbar fluid rounded className="text-[#b1a45a] text-base shadow-lg">
            <Navbar.Toggle />

            <Navbar.Brand href="/">

                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Job</span>
                <img src="https://i.ibb.co/6bcvd9B/attachment-117444264-removebg-preview.png" className=" w-auto h-16 sm:h-12" alt="Job genie Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Genie</span>

            </Navbar.Brand>
            <div className="flex gap-3 items-center md:order-2">
                {currentUser ? <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img={currentUser.photoURL} rounded />

                    }

                >
                    <Dropdown.Header>
                        <span className="block text-sm">{currentUser.displayName}</span>
                        <span className="block truncate text-sm font-medium">{currentUser.email}</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
                </Dropdown> : ""}
                {currentUser ? "" : <Link to={'/login'} className="font-bold">Login</Link>}
            </div>
            <Navbar.Collapse className=" text-center ">
                {
                    menuLinks.map(menu => (
                        <NavLink key={menu.id} to={menu.path}
                            className={({ isActive, isPending }) =>
                                isActive
                                    ? "active"
                                    : isPending
                                        ? "pending"
                                        : ""
                            }
                            style={({ isActive }) => ({
                                color: isActive ? "#ddcc70" : "black",
                                fontWeight: isActive ? "700" : "600",
                                fontSize: "16px"

                            })}
                        >
                            {menu.name}
                        </NavLink>
                    ))
                }
            </Navbar.Collapse>
        </Navbar >
    );
};

export default Header;