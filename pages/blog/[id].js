import React from 'react'
import {MdAttachEmail} from "react-icons/md"
import {AiFillInstagram,AiFillGithub,AiFillLinkedin} from "react-icons/ai"
import {SiFiverr} from "react-icons/si"
import Detailscss from "../../styles/Details.module.css"
import Meta from "../../components/Meta"
import Image from 'next/image'
import Footer from '@/components/Footer'
import Layout from '@/components/layout/Layout'
import {data} from '../../data.js'




 const Details = ({userData}) => {
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
                   
        <h1 >{userData?.header}</h1>
        <p>{userData?.text}</p>
        <p> {userData?.listext1}</p>
        <Image  priority={true}   width={800} height={300} src={userData.img} alt="avatar" className={Detailscss.image} />
           
 
        <p>{userData?.text1}</p>
        <p>{userData?.text2}</p>
        <h5>{userData?.soru}</h5>
        <p>{userData?.text3}</p>



        <h5>{userData?.soru1}</h5>
        <p>{userData?.text4}</p>
        <p>{userData?.text4_5}</p>

        

        <p>{userData?.text5}</p>

 

        <p>{userData?.text6}</p>
        <h5>{userData?.soru2}</h5>

        <p>{userData?.text6_5}</p>



        <p>{userData?.text7}</p>
        <h2 className={Detailscss.h2}>{userData?.sonuc}</h2>
        <p>{userData?.text8}</p> 
        <p className={Detailscss.not}><strong>Fotoğraflar için üzgünüm yakın zamanda görseller ve live seçeneği ile blog sayfam zenginleşicektir.</strong></p>
        </div>

        </section>
        
        </div>

<Footer/>
</Layout>
    )
  }

  export default Details

 
export const getStaticPaths = async () => {
  const ids = data.map(({ id }) => id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const userData = data[context.params.id - 1]; 

  return {
    props: {
      data,
      userData,
    },
  };
};






