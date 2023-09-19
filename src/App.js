import React, { useState } from 'react';
import './App.css';

function App() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = async () => {
    try {
      const response = await fetch(`http://16.16.117.49:4000/calculate-age?dob=${dob}`);
      const data = await response.json();

      if (response.status === 200) {
        setAge(data.age);
      } else {
        setAge(null);
        console.error(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <div>
        <label>Date of Birth (YYYY-MM-DD):</label>
        <input type="text" value={dob} onChange={(e) => setDob(e.target.value)} />
        <button onClick={calculateAge}>Calculate Age</button>
      </div>
      {age !== null && <p>Your age is: {age} years</p>}
    </div>
  );
}

export default App;
