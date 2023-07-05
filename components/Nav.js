import React, {useEffect} from 'react'
import Link from 'next/link';
import { useRef } from "react";
import { useRouter } from 'next/router';
import {ImArrowRight} from "react-icons/im"
import { Power3, TweenMax} from "gsap"

import { FaBars, FaTimes } from "react-icons/fa";

function Nav() {
//   useEffect (() => {
//     TweenMax.from(".nav" , .8, {opacity:0, x:100,stagger:.50, ease: Power3.easeInOut})

// },[])
const router = useRouter();
  const navRef = useRef();

  const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
    
	};
  const closeMenu = () => showNavbar(false)

  return (
    <header>
  <div className="logo" data-text="logo">
    <Link className="logo_link" href="/"> Front<b className="mir">-Mir</b></Link>
    
    </div>

    <nav ref={navRef}>

    <ul className="menu_list">

       <li className="nav">
        <Link prefetch={false} className={router.pathname == "/" ? "active" : ""} onClick={closeMenu}   href="/"><ImArrowRight className="arrow"/>
       Ben Kimim?
      </Link>
      </li>

       <li className="nav"><Link prefetch={false} className={router.pathname == "/game" ? "active" : ""} onClick={closeMenu}   href="/game"><ImArrowRight className="arrow"/>
           Game
       </Link></li>

       <li className="nav"><Link prefetch={false} className={router.pathname == "/blog" ? "active" : ""} onClick={closeMenu}  href="/blog"><ImArrowRight className="arrow"/>
           Blog
       </Link></li>

       <li className="nav"><Link prefetch={false} className={router.pathname == "/links" ? "active" : ""} onClick={closeMenu}   href="/links"><ImArrowRight className="arrow"/>
           Links
       </Link></li>

     </ul>
      <button
        className="nav-btn nav-close-btn"
        onClick={showNavbar}>
        <FaTimes />
      </button>
    </nav>
    <button className="nav-btn" onClick={showNavbar}>
      <FaBars />
    </button>
  </header>

  )
}
export default Nav
