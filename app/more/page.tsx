import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import "../../styles/reset.css";
import "../../styles/more.css";

import icon_news from "../../assets/icon_news.svg";
import icon_market from "../../assets/icon_market.svg";
import icon_why from "../../assets/icon_why.svg";
import icon_what from "../../assets/icon_what.svg";
import icon_more_white from "../../assets/icon_more_white.svg";
import logo_icon from "../../assets/logo_icon.png";
import user_profile from "../../assets/user-profile.svg";

import member_icon from "../../assets/member_icon.png";
import arow_right from "../../assets/arow_right.svg";
import notice_icon from "../../assets/notice_icon.svg";

export default function More () {
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
</div>
<div id="content">
  <div>
    <section className="id_loginout">
      <ul >
        <li><Image src={member_icon} alt='member' /></li>
        <li><a className="id_btn" href="#"><span className="__cf_email__" data-cfemail="e596918a95978081a5818a8b828c8bcb8b8091">[email&#160;protected]</span> / 로그인해주세요</a></li>
        <li><a className="loginout_btn" href="index.html">로그아웃</a> / <a className="loginout_btn" href="index.html">로그인</a></li>
      </ul>
      <ul >
        <li></li>
      </ul>
    </section>
    <section  className="notice">
      <ul className="notice_title">
        <li> 공지사항 </li>
        <li><a href="notice.html"><Image src={arow_right} alt='arow' /></a> </li>
      </ul>
      <ul className="notice_list">
        <li><Image src={notice_icon} alt='notice' /><a href="notice_detail.html">너보스(CKB) 신규 거래지원 안내 (KRW, BTC, USDT 마켓) (거래지원 개시 시점 연기 안내)</a></li>
        <li><Image src={notice_icon} alt='notice' /><a href="notice_detail.html">이더리움클래식 원화 마켓(ETC/KRW) 오픈 안내</a></li>
        <li><Image src={notice_icon} alt='notice' /><a href="notice_detail.html">디지털 자산8월 4주차 GAS, VTHO 지급 안내</a> </li>
        <li><Image src={notice_icon} alt='notice' /><a href="notice_detail.html">NFT홀더 참여형 NFT 아트 프로젝트 'THE KING'S RENAISSANCE' 시즌 2 아카데미 박스 LV1 NFT 획득 기회</a> </li>
        <li><Image src={notice_icon} alt='notice' /><a href="notice_detail.html">입출금인젝티브(INJ) 네트워크 전환 완료에 따른 입출금 재개 안내</a> </li>
        <li><Image src={notice_icon} alt='notice' /><a href="notice_detail.html">안내임직원 사칭 및 거래지원 접수 내역을 이용한 가상자산 투자사기 주의 안내</a> </li>
        <li><Image src={notice_icon} alt='notice' /><a href="notice_detail.html">알고리즘 스테이블 코인 연관 디지털 자산 투자 </a> </li>
      </ul>
    </section>
    <section className="more_menu">
      <ul>
        <li><a href="terms.html">약관 및 정책</a></li>
        <li><a href="privacy.html" className="bold">개인정보처리방침</a></li>
        <li><a href="youthpolicy.html">청소년 보호정책</a></li>
      </ul>
    </section>
  </div>
</div>
<div id="bottom">
  <section className="mainmenu">
    <ul >
      <li><Link href="/news"><Image className="icon" src={icon_news} alt='news' /><br/>
        NEWS</Link></li>
      <li><Link href="/market"><Image className="icon" src={icon_market} alt='market' /><br/>
        Market</Link></li>
      <li><Link href="/why"><Image className="icon" src={icon_why} alt='why' /><br/>
        Why?</Link></li>
      <li><Link href="/what"><Image className="icon" src={icon_what} alt='what' /><br/>
        What(AI)</Link></li>
      <li className="more"><Image className="icon" src={icon_more_white} alt='more' /><br/>
        더보기</li>
    </ul>
  </section>
</div>
    </React.Fragment>
  )
}