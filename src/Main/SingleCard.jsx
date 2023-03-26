import React from 'react';

const SingleCard = ({details, setItemId}) => {
    const {id,name,description,image,features,published_in} = details;
    return (
            <div className="card w-96 glass shadow-xl">
                <figure><img src={image} alt="car!" /></figure>
                <div className="card-body px-0">
                    <h3 className="card-title text-md">Features</h3>
                    {
                        features.map((feature,index) => {
                            return <p key={index} className='text-sm'>{index + 1} {feature}</p>
                        })
                    }
                    <p className="text-sm">{description}</p>
                    <hr className='my-2 border-blue-500 h-2'/>
                    <div className="card-actions flex justify-between items-center">
                        <div>
                        <h3 className="card-title text-md">{name}</h3>
                        <p className="text-sm opacity-75">{published_in}</p>
                        </div>
                        <label htmlFor="my-modal-5" onClick={() => {setItemId(id)}}>
                        <i className="fa-solid fa-arrow-right-long cursor-pointer" />
                        </label>
                    </div>
                </div>
            </div>
    );
};

export default SingleCard;