//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [entries, setentries] = useState([]);

  const AddentryPhonebook = (entry) => {
    setentries([...entries, entry].sort((a, b) => a.lastname.toLowerCase() > b.lastname.toLowerCase() ? 1 : -1));

  }

  return (

    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column'

      }}>this is phonebook application
      <Entryform AddentryPhonebook={AddentryPhonebook} />
      <DisplayEntries entries={entries} /></div>
  );
}

function Entryform({ AddentryPhonebook }) {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phonenumber, setphonenumber] = useState("");

  const onhandlechange = (e) => {
    e.preventDefault();
    AddentryPhonebook({ firstname, lastname, phonenumber })
  }
  return (
    <form onSubmit={onhandlechange} style={{ display: 'flex', flexDirection: 'column' }}>
      <input type="text" name='firstname' placeholder='firstname' id='firstname' value={firstname}
        onChange={(e) => setfirstname(e.target.value)} />

      <input type="text" name='lastname' placeholder='lastname' id='lastname' value={lastname}
        onChange={(e) => setlastname(e.target.value)} />

      <input type="text" name='phonenumber' placeholder='phonenumber' id='phonenumber' value={phonenumber}
        onChange={(e) => setphonenumber(e.target.value)} />

      <button type="submit" > submit</button>
    </form>
  )

}

function DisplayEntries({ entries }) {
  return (
    <table>
      <thead>
        <tr>
          <th>first name</th>
          <th>last anme</th>
          <th>phonenumber</th>
        </tr>
      </thead>
      <tbody>

        {entries.map(entry => (

          <tr>
            <td>{entry.firstname}</td>
            <td>{entry.lastname}</td>
            <td>{entry.phonenumber}</td>
          </tr>

        ))}
      </tbody>
    </table>
  )
}

export default App;
