import React,{useEffect, useState} from "react";
import { BlogItem } from "../../components/blogItem";
import { blogService } from "joegreen-service-library";

import './style.css' 
import tipDots from '../../assets/tipDots.png'
import { BlogType } from "joegreen-service-library/dist/services/blogService";
export default function Blog (): React.JSX.Element {
    let [blogs,setBlogs] = useState<BlogType[]>([])
    useEffect(()=>{
        blogService.getAllBlogPosts().then(res=>{
            console.log({blogs: res})
            setBlogs(res)
        }).catch(err=>{
            console.error(err)
        })
    },[])
    
    return (
        <main id="blog">
            <div className="mainSpacing">
                <div className="py-4" />
                <div className='tipContent row no-space align-items-center'>
                    <div className='w-max-content no-space'><p className='font-p font-family-bruno delicious tipTitle'>STAY UPDATED</p></div>
                    <div className='w-max-content no-space'><img className='tipDots' src={tipDots} /></div>
                </div>
                <div className='sectionHeadlineContainer features d-sm-none text-main font-subtitle-big font-medium'>TRENDING UPDATES ON <span className='delicious'>JOEGREENCAFE BLOG</span></div>
                <div className='sectionHeadlineContainer features d-none d-sm-block text-main font-heading-5 font-medium'>TRENDING UPDATES ON <span className='delicious'>JOEGREENCAFE BLOG</span></div>
                <div className='sectionAfterTextContainer features'><p className='font-p text-main'>Stay informed with the freshest news, exciting events, and culinary insights from JoeGreen. Discover delicious recipes, expert tips, and the latest trends in the food world. Join us on our journey of Cullinary delights and innovation!</p></div>
                {blogs.length == 0 ? (
                    <div>
                        <p className="font-p font-regular">No Blog Post Present At the moment.</p>
                    </div>
                ) : (
                <div className="row no-space">
                    {blogs.map((x,index)=>{
                        return (
                        <div className="no-space col-12 col-md-6 col-lg-4" key={index}>
                            <BlogItem link={x.link} image={x.image} description={x.highlightParagraph} created={x.created} title={x.title} />
                        </div>
                        )
                    })}
                </div>                    
                )}

                <div className="py-4" />
            </div>
        </main>
    )
}


