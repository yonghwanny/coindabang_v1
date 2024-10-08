"use client";

import Head from 'next/head';
import Link from 'next/link';
import groq from 'groq';
import { useState, useEffect } from 'react';

const rssUrl = 'https://www.coindesk.com/arc/outboundfeeds/rss/';
const groqApiUrl = 'https://api.groq.io/v1/translate';
const targetLanguage = 'ko';

const Feed = () => {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchFeed = async () => {
      const response = await fetch(rssUrl);
      const rssData = await response.text();
      const feedItems = parseRss(rssData);
      const translatedFeed = await translateFeed(feedItems);
      setFeed(translatedFeed);
    };
    fetchFeed();
  }, []);

  const parseRss = (rssData) => {
    const parser = new DOMParser();
    const rssDoc = parser.parseFromString(rssData, 'application/xml');
    const feedItems = [];
    const items = rssDoc.querySelectorAll('item');
    items.forEach((item) => {
      const title = item.querySelector('title').textContent;
      const link = item.querySelector('link').textContent;
      const description = item.querySelector('description').textContent;
      feedItems.push({ title, link, description });
    });
    return feedItems;
  };

  const translateFeed = async (feedItems) => {
    const translatedFeed = [];
    for (const item of feedItems) {
      const translationResponse = await fetch(`${groqApiUrl}?text=${item.title}&targetLanguage=${targetLanguage}`);
      const translation = await translationResponse.json();
      const translatedTitle = translation.text;
      const translationResponse2 = await fetch(`${groqApiUrl}?text=${item.description}&targetLanguage=${targetLanguage}`);
      const translation2 = await translationResponse2.json();
      const translatedDescription = translation2.text;
      translatedFeed.push({ title: translatedTitle, link: item.link, description: translatedDescription });
    }
    return translatedFeed;
  };

  return (
    <div>
      <Head>
        <title>CoinDesk RSS Feed in Korean</title>
      </Head>
      <h1>CoinDesk RSS Feed in Korean</h1>
      <ul>
        {feed.map((item) => (
          <li key={item.link}>
            <Link href={item.link}>
              <a>{item.title}</a>
            </Link>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feed;