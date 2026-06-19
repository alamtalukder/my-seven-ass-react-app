import React from 'react';
import { useLoaderData } from 'react-router';
const profileDetails = () => {
    const loadData = useLoaderData(); 
    console.log(loadData);
    return (
        <div>
            profile Details Page. 
        </div>
    );
};

export default profileDetails;