import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Header = () => {
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
            <div className="flex gap-3 md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />

                    }

                >
                    <Dropdown.Header>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </Dropdown.Header>
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item>Earnings</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
                <button className="font-bold">Login</button>
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