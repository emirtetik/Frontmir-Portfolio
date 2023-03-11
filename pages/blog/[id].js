import React, { useEffect,useState } from 'react'
import { useRouter } from 'next/router'
import {MdAttachEmail} from "react-icons/md"
import {AiFillInstagram,AiFillGithub,AiFillLinkedin} from "react-icons/ai"
import {SiFiverr} from "react-icons/si"
import Detailscss from "../../styles/Details.module.css"
import Meta from "../../components/Meta"
import Image from 'next/image'
import Footer from '@/components/Footer'
import Layout from '@/components/layout/Layout'
 const Details = ({detailData}) => {
   
  const router = useRouter();
  const [blogger, setBlogger]=useState();
  const {id} = router.query;

  useEffect(() => {
    const getData = async () =>{
      try{
        const res = await fetch("http://localhost:3000/api/blogs");
        const data = await res.json();
        setBlogger(detailData && detailData.find((u) => u.id == id));
      }

      catch(err){
     console.log(err);
      }
  };
  getData();
},[id,detailData]);
 



    return (
        <Layout>
             <Meta 
      title={"Blog"}
      />
      <div className={Detailscss.Container}>
      <div className={Detailscss.sidebar}>
      <div className={Detailscss.sidebarItem}>
        <Image priority src="/images/avatar3.png" className={Detailscss.avatar_sidebar} alt="avatar"  width={150} height={150}   />
        <span className={Detailscss.sidebarTitle}>Hakkımda</span>
       
        <p>
          Güzel ve basit şeyler kodluyorum ve yaptığım işi seviyorum.
        </p>
      </div>
    
      <div className={Detailscss.sidebarItem}>
        <span className={Detailscss.sidebarTitle}>İletişim</span>
        <div className={Detailscss.sidebarSocial}>
        <a className='icon' href="https://www.instagram.com/emirtetiik/"><AiFillInstagram className='icon-item' /></a>
        <a className='icon' href="https://github.com/emirtetik"><AiFillGithub className='icon-item' /></a>
        <a className='icon' href="https://www.linkedin.com/in/emir-tetik"><AiFillLinkedin className='icon-item'/></a>
        <a className='icon' href="mailto:emirtetik.41@hotmail.com"><MdAttachEmail className='icon-item' /></a>
        </div>
      </div>
    </div>


        <section id={Detailscss.Details}>

     <div className={Detailscss.container_detail}>
                   
        <h1 >{blogger?.header}</h1>
        <p>{blogger?.text}</p>
        <p> {blogger?.listext1}</p>

        <Image   priority className={Detailscss.image} src={blogger?.img} alt="İmage" width={800} height={300} />
        <p>{blogger?.text1}</p>
        {/* <Image priority  className={Detailscss.image} src={blogger?.img1} alt="İmage" width={800} height={300}/> */}
        <p>{blogger?.text2}</p>
        <h5>{blogger?.soru}</h5>
        <p>{blogger?.text3}</p>


        {/* <Image  priority className={Detailscss.image} src={blogger?.img2} alt="İmage" width={800} height={300}/> */}

        <h5>{blogger?.soru1}</h5>
        <p>{blogger?.text4}</p>
        <p>{blogger?.text4_5}</p>

        
        {/* <Image  priority className={Detailscss.image} src={blogger?.img3} alt="İmage" width={800} height={300}/> */}

        <p>{blogger?.text5}</p>

 
        {/* <Image priority className={Detailscss.image} src={blogger?.img4} alt="İmage" width={800} height={300}/> */}

        <p>{blogger?.text6}</p>
        <h5>{blogger?.soru2}</h5>

        <p>{blogger?.text6_5}</p>

        {/* <Image priority className={Detailscss.image} src={blogger?.img5} alt="İmage" width={800} height={300}/> */}


        <p>{blogger?.text7}</p>
        <h2 className={Detailscss.h2}>{blogger?.sonuc}</h2>
        <p>{blogger?.text8}</p>

        </div>

        </section>
        
        </div>

<Footer/>
</Layout>
    )
  }

  export default Details


export const getStaticProps = async () => {
  const  res = await fetch(`http://localhost:3000/api/blogs`);
  const detailData = await res.json();

  return{
    props:{
      detailData
    }
  }

}


export const getStaticPaths = async () => {
  const  res = await fetch(`http://localhost:3000/api/blogs`);
  const data = await res.json();
  const ids = data.map((blogger) => blogger.id);
  const paths =ids.map((id)=> ({params:{id: id.toString()}}))
  return{
    paths,
    fallback: false,
  }

}


