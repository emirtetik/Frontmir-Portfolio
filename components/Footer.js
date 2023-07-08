import React,{useState} from 'react'
import {ImArrowRight} from "react-icons/im"
import {MdAttachEmail} from "react-icons/md"
import {BsFillPhoneFill} from "react-icons/bs"
import {AiFillInstagram,AiFillGithub,AiFillLinkedin} from "react-icons/ai"
import {SiFiverr} from "react-icons/si"
import Footercss from "../styles/Footer.module.css"
import Link from 'next/link'
function Footer() {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")

   function handleSubmit(e) {
    e.preventDefault();
    
    // Form doğrulamalarını yapın
    if (name.trim() === '') {
      console.log('Lütfen bir isim girin.');
      return;
    }
  
    if (email.trim() === '') {
      console.log('Lütfen bir e-posta adresi girin.');
      return;
    }
  
  
    setName('');
    setEmail('');
  }

  return (
    <footer className={Footercss.footer} >
    <div className={Footercss.game}>
    <h6>GAME OVER</h6> 

    </div>


    <div className={Footercss.footer_container} >
      <div className={Footercss.footer_top}>
        <div className={Footercss.menu}>

           <h5 className={Footercss.footer_title}>Menu</h5>

           <ul className={Footercss.footer_list}>

           <Link  className={Footercss.a} href="/"><li className={Footercss.footer_list_item}><ImArrowRight className={Footercss.arrow}/>Ben Kimim?</li></Link>
           <Link  className={Footercss.a} href="/game"><li className={Footercss.footer_list_item}><ImArrowRight className={Footercss.arrow}/> Art</li></Link>
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

        <div className={Footercss.form}>
        <h5 className={Footercss.footer_title}>İletişim</h5>

            <form action="https://getform.io/f/4f373ce7-d22a-4ec2-8951-38f976aafa7d" method="POST" onSubmit={handleSubmit}>
              <div className={Footercss.input_container}>
              <input type="text" name="name" placeholder="Name"  value={name} onChange={(e) => setName(e.target.value)} />
              <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <textarea name="message" placeholder="Message"></textarea>
              <button className='btn' type="submit">Send</button>
            </form>
          </div>


                   
      </div>
       
       <hr className={Footercss.footer_divider} />

      <div className={Footercss.footer_bottom}>
      <span className={Footercss.copyright}> &copy; 2023 Emir Tetik tarafından sevgi ile yapıldı.</span>

        <ul className={Footercss.footer_list}>
          <li  className={Footercss.li}>
          <a className={Footercss.footer_icon} target='_blank' href="https://www.instagram.com/emirtetiik/"><AiFillInstagram className={Footercss.footer_icon_item}/></a>
          </li>
          <li  className={Footercss.li}>
          <a className={Footercss.footer_icon} target='_blank' href="https://github.com/emirtetik"><AiFillGithub className={Footercss.footer_icon_item}/></a>
          </li>
          <li  className={Footercss.li}>
          <a className={Footercss.footer_icon} target='_blank' href="https://www.linkedin.com/in/emir-tetik"><AiFillLinkedin className={Footercss.footer_icon_item}/></a>
          </li>

          <li  className={Footercss.li}>
          <a className={Footercss.footer_icon} target='_blank' href="mailto:dev@emirfy.com"><MdAttachEmail className={Footercss.footer_icon_item} /></a>
          </li>
        
    
        </ul>

      </div>

     </div>
  
</footer>
  )
}

export default Footer