import React from 'react';

const Table = () =>{const schedule = [
  { date: '29-08-2024', day: 'Thursday', celebrant: 'Fr. V. Louis', theme: 'MARY: Mother of Humanity', language: 'English' },
  { date: '30-08-2024', day: 'Friday', celebrant: 'Fr. Anthony Paul', theme: 'MARY: Queen of the Apostles', language: 'Tamil' },
  { date: '31-08-2024', day: 'Saturday', celebrant: 'Fr. Julian Misquitta', theme: 'MARY: Queen of Confessors', language: 'Marathi' },
  { date: '01-09-2024', day: 'Sunday', celebrant: 'Fr. S. Dhiruviyam', theme: 'MARY: Queen of Martyrs', language: 'English' },
  { date: '02-09-2024', day: 'Monday', celebrant: 'Fr. Jenson Poruthur', theme: 'MARY: Queen of Patriarchs', language: 'Malayalam (Syro-Malabar)' },
  { date: '03-09-2024', day: 'Tuesday', celebrant: 'Fr. Lui Heredia', theme: 'MARY: Queen of Migrants', language: 'Konkani' },
  { date: '04-09-2024', day: 'Wednesday', celebrant: 'Fr. Shaji Vazhayll', theme: 'MARY: Queen of Virgins', language: 'Malayalam (Syro-Malankara)' },
  { date: '05-09-2024', day: 'Thursday', celebrant: 'Fr. Godvyn Saldanha', theme: 'MARY: Queen of Prophets', language: 'English' },
  { date: '06-09-2024', day: 'Friday', celebrant: 'Fr. Denis Joseph', theme: 'MARY: Queen of the Family', language: 'Hindi' },
  { date: '07-09-2024', day: 'Saturday', celebrant: 'Fr. V. Louis', theme: 'MARY: Queen of Saints', language: 'Tamil' },
  { date: '08-09-2024', day: 'Sunday', celebrant: 'Bishop John Rodrigues', theme: 'MARY: Queen of Peace', language: 'English' },
];

return (
  <div className='container'>
    <h1>Annual Vailankanni Novena - 2024</h1>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Day</th>
          <th>Celebrant</th>
          <th>Theme</th>
          <th>Language</th>
        </tr>
      </thead>
      <tbody>
        {schedule.map((item, index) => (
          <tr key={index}>
            <td data-label="Date">{item.date}</td>
            <td data-label="Day">{item.day}</td>
            <td data-label="Celebrant">{item.celebrant}</td>
            <td data-label="Theme">{item.theme}</td>
            <td data-label="Language">{item.language}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
}




export default Table;
