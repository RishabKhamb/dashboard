import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { getWeeklyData, getMonthlyData } from '../store';
import 'chart.js/auto';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ActivityChart = () => {
  const [filter, setFilter] = useState('weekly');
  const [chartData, setChartData] = useState(getWeeklyData());

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilter(selectedFilter);

    if (selectedFilter === 'weekly') {
      setChartData(getWeeklyData());
    } else {
      setChartData(getMonthlyData());
    }
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'white',
        },
      },
      y: {
        ticks: {
          color: 'white',
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <div style={{  background: "#1D202A", borderRadius: "8px", }}>
    <div className="chart-header d-flex justify-content-between align-items-center mb-2">
      <h2 className="text-white ms-3 mt-3">Activity</h2>
      <select className="form-select w-auto me-3 text-light text-center mt-3" style={{background: "#4B4D51", border: "none",borderRadius: "16px"}} value={filter} onChange={handleFilterChange}>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
    </div>
    <div className="chart-container" style={{ position: 'relative', width: '100%', height: '180px' }}>
      <Bar data={chartData} options={options} />
    </div>
  </div>
  );
};

export default ActivityChart;
