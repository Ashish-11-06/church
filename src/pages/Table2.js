import React from 'react';
import '../Style/Table.css'; // Import the CSS file

const Table2 = () => {
  const schedule = [
    { time: '10:00 AM', event: 'Holy Mass', celebrant: 'Rev. Fr. John Dive', From: 'Badnera' },
    { time: '11:00 AM', event: 'Holy Mass', celebrant: 'Rev. Fr. Joe Gaikwad', From: 'Sangamner' },
    { time: '12:00 PM', event: 'Holy Mass', celebrant: 'Rev. Fr. Alwin K.', From: 'Kendal Khurd' },
    { time: '01:00 PM', event: 'Holy Mass', celebrant: 'Rev. Fr. Neville Fernandes', From: 'Panodi' },
    { time: '02:00 PM', event: 'Holy Mass', celebrant: 'Rev. Fr. Wilson Rumao', From: 'Songav' },
  ];

  return (
    <div className='container'>
      <h1>14 Sept 2024 Masses:</h1>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
            <th>Celebrant</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((item, index) => (
            <tr key={index}>
              <td data-label="Time">{item.time}</td>
              <td data-label="Event">{item.event}</td>
              <td data-label="Celebrant">{item.celebrant}</td>
              <td data-label="Location">{item.From}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table2;
