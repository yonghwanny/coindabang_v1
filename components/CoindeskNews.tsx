"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Groq from 'groq';

const App = () => {
  const [rssItems, setRssItems] = useState([]);
  const [translatedItems, setTranslatedItems] = useState([]);

  useEffect(() => {
    const fetchRss = async () => {
      const response = await axios.get('https://www.coindesk.com/arc/outboundfeeds/rss/');
      const rssItems = response.data.rss.channel.item;
      setRssItems(rssItems);
    };
    fetchRss();
  }, []);

  useEffect(() => {
    const translateItems = async () => {
      const groqApiKey = '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';
      const groqApiUrl = `https://api.groq.io/v1/translate`;
      const translatedItems = [];
      rssItems.forEach((item) => {
        const title = item.title;
        const params = {
          text: title,
          target: 'ko',
          api_key: groqApiKey,
        };
        axios.post(groqApiUrl, params)
          .then((response) => {
            const translatedTitle = response.data.translations[0].text;
            translatedItems.push({ ...item, title: translatedTitle });
          })
          .catch((error) => {
            console.error(error);
          });
      });
      setTranslatedItems(translatedItems);
    };
    translateItems();
  }, [rssItems]);

  return (
    <div>
      <h1>Coindesk RSS Feed in Korean</h1>
      <ul>
        {translatedItems.map((item) => (
          <li key={item.link}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;