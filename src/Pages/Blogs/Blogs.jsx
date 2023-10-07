import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blogs')
    return (
        <div className='custom-container my-16 grid gap-8'>
            <div className="flex gap-5 shadow-xl rounded-lg hover:scale-105 duration-500 ease-out">
                <div className='w-1/2'>
                    <img src='https://thumbs.dreamstime.com/b/woman-jewelry-22175936.jpg' alt="" className='rounded-tl-xl rounded-bl-xl h-full' />
                </div>
                <div className='py-3'>
                    <h1 className="text-2xl text-slate-700 font-semibold tracking-widest">
                        How can I maintain my jewelries?
                    </h1>
                    <p className='my-2 text-slate-500 font-medium tracking-wide'>
                        To keep your piece looking like new, please follow these care tips:
                            <br />
                        Avoid wearing it shower, pool, spa or beach
                        Remove it when sleeping or exercising
                        Avoid contact with, body oils, perfumes and other harsh chemicals
                        Use chemical jewelry cleaners, metal polishing cloths or jewelry polish
                        Polish jewelry with a soft, microfiber cloth
                        Store your jewelry cool dark dry place when not being worn
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;