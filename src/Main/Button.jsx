import React from 'react';

const Button = ({children}) => {
    return (
        <div className='text-center my-6'>
            <button className='bg-blue-600 text-white text-md hover:bg-blue-700'>{children}</button>
        </div>
    );
};

export default Button;