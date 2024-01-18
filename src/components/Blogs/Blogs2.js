import React from 'react'
import BlogItem from './BlogItem'

const blogs = [
    {
        _id:'001',
        title:'Anema Creative Onepage template',
        text:'Cumdolor sit amet consectetur, adipisicing elit. Cum vel officiis perferendis libero assumenda mollitia maxime veniam at, maiores non neque, iusto error earum minima quidem adipisci. Ullam eius provident amet nulla quam dicta dolorum harum perspiciatis odio repudiandae fugit recusandae dolor, expedita voluptatibus in ab consequatur ratione facere porro',
        url:'/',
        src:'img/preview/blog7.jpg',
        day:'01',
        month:'Jan',
        author:'Jhone',
        comments:'2'
    },
    {
        _id:'002',
        title:'Mosaic Design Graphic Design Project',
        text:'Cum em ipsum dolor sit amet consectetur, adipisicing elit. Cum vel officiis perferendis libero assumenda mollitia maxime veniam at, maiores non neque, iusto error earum minima quidem adipisci. Ullam eius provident amet nulla quam dicta dolorum harum perspiciatis odio repudiandae fugit recusandae dolor, expedita voluptatibus in ab consequatur ratione facere porro',
        url:'/',
        src:'img/preview/blog1.jpg',
        day:'13',
        month:'Jan',
        author:'Anna',
        comments:'12'
    },
    {
        _id:'003',
        title:'Children Biking and Biking sports',
        text:'Lorem  iusto error earum minima quidem adipisci. Ullam eius provident amet nulla quam dicta dolorum harum perspiciatis odio repudiandae fugit recusandae dolor, expedita voluptatibus in ab consequatur ratione facere porro',
        url:'/',
        src:'img/preview/blog2.jpg',
        day:'29',
        month:'Jan',
        author:'Admin',
        comments:'15'
    },
    {
        _id:'004',
        title:'Anema  features and specification',
        text:'Cum  amet consectetur, adipisicing elit. Cum vel officiis perferendis libero assumenda mollitia maxime veniam at, maiores non neque, iusto error earum minima quidem adipisci. Ullam eius provident amet nulla quam dicta dolorum harum perspiciatis odio repudiandae fugit recusandae dolor, expedita voluptatibus in ab consequatur ratione facere porro',
        url:'/',
        src:'img/preview/blog3.jpg',
        day:'03',
        month:'Feb',
        author:'Admin',
        comments:'33'
    },
    {
        _id:'005',
        title:'React Multipurpose One page template',
        text:'Lorem to error earum minima quidem adipisci. Ullam eius provident amet nulla quam dicta dolorum harum perspiciatis odio repudiandae fugit recusandae dolor, expedita voluptatibus in ab consequatur ratione facere porro',
        url:'/',
        src:'img/preview/blog4.jpg',
        day:'15',
        month:'Feb',
        author:'Jhone',
        comments:'22'
    },
    {
        _id:'006',
        title:'Smartphones Ui and design ratings',
        text:' Cum expedita voluptatibus in ab consequatur ratione facere porro Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum vel officiis perferendis libero assumenda mollitia maxime veniam at, maiores non neque, iusto error earum minima quidem adipisci. expedita voluptatibus in ab consequatur ratione facere porro Lorem ipsum dolor sit amet consectetur, adipisicing elit.  Ullam eius provident amet nulla quam dicta andae dolor, expedita voluptatibus in ab consequatur ratione facere porro',
        url:'/',
        src:'img/preview/blog5.jpg',
        day:'04',
        month:'Mar',
        author:'Tom',
        comments:'7'
    }
]

function Blogs2() {
    return (
        <>
        <section  id="blog" className="single-bg">
            <div className="section-block-title">
                <div className="bg-dark"></div>

                    <div className="container">
                        <div className="section-sub-title center">
                            <article className="section-title-body white">
                                <h1 className="head-title">Last <span>News</span> from Anema</h1>
                            </article>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            {
                                blogs.map((blog)=>(
                                    <div className="col-md-6 col-xl-4" key={blog._id}>
                                        <BlogItem 
                                        title={blog.title} 
                                        text={blog.text}
                                        url={blog.url}
                                        src={blog.src}
                                        day={blog.day}
                                        month={blog.month}
                                        author={blog.author}
                                        comments={blog.comments} />
                                    </div>
                                ))}
                            
                        </div>
                    </div>
                <div className="h50"></div>
            </div>       
        </section>
        </>
    )
}

export default Blogs2
