"use client";

import React from 'react';
import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://naamqyzhbpehywqhabek.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5hYW1xeXpoYnBlaHl3cWhhYmVrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI5MjE2NzgsImV4cCI6MjAzODQ5NzY3OH0.RrN-cmsEII8UXbUdRYCDbJqORJh5yr6MxMa1BdZ0Kx8";//process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function YoutubeSummary () {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
      .from("coin_youtube_summary")
      .select("youtube_name, upload_datetime, sub_title, summary_text, youtube_link")
      .order('created_at', { ascending: false })
      .limit(10)

      if (error) console.log("error", error)
      setData(data);
      //console.log(data);
      //console.log(error);
    }
    fetchData();
  }, []);

  return (
    <React.Fragment>
      <div>코인유튜버 요약 {data.length}</div>
      {
       data.map((rows, key) => (
        <ul key={key}>
          <li>{rows.youtube_name}</li>
          <li>{rows.upload_datetime}</li>
          <li>{rows.sub_title}</li>
          <li><pre>{rows.summary_text}</pre></li>
          <li>{rows.youtube_link}</li>
        </ul>
       ))
       }
    </React.Fragment>
  )
}