/* eslint-disable react/no-unescaped-entities */
import Footer from '@/components/Footer'
import Meta from '@/components/Meta'
import Layout from '@/components/layout/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import {AiFillInstagram,AiFillGithub,AiFillLinkedin} from "react-icons/ai"
import {MdAttachEmail} from "react-icons/md"
import Blogcss from "../../styles/Blog.module.css"
import {data} from "../.././data.js"

const  Blog = ({data}) => {


   const router = useRouter();




   const [query,setQuery] = useState("");

      

  return (
<Layout>
<Meta 
      title={"Blog"}
      description={"FRONTMİR 'in bloguna hoş geldiniz! Burada web teknolojileriyle ilgili makaleler ve Frontend developer hakkında en son gelişmeleri paylaşıyorum. "}
      keywords={"Blog,Nodejs,React,Porfolio,Web,Responsive"}
      />
    <div className={Blogcss.blog}>
   
      <section id={Blogcss.blog}> 
   
                                          {/* ----metin---- */}
        
        <div   className={Blogcss.text}>

          <h1 className={Blogcss.h1}>Blog </h1>
          <p><b>FRONTMİR </b>'in bloguna hoş geldiniz! Burada web teknolojileriyle ilgili makaleler ve ilginç trendler hakkında keyifle okuyabileceğiniz içerikler sunuyoruz. Başka bir deyişle, Frontend developer hakkında en son gelişmeleri takip etmenin ve bu konular
             hakkında daha fazla bilgi sahibi olmanın kolay yolunu sunuyoruz. Keyifle okuyun! </p>
          <h2>Tüm Blog ve Projelerim!</h2>
       
        </div>

        <div className={Blogcss.search}>
              <input type="search" placeholder='Search..' className={Blogcss.input}
              onChange={(e) => setQuery(e.target.value)}
               />
           
            <br /><br /><br />
               
          </div>
  

    {data.filter(blog => blog.header.toLocaleLowerCase().includes(query)).map((blog)=>(
       <div 
        className={Blogcss.container_card}
        key={blog.id}
       
        >

   <div  className={Blogcss.card}>

     <Image priority={true} className={Blogcss.img} src={blog.img} alt="proje" width={700} height={150} placeholder="blur"
        blurDataURL={blog.img}/>
      
  <h3 className={Blogcss.blog_title} >{blog.header}</h3>
  <span className={Blogcss.blog_time}>{blog.date}</span>


  <p className={Blogcss.blog_description}>{blog.title}</p>
  <div className={Blogcss.blog_option}>
    <span>
    {blog.make}
    </span>
     <Link 
      href={`blog/${blog.id}`}
      // onClick={() => router.push(`blog/${blog.id}`)}
      className={Blogcss.btn}
     >
      blog
     </Link>
     <a href={blog.href}> <button className={Blogcss.btn}>githup</button></a>
     
     {blog.live && (
       <a href={blog.live}> <button className={Blogcss.btn}>Live</button></a>
     ) }



</div>

  </div>

  </div>
))}

      </section>

     <Footer/> 

    </div>

    </Layout>
  )
}
export default Blog;

export const getStaticProps = async (context) => {
  // const res = await fetch("http://localhost:3000/api/blogs");
  // const data = await res.json();
  return{
    props:{
      data,
    }
  }
}

