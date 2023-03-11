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
import dynamic from "next/dynamic";


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
    <div className={Blogcss.sidebar}>
      <div className={Blogcss.sidebarItem}>
      <Image priority   width={150} height={150} src="/images/avatar3.png" alt="avatar" className={Blogcss.avatar_sidebar} />
        
        <span className={Blogcss.sidebarTitle}>Hakkımda</span>
       
        <p>
          Güzel ve basit şeyler kodluyorum ve yaptığım işi seviyorum.
        </p>
      </div>
    
      <div className={Blogcss.sidebarItem}>
        <span className={Blogcss.sidebarTitle}>İletişim</span>
        <div className={Blogcss.sidebarSocial}>
        <a className='icon' href="https://www.instagram.com/emirtetiik/"><AiFillInstagram className='icon-item' /></a>
        <a className='icon' href="https://github.com/emirtetik"><AiFillGithub className='icon-item' /></a>
        <a className='icon' href="https://www.linkedin.com/in/emir-tetik"><AiFillLinkedin className='icon-item'/></a>
        <a className='icon' href="mailto:emirtetik.41@hotmail.com"><MdAttachEmail className='icon-item' /></a>
        </div>
      </div>
    </div>
      <section id={Blogcss.blog}>
   
                                          {/* ----metin---- */}
        
        <div   className={Blogcss.text}>

          <h1 className={Blogcss.h1}>Blog </h1>
          <p><b>FRONTMİR </b>'in bloguna hoş geldiniz! Burada web teknolojileriyle ilgili makaleler ve ilginç trendler hakkında keyifle okuyabileceğiniz içerikler sunuyoruz. Başka bir deyişle, Frontend developer hakkında en son gelişmeleri takip etmenin ve bu konular
             hakkında daha fazla bilgi sahibi olmanın kolay yolunu sunuyoruz. Keyifle okuyun! ( Bu metin <b> ChatGPT </b> ile oluşturulmuştur. )</p>
          <h2>Tüm Blog ve çalışmalarım!</h2>
        <p>Belki aradığınız buradadır.</p>
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
        <div className={Blogcss.card_img}>

     <Image priority className={Blogcss.img} src={blog.img} alt="proje" width={700} height={150}/>
     </div>
      
  <h3 className={Blogcss.blog_title} >{blog.header}</h3>
  <span className={Blogcss.blog_time}>{blog.date}</span>


  <p className={Blogcss.blog_description}>{blog.title}</p>
  <div className={Blogcss.blog_option}>
    <span>
    {blog.make}
    </span>
     <Link type='button'
      href={`blog/${blog.id}`}
      // onClick={() => router.push(`blog/${blog.id}`)}
      className={Blogcss.btn}
     >
      blog
     </Link>
     <a href={blog.href}> <button className={Blogcss.btn}>githup</button></a>


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
export default dynamic (() => Promise.resolve(Blog), {ssr: false})

export const getStaticProps =async () => {
     const res = await  fetch("http://localhost:3000/api/blogs");
    
     const data = await res.json();

     return { 
      props:{
        data,
      },
     }
};

