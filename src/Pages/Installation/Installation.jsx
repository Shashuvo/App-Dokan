import React from 'react';
import { useLoaderData, useOutletContext } from 'react-router';

const Installation = () => {
    const { installedIds } = useOutletContext();
    const app = useLoaderData();
    console.log(installedIds, app);
    return (
        <div>
            <h1>this is installation page</h1>
        </div>
    );
};

export default Installation;