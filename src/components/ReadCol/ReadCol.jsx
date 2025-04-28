import React from 'react';

const ReadCol = ({item}) => {
    return (
        <div className='border border-blue-700 p-3 my-2 rounded-lg'>
            <h1>{item.title}</h1>
            <p><span className='text-amber-700 font-extrabold'>{item.reading_time}</span> Minutes required to read</p>
        </div>
    );
};

export default ReadCol;