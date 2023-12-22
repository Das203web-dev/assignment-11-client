import React, { useContext } from 'react';
import { AuthProvider } from '../../Provider/Provider';

const Home = () => {
    const name = useContext(AuthProvider)
    return (
        <div>
            <h1>This is home : {name}</h1>
        </div>
    );
};

export default Home;