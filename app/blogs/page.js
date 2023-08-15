import React from 'react';
import blogs from '../data/blogData.json'
import Link from "next/link";

const Page = async () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl text-center text-black font-bold my-4'>All Blogs</h1>
            <div className="grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    blogs.map((item,index)=>{
                        return (
                            <Link href={{
                                pathname: "/blogs/"+item['index'],
                                query:{
                                    title: item['title'],
                                    content: item['content'],
                                    img: item['img'],
                                    date: item['date']
                                }
                            }} className="card w-100 glass">
                                <figure><img className='w-1/2' src={item['img']} alt={item['title']}/></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-black">{item['title']}</h2>
                                    <p className='text-gray-600'>{item['content']}</p>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Page;