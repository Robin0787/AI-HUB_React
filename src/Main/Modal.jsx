import React from 'react';

const Modal = ({ details }) => {
    const { description, image_link, features, published_in, integrations, pricing, input_output_examples } = details;
    return (
        <div>
            <input type="checkbox" id="my-modal-5" className="modal-toggle bg-white" />
            <div className="modal ">
                <div className="modal-box bg-white w-11/12 max-w-5xl ">
                    <section className='flex flex-col-reverse md:flex-row gap-6 w-full'>
                        <article className="card card-compact bg-blue-50 bg-opacity-50 border md:w-1/2 p-4">
                            <h2 className="card-title text-lg">{description ? description : ''}</h2>
                            {/* Pricing items */}
                            <div className="flex gap-4 border-red-600 p-2">
                                {
                                    pricing && pricing.map((price, index) => {
                                        return <div key={index} className='p-3 bg-white text-center rounded-xl flex items-center justify-center text-xs md:text-sm'>
                                            <p>{price.price} <br /> {price.plan}</p>
                                        </div>
                                    })
                                }
                            </div>
                            {/* Features and Integrations */}
                            <div className='flex items-center gap-20 p-4'>
                                <div >
                                    <h1 className='text-lg font-bold'>Features</h1>
                                    <ul className='text-sm'>
                                        {
                                            Object.values(features || {}).map(((item, index) => {
                                                return <li key={index} className='py-1'>{item.feature_name}</li>
                                            }))
                                        }
                                    </ul>
                                </div>
                                {/* Integrations section */}
                                <div>
                                    <h1 className='text-lg font-bold'>Integrations</h1>
                                    <ul className='text-sm'>
                                        {
                                            integrations ? integrations.map((item, index) => <ol key={index}>{item}</ol>) : <ol>No data found.</ol>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </article>
                        <article className='md:w-1/2 border text-center'>
                            <img className='w-full' src={image_link && image_link[0]} alt="" />
                            <div className='p-8'>
                            {
                                input_output_examples ?
                                    <div>
                                        <h1 className='text-2xl font-bold'>{input_output_examples[0].input}</h1>
                                        <p className='text-xs py-1'>{input_output_examples[0].output}</p>
                                    </div> :
                                    <div>
                                        <h1 className='text-2xl font-bold'>Hi, how are you doing today?</h1>
                                        <p className='text-xs py-1'>I'm doing well, thank you for asking. How can I assist you today?</p>
                                    </div>
                            }
                            </div>
                        </article>
                    </section>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="text-sm p-2 rounded-lg cursor-pointer bg-blue-600 hover:bg-blue-700 border-0 text-white">Close</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;