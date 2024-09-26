import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import "../../styles/reset.css";
import "../../styles/what.css";

import icon_news from "../../assets/icon_news.svg";
import icon_market from "../../assets/icon_market.svg";
import icon_why from "../../assets/icon_why.svg";
import icon_what_white from "../../assets/icon_what_white.svg";
import icon_more from "../../assets/icon_more.svg";
import logo_icon from "../../assets/logo_icon.png";
import user_profile from "../../assets/user-profile.svg";

export default function WhatAI () {
  return (
    <React.Fragment>
      <div id="header">
  <section className="header_top">
    <ul>
      <li ><Image src={logo_icon} alt='logo' />코인다방</li>
      <li ></li>
      <li ><a href="#"><Image src={user_profile} alt='user-profile' /></a></li>
    </ul>
  </section>
  <section className="submenu">
    <ul>
      <li className="subtitle">New</li>
      <li><a href="what_02.html">Trend</a></li>
      <li><a href="what_03.html">Recommend</a></li>
    </ul>
  </section>
</div>
<div id="content">
  <section className="content">
    <ul>
     
      <li>
       본문
      </li>
    </ul>
  </section>
</div>
<div id="bottom">
  <section  className="mainmenu" >
    <ul>
      <li><Link href="/news"><Image className="icon" src={icon_news} alt='news' /><br/>
        NEWS</Link></li>
      <li><Link href="/market"><Image className="icon" src={icon_market} alt='market' /><br/>
        Market</Link></li>
      <li><Link href="/why"><Image className="icon" src={icon_why} alt='why' /><br/>
        Why?</Link></li>
      <li className="what"><Image className="icon" src={icon_what_white} alt='what' /><br/>
        What(AI)</li>
      <li><Link href="/more"><Image className="icon" src={icon_more} alt='more' /><br/>
        더보기</Link></li>
    </ul>
  </section>
</div>
    </React.Fragment>
  )
}