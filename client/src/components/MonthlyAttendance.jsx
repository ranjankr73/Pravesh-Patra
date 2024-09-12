import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const MonthlyAttendance = () => {
  // const [report, setReport] = useState([]);

  // useEffect(() => {
  //   const fetchMonthlyReport = async () => {
  //     try {
  //       const response = await axios.get('/api/analytics/monthly', { params: { month: '2024-08' } });
  //       setReport(response.data);
  //     } catch (error) {
  //       console.error('Error fetching monthly report', error);
  //     }
  //   };

  //   fetchMonthlyReport();
  // }, []);

    const report = [{
      _id: 123,
      students: "Ranjan"
    }]
  const data = {
    labels: report.map(r => r._id),
    datasets: [
      {
        label: 'Number of Students Present',
        data: report.map(r => r.students),
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      }
    ]
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Monthly Attendance Report</h2>
      <Line data={data} options={{ responsive: true }} />
    </div>
  );
};

export default MonthlyAttendance;
