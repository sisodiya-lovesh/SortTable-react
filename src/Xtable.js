import React, { useState } from 'react';
import './App.css'; // Import CSS file for styling

const XTable = () => {
  // Initial data state
  const [data, setData] = useState([
    { date: "2022-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-01", views: 100, article: "Article 1" },
    { date: "2023-09-02", views: 150, article: "Article 2" },
    { date: "2023-09-02", views: 120, article: "Article 3" },
    { date: "2020-09-03", views: 200, article: "Article 4" }
  ]);

  // Function to sort by date
  const sortByDate = () => {
    const sortedData = [...data].sort((a, b) => {
      // Sort by date descending, if dates are the same, sort by views descending
      if (a.date > b.date) return -1;
      if (a.date < b.date) return 1;
      return b.views - a.views;
    });
    setData(sortedData);
  };

  // Function to sort by views
  const sortByViews = () => {
    const sortedData = [...data].sort((a, b) => {
      // Sort by views descending, if views are the same, sort by date descending
      if (a.views > b.views) return -1;
      if (a.views < b.views) return 1;
      return b.date.localeCompare(a.date);
    });
    setData(sortedData);
  };

  return (
    <div className="table-container">
      <h1>Date and Views Table</h1>
      <button onClick={sortByDate}>Sort by Date</button>
      <button onClick={sortByViews}>Sort by Views</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default XTable;
