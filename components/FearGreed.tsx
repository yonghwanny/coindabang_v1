"use client";

import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const FearAndGreedIndex = () => {
  const [data, setData] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    fetch('https://api.alternative.me/fng/?limit=100')
      .then(response => response.json())
      .then(data => {
        setData(data.data);
        setDates(data.data.map(d => d.timestamp));
      });
  }, []);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Fear & Greed Index',
        data: data.map(d => d.value),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  };

  return (
    <div>
      <h1>Bitcoin Fear & Greed Index</h1>
      <Line data={chartData} />
    </div>
  );
};

export default FearAndGreedIndex;