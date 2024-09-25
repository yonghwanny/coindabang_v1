"use client";
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "../../styles/reset.css";
import "../../styles/market.css";

import Image from 'next/image';
import icon_news from "../../assets/icon_news.svg";
import icon_market_white from "../../assets/icon_market_white.svg";
import icon_why from "../../assets/icon_why.svg";
import icon_what from "../../assets/icon_what.svg";
import icon_more from "../../assets/icon_more.svg";
import logo_icon from "../../assets/logo_icon.png";
import user_profile from "../../assets/user-profile.svg";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://naamqyzhbpehywqhabek.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hYW1xeXpoYnBlaHl3cWhhYmVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5MjE2NzgsImV4cCI6MjAzODQ5NzY3OH0.RrN-cmsEII8UXbUdRYCDbJqORJh5yr6MxMa1BdZ0Kx8";//process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Market () {
  /*
  const supabaseUrl = 'https://naamqyzhbpehywqhabek.supabase.co';
  const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hYW1xeXpoYnBlaHl3cWhhYmVrIiwicm9zZSI6ImFub24iLCJpYXQiOjE3MjI5MjE2NzgsImV4cCI6MjAzODQ5NzY3OH0.RrN-cmsEII8UXbUdRYCDbJqORJh5yr6MxMa1BdZ0Kx8';
  const coinStatusTableName = 'coin_status';
*/
  const [data, setData] = useState([]);
  //const [columns, setColumns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
      .from("coin_status")
      .select("market, korean_name, english_name, opening_price, high_price, low_price, trade_price, prev_closing_price")
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
      <li ><a href="#"><Image src={user_profile} alt="user-profile" /></a></li>
    </ul>
  </section>
  <section className="submenu">
    <ul>
      <li className="subtitle">Now</li>
      <li><a href="market_02.html">Coin Chart</a></li>
      <li><a href="market_03.html">Economy Chart</a></li>
    </ul>
  </section>
</div>
<div id="content">
  <section className="content">
    <ul>
      <li>
       본문
       <table>
        <thead>
          <tr>
            <th>market</th>
            <th>korean name</th>
            <th>english name</th>
            <th>opening price</th>
            <th>high price</th>
            <th>low price</th>
            <th>trade price</th>
            <th>prev closing price</th>
          </tr>
        </thead>
        <tbody>
        {
       data.map((rows, key) => (
        <tr key={key}>
          <td align='center'>{rows.market}</td>
          <td align='center'>{rows.korean_name}</td>
          <td align='center'>{rows.english_name}</td>
          <td align='center'>{rows.opening_price}</td>
          <td align='center'>{rows.high_price}</td>
          <td align='center'>{rows.low_price}</td>
          <td align='center'>{rows.trade_price}</td>
          <td align='center'>{rows.prev_closing_price}</td>
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
  <section  className="mainmenu" >
    <ul>
      <li><a href="news.html"><Image className="icon" src={icon_news} alt="icon" /><br/>
        NEWS</a></li>
      <li className="market"><Image className="icon" src={icon_market_white} alt="icon" /><br/>
        Market</li>
      <li><a href="why.html"><Image className="icon" src={icon_why} alt="icon" /><br/>
        Why?</a></li>
      <li><a href="what.html"><Image className="icon" src={icon_what} alt="icon" /><br/>
        What(AI)</a></li>
      <li><a href="more.html"><Image className="icon" src={icon_more} alt="icon" /><br/>
        더보기</a></li>
    </ul>
  </section>
</div>    
    </React.Fragment>
  )
}