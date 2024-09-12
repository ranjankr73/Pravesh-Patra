import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AttendanceSummary = () => {
  // const [summary, setSummary] = useState([]);

  // useEffect(() => {
  //   const fetchSummary = async () => {
  //     try {
  //       const response = await axios.get('/api/analytics/summary');
  //       setSummary(response.data);
  //     } catch (error) {
  //       console.error('Error fetching summary', error);
  //     }
  //   };

  //   fetchSummary();
  // }, []);

  const summary = [ {studentName: "Ranjan",
      totalDays: 23
    }]

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Attendance Summary</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Student</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Days Attended</th>
          </tr>
        </thead>
        <tbody>
          {summary.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.studentName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.totalDays}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceSummary;
