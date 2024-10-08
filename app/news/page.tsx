import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import "../../styles/reset.css";
import "../../styles/news.css";

import icon_news_white from "../../assets/icon_news_white.svg";
import icon_market from "../../assets/icon_market.svg";
import icon_why from "../../assets/icon_why.svg";
import icon_what from "../../assets/icon_what.svg";
import icon_more from "../../assets/icon_more.svg";
import logo_icon from "../../assets/logo_icon.png";
import user_profile from "../../assets/user-profile.svg";

//import CoinDeskRss from '../../components/CoindeskNews';
import YoutubeSummary from '../../components/YoutubeSummary';

export default function News () {

  return  (
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
      <li className="subtitle">코인뉴스요약</li>
      <li><a href="news_02.html">코인유튜브요약</a></li>
    </ul>
  </section>
</div>
<div id="content">
  <section className="content">
    <ul>
      <li>
      본문
      <YoutubeSummary />
      </li>
    </ul>
  </section>
</div>
<div id="bottom">
  <section  className="mainmenu" >
    <ul>
      <li className="news"><Image className="icon" src={icon_news_white} alt='news' /><br/>
        NEWS</li>
      <li><Link href="/market"><Image className="icon" src={icon_market} alt='market' /><br/>
        Market</Link></li>
      <li><Link href="/why"><Image className="icon" src={icon_why} alt='why' /><br/>
        Why?</Link></li>
      <li><Link href="/what"><Image className="icon" src={icon_what} alt='what' /><br/>
        What(AI)</Link></li>
      <li><Link href="/more"><Image className="icon" src={icon_more} alt='more' /><br/>
        더보기</Link></li>
    </ul>
  </section>
</div>
    </React.Fragment>
  )
}