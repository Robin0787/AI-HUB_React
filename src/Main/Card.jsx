import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import SingleCard from './SingleCard';

const Card = ({data, showAll}) => {
    const [details, setDetails] = useState(null);
    const [itemsId, setItemId] = useState(null);

    useEffect(() => {
        const loadDetails = async () => {
            const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${itemsId}`);
            const data = await res.json();
            setDetails(data.data);
        }
        loadDetails();
    },[itemsId]);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center '>
            {
                data.slice(0, showAll ? 12 : 6).map((singleData) => <SingleCard key={singleData.id} details={singleData} setItemId={setItemId}/>)
            }
            {details && <Modal details={details}/>}
        </div>
    );
};

export default Card;
