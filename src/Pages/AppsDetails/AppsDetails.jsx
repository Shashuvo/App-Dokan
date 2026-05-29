import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const AppsDetails = () => {
    const { id } = useParams();

    const apps = useLoaderData();
    console.log(apps, id);
    return (
        <div>
            <h1>Apps details page</h1>
        </div>
    );
};

export default AppsDetails;