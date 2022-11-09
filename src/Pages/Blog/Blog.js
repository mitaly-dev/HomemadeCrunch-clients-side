import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../Hook/useTitle';


const Blog = () => {
    const [status,setStatus] = useState(false)
    const [blogs,setBlogs] = useState([])
    useTitle('Blog')

    useEffect(()=>{
        fetch("https://homemade-crunch-server.vercel.app/blog")
        .then(res=>res.json())
        .then(data=>{
            setStatus(true)
            setBlogs(data.data)
        })
    },[])
    
    return (
        <>
        {
        status ?
            <section className="dark:bg-gray-800 dark:text-gray-100 my-6 md:my-16">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl mb-5">Question</h2>
                    <div className="space-y-4">
                        {
                            blogs.map(blog=>{
                            return <details key={blog._id} className="w-full border rounded-lg">
                                <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">{blog.question}</summary>
                                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">{blog.answer}</p>
                            </details>
                            })
                        }
                    </div>
                </div>
            </section> :
            <div className='min-h-[90vh] flex justify-center items-center'>
                 <div className="w-20 h-20 m-auto border-8 border-dashed rounded-full animate-spin border-orange-500"></div>
             </div>
        }
        </>
    );
};

export default Blog;
