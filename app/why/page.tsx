"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

import "../../styles/reset.css";
import "../../styles/why.css";

import icon_news from "../../assets/icon_news.svg";
import icon_market from "../../assets/icon_market.svg";
import icon_why_white from "../../assets/icon_why_white.svg";
import icon_what from "../../assets/icon_what.svg";
import icon_more from "../../assets/icon_more.svg";
import logo_icon from "../../assets/logo_icon.png";
import user_profile from "../../assets/user-profile.svg";

const supabaseUrl = "https://naamqyzhbpehywqhabek.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hYW1xeXpoYnBlaHl3cWhhYmVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5MjE2NzgsImV4cCI6MjAzODQ5NzY3OH0.RrN-cmsEII8UXbUdRYCDbJqORJh5yr6MxMa1BdZ0Kx8";//process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Why () {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
      .from("coin_status")
      .select("market, korean_name,english_name, opening_price, prev_closing_price, trade_price, signed_change_price, signed_change_rate")
      .like("market", "KRW-%")
      .limit(100)

      if (error) console.log("error", error)
      setData(data);
      //console.log(data);
      //console.log(error);
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div id="header"> 
  <section className="header_top">
    <ul>
      <li ><Image src={logo_icon} alt="logo" />코인다방</li>
      <li ></li>
      <li ><a href="#"><Image src={user_profile} alt="profile" /></a></li>
    </ul>
  </section>
  <section  className="submenu">
    <ul>
      <li className="subtitle">급등</li>
      <li><a href="why_02.html">급락</a></li>
    </ul>
  </section>
</div>
<div id="content">
  <section className="content">
    <ul>
      <li>기준시간:
      <table>
        <thead>
          <tr>
            <th align='center'>마켓</th>
            <th align='center'>코인명</th>
            <th align='center'>시작가</th>
            <th align='center'>전일가</th>
            <th align='center'>현재가</th>
            <th align='center'>등락가</th>
            <th align='center'>등락률</th>
            <th align='center'>와이?</th>
          </tr>
        </thead>
        <tbody>
        {
       data.map((rows, key) => (
        <tr key={key}>
          <td align='center'>{rows.market}</td>
          <td align='center'>{rows.korean_name}</td>
          <td align='center'>{rows.opening_price}</td>
          <td align='center'>{rows.prev_closing_price}</td>
          <td align='center'>{rows.trade_price}</td>
          <td align='center'>{rows.signed_change_price}</td>
          <td align='center'>{rows.signed_change_rate}</td>
          <td align='center'><Link href={`https://coinness.com/search?q=${encodeURIComponent(rows.english_name)}%20${encodeURIComponent(rows.korean_name)}&category=news`} target="_blank">why?</Link></td>
        </tr>
       ))
       }
        </tbody>
       </table>
      </li>
    </ul>
  </section>
</div>
<div id="bottom">
  <section  className="mainmenu"  >
    <ul>
      <li><Link href="/news"><Image className="icon" src={icon_news} alt="news" /><br/>
        NEWS</Link></li>
      <li><Link href="/market"><Image className="icon" src={icon_market} alt="market" /><br/>
        Market</Link></li>
      <li className="why"><Image className="icon" src={icon_why_white} alt="why" /><br/>
        Why?</li>
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