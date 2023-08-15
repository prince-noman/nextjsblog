import React from 'react';

const SingleBlog = ({searchParams}) => {

    const {title,content, img, date} = searchParams

    return (
        <div className="container mx-auto my-16 p-9">
            <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
                <div className="card w-100 glass">
                    <figure><img className='w-1/3' src={img} alt="car!"/></figure>
                    <span className='ms-8'>
                        <div className="badge badge-primary badge-outline">Posted On: {date}</div>
                    </span>
                    <div className="card-body">
                        <h2 className="card-title text-black">{title}</h2>
                        <p className='text-gray-600'>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;