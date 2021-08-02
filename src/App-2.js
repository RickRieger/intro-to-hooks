import React, { useState } from 'react';
import './App.css';
function CustomHooksUsingObjectFormat(initialState) {
  const [value, setValue] = useState(initialState);
  function onChange(e) {
    setValue(e.target.value);
  }
  function clearInput() {
    setValue('');
  }
  return { value, onChange, clearInput };
}
function App() {
  // const firstName = CustomHooksUsingObjectFormat("");
  const {
    value: firstName,
    clearInput: clearFirstNameInput,
    onChange: firstNameOnChange,
  } = CustomHooksUsingObjectFormat('');
  const {
    value: lastName,
    clearInput: clearLastNameInput,
    onChange: lastNameOnChange,
  } = CustomHooksUsingObjectFormat('');
  const {
    value: email,
    clearInput: clearEmailInput,
    onChange: emailOnChange,
  } = CustomHooksUsingObjectFormat('');
  const {
    value: telephone,
    clearInput: clearTelephoneInput,
    onChange: telephoneOnChange,
  } = CustomHooksUsingObjectFormat('');

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    clearFirstNameInput();
    clearLastNameInput();
    clearEmailInput();
    clearTelephoneInput();
  }
  return (
    <div className='App'>
      <form onSubmit={handleOnSubmit}>
        {/* <input type="text" placeholder="first name" {...firstName} /> */}
        <input
          type='text'
          placeholder='first name'
          value={firstName}
          onChange={firstNameOnChange}
        />
        <br />
        <input
          type='text'
          placeholder='last name'
          value={lastName}
          onChange={lastNameOnChange}
        />
        <br />
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={emailOnChange}
        />
        <br />
        <input
          type='tel'
          placeholder='enter contact number'
          value={telephone}
          onChange={telephoneOnChange}
        />
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
export default App;
