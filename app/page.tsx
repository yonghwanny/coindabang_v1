import React from "react";
import "../styles/reset.css";
import "../styles/index.css";
import Image from 'next/image';
import logo_home from "../assets/logo_home.png";

export default function Home() {
  return (
    <React.Fragment>
      <div id="wrap">
      <section className="logo">
      <ul>
        <li><Image src={logo_home} alt="logo" /></li>
      </ul>
      </section>
    </div>
    <div id="bottom">

      <section className="index_login" >
			  <ul>
				  <li><a href="login.html">로그인</a></li>
			  </ul>
      </section>
      <section  className="see">
			<ul>
				<li>나중에로그인 하시겠어요?  <a href="news.html"> 둘러보기</a></li>
			</ul>
      </section>
	  </div>
    </React.Fragment>
  )
}