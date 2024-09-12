import React from 'react';

const Overview = () => {
  // Dummy data for recent attendance
  const attendanceRecords = [
    { id: 1, name: 'John Doe', date: '2024-08-30', status: 'Present' },
    { id: 2, name: 'Jane Smith', date: '2024-08-30', status: 'Absent' },
    { id: 3, name: 'Mike Johnson', date: '2024-08-30', status: 'Present' },
  ];

  return (
        <main className="flex-1 p-6">
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-700">Overview</h2>
            <div className="flex space-x-4 mt-4">
              <div className="flex-1 p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-700">Total Students</h3>
                <p className="mt-2 text-2xl font-bold text-gray-900">50</p>
              </div>
              <div className="flex-1 p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-700">Present Today</h3>
                <p className="mt-2 text-2xl font-bold text-gray-900">45</p>
              </div>
              <div className="flex-1 p-4 bg-white rounded-lg shadow">
                <h3 className="text-lg font-semibold text-gray-700">Absent Today</h3>
                <p className="mt-2 text-2xl font-bold text-gray-900">5</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-700">Recent Attendance Records</h2>
            <table className="w-full mt-4 bg-white rounded-lg shadow">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="p-4 text-left">Name</th>
                  <th className="p-4 text-left">Date</th>
                  <th className="p-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecords.map(record => (
                  <tr key={record.id} className="border-t">
                    <td className="p-4">{record.name}</td>
                    <td className="p-4">{record.date}</td>
                    <td className="p-4">{record.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
  );
};

export default Overview;
