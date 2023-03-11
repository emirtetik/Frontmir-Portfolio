/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React,{useState,useEffect} from 'react'
import { Power3, TweenMax} from "gsap"
import AOS from "aos"
import "aos/dist/aos.css"
import {AiFillInstagram,AiFillGithub,AiFillLinkedin} from "react-icons/ai"
import {SiFiverr} from "react-icons/si"
import {MdAttachEmail} from "react-icons/md"
import Layout from '@/components/layout/Layout'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Meta from '@/components/Meta'
import ayvaz1 from "../public/images/ayvaz1.png"
import kuofor1 from "../public/images/kuofor1.png"
import nodejs from "../public/images/nodejs.png"
import responsive from "../public/images/responsive.png"

export default function Home() {
 
  useEffect(() => {
    AOS.init({duration:1000});
  },[]);


  const [run, setRun] = useState (false);

 const click = () =>{
     setRun(!run)
    if(run) TweenMax.from(".titles" , 1, {opacity:0,stagger:.8,x:90 })
      
    
 }
 

  return (
    <Layout>
      <Meta 
      title={"Frontmir"}
      keywords={"Html,Css,JavaScript,React,Nextjs,Frontend developer,developer,portfolio,Web "}
      description={"Emir Tetik Frontend Developer Portfolio, web teknolojileri kullanıp üreten bir yazılımcı.I am a Front End Web Developer creating Front End of Websites and Web Applications."}
      
      />
      
    <div className='home'>
      
    {/* -----hero------ */}
<section className="banner">
<div className="welcome">
<h1>Hoşgeldiniz!</h1>


</div>
<div className="welcome-slider">
<p className="tag">
<span className="change">
<span className="changing">En son teknolojileri ve</span>
<span className="changing">en iyi uygulamaları kullanan</span>
<span className="changing">bir Frontend Developer!</span>
</span>
</p>

</div>


<div className="hero-box">
<div className='img-div'>
  <Image priority width={300} height={350} className="images" src="https://res.cloudinary.com/practicaldev/image/fetch/s--B9m6Xh9W--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/wuhzze0mss8frjkzttrt.gif" alt="gif"/>
</div>
<div className="hero-text">
<div className="hero-content"> 
<h4 className="name">Emir Tetik</h4>
<h4 className="front">Frontend Developer</h4>
<div className="icon-box">
<a className='icon' href="https://www.instagram.com/emirtetiik/"><AiFillInstagram className='icon-item' /></a>
<a className='icon' href="https://github.com/emirtetik"><AiFillGithub className='icon-item' /></a>
<a className='icon' href="https://www.linkedin.com/in/emir-tetik"><AiFillLinkedin className='icon-item'/></a>
<a className='icon' href="https://www.fiverr.com/emirtetik?up_rollout=true"><SiFiverr className='icon-item' /></a>
<a className='icon' href="mailto:emirtetik.41@hotmail.com"><MdAttachEmail className='icon-item' /></a>
</div>
</div>

</div>    
<div className="container-play">
<h4 className='play'>
<span className="titles">HTML</span>
<span className="titles">CSS </span>
<span className="titles">JAVASCRIPT</span>
</h4>
<div onClick={click}  className="restart">Tekrardan Başlat</div>
</div>
</div>
<div className="scrolldown">
<span></span>
<span></span>
<span></span>

</div>
</section>

<div className="triangle-container"><div className="section-triangle"></div></div>   




                                            {/* -----about---- */}

                                            
<section className="about">
<div  className='title-container2  ct-1 '>
<div data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine" className='blob'>
  <Image priority src="/images/graph-3.png" alt='buble' className='blob1' width={400} height={400}   />
</div> 
<span data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine" className='data-text1'>benim</span>
<span  className='data-text1 '>hakkımda</span>
</div>


<div className="resume-container">

<div className='avatar'>
<Image priority src="/images/avatar2.png" alt="avatar" width={600} height={600} className="avatar-img"/>
<div className='avatar-bg'></div>

</div>

<div  className='resume-text'>

<h1 className='hi'>Merhaba ben Emir!</h1>

<p className='tx'>Yaklaşık 1 sene önce hosting şirketi olan bir tanıdığımın yanında çalışmaya ve eğitim almaya başladım.
Bu işe başladığım zaman sitelerin ön yüzlerinin nasıl yapıldığı ve front end developerın ne olduğuna dair en ufak bir fikrim yoktu. 
Daha sonra yaptığım işin detaylarına girdikçe benim asıl keyif alabileceğim mesleğin front end developer olmak olduğunun farkına 
vardım. Bilgisayar başında bir şeyler araştırmak bu araştırmaları
deneyimlemek ve bu deneyimlerle yeni bir şey üretmeyi seviyorum. Bir yandan para kazanırken bir yandan da sevdiğim işi yapabilecek 
olduğum için front end developer olmaya karar verdim. Bu mesleği yapabilmek için gerekli olan donanımı bir çok ücretsiz kaynaktan
araştırma yaparak ve eğitim alarak kazanmaya çalışıyorum. Bu araştırmalara ve eğitimlere günümün yaklaşık 10 saatini ayırarak 
kendimi geliştiriyorum. Bu yolda çok ilerlediğimi düşünüyorum ve ilerlemeye devam edeceğim. 
</p>

<p className='tx'>Kocaeli Üniversitesi İngilizce-İktisat bölümü mezunuyum. 25 yaşındayım ve 
kod yazmaktan çok keyif alıyorum. Öğrendiğim çoğu bilgiyi diğer front end developerların paylaşımları 
ve yardımcı olmaları sayesinde öğrendim. Bu yüzden ben de bu yolda öğrendiklerimi ve yaptığım işleri 
diğer front end developer arkadaşlarım için blog sayfamda paylaşıyorum. Web geliştirme alanında sorularınız
için sosyal medya hesaplarımdan bana ulaşabilirsiniz. </p>

</div>
<div className='.resume-cv'>

<a href="emir tetik.pdf"
download={"emir tetik.pdf"}
> <button className='resume'>
<span className='resume-span'>
CV İndir!
</span>
</button>
</a>
</div>
</div>

</section>



<div className="triangle-container2"><div className="section-triangle2"></div></div>   



                                        {/* --------skilss-------- */}
                                        

<section className="skills">

<div className='title-container2'>
<div  data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine" className='blob'>
  <Image priority src="/images/graph.png" alt='buble' className='blob1' width={400} height={400} />

</div> 
<span  data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine" className='data-text1'>benim</span>
<span className='data-text1 data-1'>yeteneklerim</span>
</div>

<div className="skill-container">

<div className='design'>

<div  className="capabilities">

<h3> TASARIM</h3>
<p> 
Basit ve kullanıcıya keyif veren sitelere
değer veriyorum.  
İyi görünen duyarlı web siteleri yapıyorum.
</p>
<p className="list-title ">Kullandığım Diller:</p>
<p>UI-WEB</p>
<p className="list-title ">Dev Araçlarım:</p>
<ul>
<li>Figma</li>
<li>Sketch</li>
<li>Font Awesome</li>
</ul>

</div>


</div>

<div className='developer'>


<div   className="capabilities container-2">
<h3> FRONTEND DEVELOPER </h3>
<p> 
Kod yazmayı, hiç yapılmamış veya yapılanın üstüne ekleyerek
geliştirmeyi  seviyorum.
</p>

<p className="list-title ">Kullandığım Diller:</p>
<p>HTML-CSS-JAVASCRİPT</p>

<p className="list-title ">Dev Araçlarım:</p>
<ul>
<li>Visual Studio Code</li>
<li>Github</li>
<li>Git</li>
<li>Nextjs</li>
<li>React</li>
<li>Bootstrap</li>
<li>Gsap</li>
<li>Tailwind</li>
<li>jQuery</li>

</ul>
</div>

</div>

</div>

</section>




    {/* ---------blog-------- */}
<section className="blog">
<div className='title-container2 '>
<div data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine" className='blob'>
  <Image   priority  src="/images/graph-1.png" alt='buble' className='blob1' width={400} height={400} />

</div> 
<span data-aos="fade-right"
data-aos-offset="300"
data-aos-easing="ease-in-sine" className='data-text1'>blog ve
</span>
<span  className='data-text1 data-1'>projeler
</span>
</div>



<div className="section-triangle3">

<div data-aos="zoom-in" className="card">
<div className="card-img-holder">
<Image priority   src={ayvaz1} alt='image' width={800} height={300}/>

</div>
<h3 className="blog-title">"AyvazCamping Work"</h3>
<span className="blog-time">9 Ekim 2022'de yüklendi.</span>
<p className="description">
Hafta sonunu iyi geçirebiliceğin Camping Web Teması. 
</p>
<div className="options">
<span>
Html-Css-Js
</span>
<a href="https://github.com/emirtetik/ayvazz.index"> <button className="btn">Githup</button></a>

<a href="/Blog"> <button className="btn">Blog</button></a>
</div>
</div>


<div className="card" data-aos="zoom-in">
<div className="card-img-holder">
<Image priority   src={kuofor1} alt='image' width={800} height={300}/>

</div>
<h3 className="blog-title">"React Kuofor-app Work"</h3>
<span className="blog-time">14 Aralık 2022'de yüklendi.</span>
<p className="description">
Dağınık görüntünden kurtulmak için gidebiliceğin Kuofor Web Teması.
</p>
<div className="options">
<span>
React
</span>
<a href="https://github.com/emirtetik/react-one-page-hair-styles-website">  <button className="btn">Githup</button></a>
<Link href="/blog"> <button className="btn">Blog</button></Link>

</div>
</div>

<div className="card" data-aos="zoom-in">
<div className="card-img-holder">
<Image priority src={nodejs} alt='proje' width={800} height={300}   />

</div>
<h3 className="blog-title">"Node.js Nedir" </h3>
<span className="blog-time">1 Şubat 2023'de yüklendi.</span>
<p className="description">
Node.js açık kaynaklıdır bu da demek oluyor ki JavaScript kodunu tarayıcı ya da benzeri bir şeye ihtiyaç duymadan kolaylıkla bilgisayarınızda çalıştırabilirsiniz. 
</p>
<div className="options">
<span>
Blog'u oku..
</span>
<Link href="/blog"> <button className="btn">Blog</button></Link>

</div>
</div>

<div className="card" data-aos="zoom-in">

<div className="card-img-holder">
<Image priority src={responsive} alt='proje' width={800} height={300} />

</div>
<h3 className="blog-title">Responsive Tasarım Nedir?</h3>
<span className="blog-time">3 Şubat 2023'de yüklendi.</span>
<p className="description">
Responsive, uyumlu web tasarım anlamına gelir. Son birkaç yılda ismini sıkça duyduğumuz bu web tasarım, ilk olarak 2010 tarihinde ortaya çıktı.
</p>
<div className="options">
<span>
Blog'u oku..
</span>
<Link href="/blog"> <button className="btn">Blog</button></Link>

</div>
</div>


</div>
</section>





 {/* ---------footer--------- */}
<section><Footer/></section>

</div>

</Layout>
  )
}
