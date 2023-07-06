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
     

     
        <section id={Detailscss.Details}>

     <div className={Detailscss.container_detail}>
                   
        <h1 >{userData?.header}</h1>
        <p>{userData?.text}</p>
        <p> {userData?.listext1}</p>
        <Image  priority={true}   width={800} height={300} src={userData?.img} alt="blog image" className={Detailscss.image} />
           
 
        <p>{userData?.text1}</p>
        {userData?.img1 && (
      <Image
        priority={true}
        width={800}
        height={300}
        src={userData?.img1}
        alt="blog image"
        className={Detailscss.image}
      />
    )}
        <p>{userData?.text2}</p>
        <h5>{userData?.soru}</h5>
        {userData?.img2 && (
        <Image  priority={true}   width={800} height={300} src={userData?.img2} alt="blog image" className={Detailscss.image} />

        )}

        <p>{userData?.text3}</p>



        <h5>{userData?.soru1}</h5>
         {userData?.img3 && (
        <Image  priority={true}   width={800} height={300} src={userData?.img3} alt="blog image" className={Detailscss.image} />

         )}

        <p>{userData?.text5}</p>
        <p>{userData?.text4_5}</p>

        

        <p>{userData?.text4}</p>
    {userData?.img4 && (
        <Image  priority={true}   width={800} height={300} src={userData?.img4} alt="blog image" className={Detailscss.image} />

    )}
 

        <p>{userData?.text6}</p>
        <h5>{userData?.soru2}</h5>

        <p>{userData?.text6_5}</p>
     {userData.img5 && (
        <Image  priority={true}   width={800} height={300} src={userData?.img5} alt="blog image" className={Detailscss.image} />

     )}


        <p>{userData?.text7}</p>
        <h2 className={Detailscss.h2}>{userData?.sonuc}</h2>
        <p>{userData?.text8}</p> 
        {userData.live && (
        <a href={userData?.live}> <button className={Detailscss.btn}>Live</button></a>

        )}
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






