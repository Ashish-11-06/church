import React from 'react';
import '../Style/Table.css'; // Import the CSS file

const Table2 = () => {
  const schedule = [
    { time: '10:00 AM', event: 'Holy Mass', celebrant: 'Rev. Fr. John Dive', From: 'Badnera' },
    { time: '11:00 AM', event: 'Holy Mass', celebrant: 'Rev. Fr. Joe Gaikwad', From: 'Sangamner' },
    { time: '12:00 PM', event: 'Holy Mass', celebrant: 'Rev. Fr. Alwin K.', From: 'Kendal Khurd' },
    { time: '01:00 PM', event: 'Holy Mass', celebrant: 'Rev. Fr. Neville Fernandes', From: 'Panodi' },
    { time: '02:00 PM', event: 'Holy Mass', celebrant: 'Rev. Fr. Wilson Rumao', From: 'Songav' },
    { time: '07:00 PM', event: 'Prayer For Health', celebrant: 'Rev. Fr. Nelsan Parera', From: 'Ghulewadi' },
    { time: '09:00 PM', event: 'Bhajan Sandhya', celebrant: 'Harigaon Bhajan Group', From: 'Harigaon' },
    { time: '12:00 AM', event: 'Holy Mass', celebrant: 'Rev. Fr. Mukti Prasad', From: 'Ashoknagar' },
    { time: '05:00 AM (next day)', event: 'Holy Mass', celebrant: 'Regional Priests', From: 'St. Teresa Church Harigaon' },
    { time: '07:30 AM (next day)', event: 'Holy Mass', celebrant: 'Rev. Fr. Bhausaheb Sansare', From: 'Pepal Seminary, Pune' },
  ];

  return (
    <div className='container'>
      <h1>14 Sept 2024 Masses:</h1>
      <h6>Note: Evening 04:30 PM: Holy Mass, Will be offered by Chief Priest and Preacher Rev. Dr. Bishop Barthol Barretto (Mahaguru Swami, Catholic Diocese of Nashik)
      </h6>
      <h6>Mass arrangements: By all organizations in the parish</h6>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Event</th>
            <th>Celebrant</th>
            <th>From</th>
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
