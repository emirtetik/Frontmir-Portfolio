import React from 'react'
import {ImArrowRight} from "react-icons/im"
import {MdAttachEmail} from "react-icons/md"
import {BsFillPhoneFill} from "react-icons/bs"
import {AiFillInstagram,AiFillGithub,AiFillLinkedin} from "react-icons/ai"
import {SiFiverr} from "react-icons/si"
import Footercss from "../styles/Footer.module.css"
import Link from 'next/link'
function Footer() {
  return (
    <footer className={Footercss.footer} >
    <div className={Footercss.game}>
    <h6>GAME OVER</h6> 

    </div>


    <div className={Footercss.footer_container} >
      <div className={Footercss.footer_top}>
        <div>

           <h5 className={Footercss.footer_title}>Menu</h5>

           <ul className={Footercss.footer_list}>

           <Link  className={Footercss.a} href="/"><li className={Footercss.footer_list_item}><ImArrowRight className={Footercss.arrow}/>Ben Kimim?</li></Link>
           <Link  className={Footercss.a} href="/art"><li className={Footercss.footer_list_item}><ImArrowRight className={Footercss.arrow}/> Art</li></Link>
           <Link className={Footercss.a}  href="/blog"><li className={Footercss.footer_list_item}><ImArrowRight className={Footercss.arrow}/> Blog</li></Link>
           <Link className={Footercss.a}  href="/links"><li className={Footercss.footer_list_item}><ImArrowRight className={Footercss.arrow}/> Links</li></Link>

           </ul>

        </div>

        <div>
           <h5 className={Footercss.footer_title}>Benim Hakkımda</h5>
           <ul className={Footercss.footer_list}>
            <p className={Footercss.p}>Genel ürünün başarısına yol açan Web Sitelerinin ve Web Uygulamalarının Ön tarafını oluşturan detay odaklı bir Web Geliştiricisi.</p>
           </ul>
           </div>
         <div>

        <h5 className={Footercss.footer_title}>Hizmetlerim</h5>
           <ul className={Footercss.footer_list}>
           <li className={Footercss.services_item}>Website</li>
           <li className={Footercss.services_item}>Hosting</li>
           <li className={Footercss.services_item}>Logo Tasarım</li>
           <li className={Footercss.services_item}>HTML Tasarım</li>
           </ul>
           </div>

           <div>
           <h5 className={Footercss.footer_title}>İletişim</h5>
           <ul className={Footercss.footer_list}>
          <a className={Footercss.a} href="mailto:dev@emirfy.com"> <li className={Footercss.contact_item}>dev@emirfy.com</li></a>
       
           </ul>
           </div>         
      </div>
       
       <hr className={Footercss.footer_divider} />

      <div className={Footercss.footer_bottom}>
        <span className={Footercss.copyright}> &copy; 2023 Emir Tetik tarafından sevgi ile yapıldı.</span>
        <ul className={Footercss.footer_list}>
          <li  className={Footercss.li}>
          <a className={Footercss.footer_icon}href="https://www.instagram.com/emirtetiik/"><AiFillInstagram className={Footercss.footer_icon_item}/></a>
          </li>
          <li  className={Footercss.li}>
          <a className={Footercss.footer_icon} href="https://github.com/emirtetik"><AiFillGithub className={Footercss.footer_icon_item}/></a>
          </li>
          <li  className={Footercss.li}>
          <a className={Footercss.footer_icon} href="https://www.linkedin.com/in/emir-tetik"><AiFillLinkedin className={Footercss.footer_icon_item}/></a>
          </li>
          <li className={Footercss.li}>
          <a className={Footercss.footer_icon} href="https://www.instagram.com/emirtetiik/"><AiFillInstagram className={Footercss.footer_icon_item} /></a>
          </li>
          <li  className={Footercss.li}>
          <a className={Footercss.footer_icon} href="https://www.fiverr.com/emirtetik?up_rollout=true"><SiFiverr className={Footercss.footer_icon_item} /></a>
          </li>
          <li  className={Footercss.li}>
          <a className={Footercss.footer_icon} href="mailto:dev@emirfy.com"><MdAttachEmail className={Footercss.footer_icon_item} /></a>
          </li>
          <li  className={Footercss.li}>
          <a className={Footercss.footer_icon} href="https://wa.me/905466096231"><BsFillPhoneFill className={Footercss.footer_icon_item}/></a>
          </li>
    
        </ul>
      </div>
     </div>
  
</footer>
  )
}

export default Footer