//import React from 'react';
import supabase from '../(supabase)/supabase';

export const GoogleLogin = async () => {

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      queryParams: {
        access_type: 'offline',
        prompt: 'consent',
      },
    },
  });

  if(data) alert("logined...");
  if(error) console.log("error: ", error);

}