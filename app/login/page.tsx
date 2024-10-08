"use client";

import React, { useState } from 'react';

import "../../styles/reset.css";
import "../../styles/login.css";
import Image from 'next/image';
import logo_login from "../../assets/logo_login.png";
import google_btn from "../../assets/google_btn.png";
import Link from 'next/link';
//import supabase from '../(supabase)/supabase';
//import { GoogleLogin } from './google';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://naamqyzhbpehywqhabek.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hYW1xeXpoYnBlaHl3cWhhYmVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5MjE2NzgsImV4cCI6MjAzODQ5NzY3OH0.RrN-cmsEII8UXbUdRYCDbJqORJh5yr6MxMa1BdZ0Kx8";//process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Login() {
	const [loading, setLoading] = useState(false);
	const googleLogin = async () => {
		try {
			setLoading(true);
			const { error } = await supabase.auth.signInWithOAuth({
				provider: 'google',
			});
			if(error) console.log("error: ", error.message);
		
		} catch (error) {
			alert(error.message);
		} finally {
			setLoading(false);
		}
		
	}

  return(
    <React.Fragment>
      <div id="wrap">
			<section className="title_section">
			<ul className="title">
				<li >로그인</li>
			</ul>
			</section>

  		<section className="logo_login">
			<ul>
				<li><Image src={logo_login} alt="logo_login" /></li>
			</ul>
			<ul>
				<li>
					<span className="title">코인다방에 오신걸 환영합니다</span>
					<br />
					<span className="Wellcome">코인다방에 로그인 하시면 더 많은 서비스를<br />
					이용 하실 수 있습니다.</span>
				</li>
			</ul>
			</section>      

			<section className="idpw">
			<ul>
				<li><input className="text"  placeholder="이메일주소" /></li>
			</ul>
			<ul>
				<li><input  className="password"  placeholder="비밀번호" /></li>
			</ul>
			</section>
			<section className="autobox">
			<ul>
				<li><input type="checkbox" name="" value="" id="lgoin" />
					<label htmlFor="lgoin"><span className="autotext">자동 로그인</span></label> </li>
			</ul>
			</section>
			<section className="login" >
			<ul>
				<li><Link href="/login">로그인</Link></li>
			</ul>
      </section>

			<section className="google_login" >
			<ul>
				<li><a onClick={googleLogin} title={loading ?  '로그인중...' : '구글로 로그인'}><Image src={google_btn} alt="google login" /></a></li>
			</ul>
      </section>
      <section className="idpwjoin">
        <ul>
         <Link href="/">아이디찾기</Link> ㅣ<Link href="/"> 비밀번호찾기</Link> ㅣ <Link href="/login">회원가입</Link>
        </ul>        
      </section>
			</div>
    </React.Fragment>
  )
}