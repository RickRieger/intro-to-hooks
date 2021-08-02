import React, { useState } from 'react';
import './App.css';

function CustomHooksUsingObjectFormat(initialState) {
  const [value, setValue] = useState(initialState);
  function onChange(e) {
    setValue(e.target.value);
  }
  return { value, onChange };
}

function App() {
  const firstName = CustomHooksUsingObjectFormat('');
  const lastName = CustomHooksUsingObjectFormat('');
  const email = CustomHooksUsingObjectFormat('');
  const phone = CustomHooksUsingObjectFormat('');

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(firstName.value);
  }

  return (
    <div className='App'>
      <form onSubmit={handleOnSubmit}>
        <input type='text' placeholder='first name' {...firstName} />
        <br />
        <input type='text' placeholder='last name' {...lastName} />
        <br />
        <input type='email' placeholder='email' {...email} />
        <br />
        <input type='tel' placeholder='enter contact number' {...phone} />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
export default App;
