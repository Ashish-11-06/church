import React from 'react';
import Table2 from './Table2';
import '../Style/Table.css'; // Import the CSS file

const Table = () => {
  const schedule = [
    { date: '04-09-2024', day: 'Wednesday', celebrant: 'Ra. Rev. Dr. Bishop Lourdes Daniel', theme: 'Flag Hoisting, Inauguration Ceremony', Planner: 'Palkiya Samiti' },
    { date: '05-09-2024', day: 'Thursday', celebrant: 'Ra. Rev. Dr. Bishop Ambrose Rebello', theme: 'Mother of Redemption', Planner: 'Bal Yesu Vibhag' },
    { date: '06-09-2024', day: 'Friday', celebrant: 'Rev. Fr. Anand Gaikwad (Pune Diocese)', theme: 'Mary, Refuge of Sinners', Planner: 'Palkiya Samiti' },
    { date: '07-09-2024', day: 'Saturday', celebrant: 'Rev. Fr. Prakash Bhalerao (Shrirampur)', theme: 'Mary, Blessed Mother', Planner: 'St. Anthony Vibhag' },
    { date: '08-09-2024', day: 'Sunday', celebrant: 'Ra. Rev. Fr. Dr. Bishop Lancy Pinto', theme: 'Birth of Mary', Planner: 'St. Luke Vibhag' },
    { date: '09-09-2024', day: 'Monday', celebrant: 'Rev. Fr. Ajay D Monte (Ahmednagar)', theme: 'Immaculate Conception of Mary', Planner: 'Mother Mary Vibhag' },
    { date: '10-09-2024', day: 'Tuesday', celebrant: 'Rev. Fr. Akshay Adhav (Nevasa)', theme: 'Mary, Dispenser of Graces', Planner: 'St. Teresa Vibhag' },
    { date: '11-09-2024', day: 'Wednesday', celebrant: 'Rev. Fr. Sanjay Parkhe (Ch. Sambhajinagar)', theme: 'Mary, Comforter of the Afflicted', Planner: 'St. Anna, St. Mary, St. Mark' },
    { date: '12-09-2024', day: 'Thursday', celebrant: 'Rev. Fr. Ignatius Kshirsagar (Ch. Sambhajinagar)', theme: 'Mary, Mother of the World', Planner: 'St. Joseph Vibhag' },
    { date: '13-09-2024', day: 'Friday', celebrant: 'Rev. Fr. Pramod Makasare (Nashik Road)', theme: 'Mary, Gate of Heaven', Planner: 'Pragati Nagar' },
  ];

  return (
    <div className='container'>
      <h1>Harigaon Matmauli Novena - 2024</h1>
      <h4>Note: all Masses are in Marathi</h4>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Day</th>
            <th>Celebrant</th>
            <th>Theme</th>
            <th>Planner</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index}>
              <td data-label="Date">{item.date}</td>
              <td data-label="Day">{item.day}</td>
              <td data-label="Celebrant">{item.celebrant}</td>
              <td data-label="Theme">{item.theme}</td>
              <td data-label="Planner">{item.Planner}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Table2></Table2>
    </div>
  );
}

export default Table;
