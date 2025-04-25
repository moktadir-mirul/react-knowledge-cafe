import React from 'react';

const ReadCol = ({item}) => {
    return (
        <div className='border border-blue-700 p-3 my-2 rounded-lg'>
            <h1>{item.title}</h1>
        </div>
    );
};

export default ReadCol;