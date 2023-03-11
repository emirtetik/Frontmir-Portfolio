import Image from "next/image"
import Head from 'next/head'
import Layout from '@/components/layout/Layout'
import Meta from "@/components/Meta"
import Linkcss from "../styles/Links.module.css"
function Links() {



  return (
    <Layout>
         <Meta 
      title={"Links"}
      keywords={"LinksTree,Link"}
      description={"LinksTree uygulamasına benzer bir deneme"}
      />
  <div className={Linkcss.link}>
                   {/* <!-- Profile picture--> */}
       <Image
        loading="eager" priority={true}
        src="/images/avatar3.png" className={Linkcss.profile_img}  alt="profil" width={200} height={200} />            

     <div className={Linkcss.profile_name}>Frontend Developer</div>
     <p className={Linkcss.profile_text}>Web Teknolojileri Üreticisi</p>

                     {/* <!-- Links--> */}
      <div className={Linkcss.container}>               
        <div className={Linkcss.link_container} ><a className={Linkcss.links} href='https://www.instagram.com/emirtetiik/'>İnstagram</a> </div>
        <div className={Linkcss.link_container} ><a className={Linkcss.links} href="https://github.com/emirtetik">Githup</a></div>
        <div className={Linkcss.link_container} ><a className={Linkcss.links} href="https://www.linkedin.com/in/emir-tetik-53ba89248/">Linkedin</a></div>
        {/* <div className={Linkcss.link_container} ><a className={Linkcss.links} href="https://www.fiverr.com/emirtetik?up_rollout=true">Fiver</a></div> */}
        <div className={Linkcss.link_container} ><a className={Linkcss.links} href="mailto:emirtetik.41@hotmail.com">E-mail</a></div>
        <div className={Linkcss.link_container} ><a className={Linkcss.links} href="https://wa.me/905466096231">Watsapp</a></div>
        <div className={Linkcss.link_container} ><a className={Linkcss.links} href="https://www.voxnet.com.tr/">Hosting</a></div>
        <div className={Linkcss.linktree}>
          Front-mir
        </div>
        </div>

       
    </div>
    </Layout>
  )
}

export default Links